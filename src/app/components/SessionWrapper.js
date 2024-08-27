// mark as client component
"use client";
import { SessionProvider } from "next-auth/react"

import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

const SessionWrapper = ({children} ) => {
  return (
    <SessionProvider>
    <>
    
     {children}
    </>
    
    </SessionProvider>
  )
}

export default SessionWrapper