import Link from "next/link";
import { auth } from "@/app/_lib/auth";
import { Session } from "next-auth";

export default async function Navigation() {
  const session: Session | null = await auth();

  /*
  console.log(session);
    {
    user: {
        name: 'Ahmed Mohamed',
        email: 'ahmedmohamed302098@gmail.com',
        image: 'https://lh3.googleusercontent.com/a/ACg8ocI7d7RbMXhvM4PMc8T5JHCC3_BCI5o0YqtGsDNJFKcW-H2G2oCLfA=s96-c'
      },
      expires: '2026-05-22T12:23:21.604Z'
    } || null
  */

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              <img
                src={session?.user?.image}
                alt={session?.user?.name}
                className="h-8 rounded-full"
                referrerPolicy="no-referrer"
              />
              <span className="mt-1">Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
