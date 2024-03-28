import { JSX } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home(): JSX.Element {
  const { data: session } = useSession();

  if (!session) {
    redirect("/signin");
  } else {
    redirect("/signup");
  }
}
