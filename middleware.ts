// import { NextResponse } from "next/server";
// export function middleware(request: Request) {
//   return NextResponse.redirect(new URL("/about", request.url));
// }

import { auth } from "@/app/_lib/auth";

export const middleware = auth;

export const config = {
  matcher: ["/account"], // we can specify which routes we want to run this middleware on, if empty it will run on all routes
};
