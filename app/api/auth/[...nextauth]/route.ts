// [...nextauth] => this means that all requests to /api/auth/* will be handled by this file
// ex: /api/auth/signin, /api/auth/signout, /api/auth/callback/google, etc

export { auth, GET, POST } from "@/app/_lib/auth";
