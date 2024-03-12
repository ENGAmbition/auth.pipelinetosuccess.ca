import { trpc } from "@/lib/trpc/client";
import { JSX } from "react";

export default function Home(): JSX.Element {
  const { mutateAsync: generatePasswordResetUrl } =
    trpc.generateUserPasswordResetUrl.useMutation();

  // const result = await generatePasswordResetUrl({email: ""});

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24"></main>
  );
}
