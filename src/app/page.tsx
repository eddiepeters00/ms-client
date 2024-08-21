import Link from "next/link";

export default function Page() {
  return (
    <main className="grid">
      <p>Welcome to my website</p>
      <Link href="/register">Register</Link>
      <Link href="/signin">Sign in</Link>
    </main>
  );
}
