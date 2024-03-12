import { Prisma } from "@/lib/prisma";
import { publicProcedure } from "../trpc";
import { z } from "zod";
import { User } from "next-auth";
import { use } from "react";
const jwt = require('jwt-simple');
// need to switch this to be to more modern JS
const nodemailer = require("nodemailer");

export const usersRouter = {
  /**
   * Get all users in the database. This endpoint is secure because it does not fetch the users
   * password or secret. This is the only secure way to get all users.
   */
  getAllUsers: publicProcedure.mutation(async () => {
    const users = await Prisma.getAllUsers();

    return { users, success: true, message: "Success" };
  }),

  /**
   * Get an user by their email. This is unsecure because it also fetches the users
   * password. This tRPC endpoint is only for the next-auth credentials provider.
   */
  getUserByEmailUnsecure: publicProcedure
    .input(z.object({ email: z.string() }))
    .mutation(async ({ input }) => {
      const user = await Prisma.getUserByEmailUnsecure(input.email);

      return { user, success: true, message: "Success" };
    }),

  /**
   * gets a user by their email and generates a password reset URL to be sent to the user
   */
  generateUserPasswordRestUrl: publicProcedure
    .input(z.object({ email: z.string() }))
    .mutation(async ({ input }) => {
      const userEmail = await Prisma.getUserByEmailUnsecure(input.email);

      if (!userEmail) {
        return { success: false, message: "User not found" };
      }
      // securely transmit token expiring in 15 mins
      const token = jwt.sign(process.env.JWT_SECRET, { expiresIn: '15m' });

      // send email to user with password reset link
      let transporter = nodemailer.createTransport({
        host: "needemail.com", // NEED AN EMAIL FOR EMAIL TO BE SENT TO
        port: 465,
        secure: true,
        auth: {
          user: userEmail,
          pass: "NEED PASSWORD" // USER NEEDS PASSWORD

        },
      })

      // the email that will be sent to the user
      const data = {
        form: "needemail@email.com", // NEED EMAIL TO BE SENDER ADDRESS
        to: userEmail,
        subject: "Reset Account Password Link", //NEED BETTER SUBJECT LINE
        html: "<h3>Click link to rest password ${process.env.NEXTAUTH_URL}/resetpassword/${token}</h3>" //need to fix this also unsure about using next_auth url
      }

    }),

  /**
   * verifys user's password
   */
  verifyUserPasswordReset: publicProcedure
    .input(z.object({ email: z.string(), token: z.string() }))
    .mutation(async ({ input }) => {
      const user = await Prisma.getUserByEmailUnsecure(input.email);

      if (!user) {
        return { success: false, message: "User not found" };
      }
    }),
};
