"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Welcome {session?.user?.name}. Signed In As {session.user?.role}</p>
        <p>{session.user?.email}</p>

        <button onClick={() => signOut()}>
      تسجيل الخروج
    </button>
      </>
    );
  }
  
  return (
    <div className="flex flex-col gap-8">
    <button onClick={() => signOut()}>Sign out</button>
      <p>Not Signed In</p>
      <button className="bg-green-300" onClick={() => signIn('credentials', {
        email: "admin@gmail.com",
        name: "admin",
        password: "password",
        role: "admin",
      })}>Sign in as Admin</button>
      <button className="bg-green-300" onClick={() => signIn('credentials', {
        email: "developer@gmail.com",
        name: "developer",
        password: "password",
        role: "developer",
      })}>Sign in as Developer</button>
      <button className="bg-green-300" onClick={() => signIn('credentials', {
        email: "man@gmail.com",
        name: "man",
        password: "password",
        role: "man",
      })}>Sign in as Man</button>
    </div>
  );
}
