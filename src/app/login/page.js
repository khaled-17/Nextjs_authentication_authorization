"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();

  return (
    <div>
      {/* <>
        {session && <h1> {session.user.email}</h1>}
        <button onClick={() => signOut()}>Sign out</button>
      </> */}

      <h1>Login</h1>
    </div>
  );
};

export default Page;
