import { JSX } from "react";

export default function forgotpassword(): JSX.Element {
  // import trpc from client
  // define async function for on click 
  // generate password url 
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* form for info for password reset */}
      <div>
        <form action="/passwordreset" method="POST">
          <input type="email" name="email" value="" placeholder="Enter your email address..." />
          <input type="submit" value="Reset Password" />
        </form>
      </div>
    </main>

  );
}
