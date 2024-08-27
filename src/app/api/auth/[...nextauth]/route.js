import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
// import { API } from "@/services";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",

      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials 
        // const res = await API.login({ email, password });
        // if (res?.status) {
        //   return res.data; // Return user data if login is successful
        // } else {
        //   throw new Error(res.message || "Invalid credentials"); // Custom error message
        // }
        return credentials
      },
    }),
  ],
  pages: {
    signIn: "/signIn",
    error: "/signIn", // Redirect to login page on error
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 1 day in seconds
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      // console.log("mmmmmmmmm",session,token)
      // session.user.id = token.id;
      return session;
    },
  },
};

// const handler = NextAuth(authOptions);

const handlers = NextAuth(authOptions);
export { handlers as GET, handlers as POST };

// export const { GET, POST } = handlers;