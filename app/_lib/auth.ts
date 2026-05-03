import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";
import { GoogleAuthResponse } from "../_types";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user; // if there are a user object in the auth object, then the user is authorized, otherwise not => !! convert any value to a boolean, in this case if auth?.user is truthy, it will return true, otherwise false
    },
    async signIn({ user, account, profile }: GoogleAuthResponse) {
      // it like a middleware that runs before the user is signed in, it can be used to check if the user is allowed to sign in or not, in this case we are allowing all users to sign in, but you can add your own logic here to restrict access to certain users
      try {
        const existingGuest = await getGuest(user.email!);

        if (!existingGuest)
          await createGuest({
            email: user.email!,
            fullName: user.name!,
          });

        return true; // allow sign in
      } catch {
        return false;
      }
    },
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest?.id; // add the guest id to the session object, so we can use it in the client side to identify the user and fetch their bookings, this is possible because the session object is available in the client side through the useSession hook from next-auth/react
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
