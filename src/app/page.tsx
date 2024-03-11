import { JSX } from "react";

export default function Home(): JSX.Element {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <form action="/passwordreset" method="POST">
          <input type="email" name="email" value="" placeholder="Enter your email address..." />
          <input type="submit" value="Reset Password" />
        </form>
      </div>
    </main>

  );
}
