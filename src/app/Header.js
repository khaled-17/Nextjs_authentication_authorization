"use client"

import { useSession } from 'next-auth/react';
import Link from 'next/link';

const Header = () => {

  const { data: session } = useSession();

  return (
    <header className="bg-blue-600 p-4">
      <nav className="flex justify-between">
        <div className="text-white font-bold">
          <h1>My App</h1>
          <Link className="text-white hover:bg-blue-700 px-3 py-2 rounded-md" href="/">home</Link>
        </div>
        <div className="text-white">  <p>{session&&"Welcome"} {session?.user?.name} </p></div>
        <div className="flex space-x-4">
          <Link className="text-white hover:bg-blue-700 px-3 py-2 rounded-md" href="/admin">
            Admin 
          </Link>
          <Link className="text-white hover:bg-blue-700 px-3 py-2 rounded-md" href="/developer">
           Developer
          </Link>
          <Link className="text-white hover:bg-blue-700 px-3 py-2 rounded-md" href="/man">
           Man
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
