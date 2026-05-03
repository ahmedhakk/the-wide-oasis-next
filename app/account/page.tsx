import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest Area",
  description: "Manage your account settings and preferences",
};

export default async function Page() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ").at(0);

  /*
  console.log(session); 
  {
  user: {
    name: 'Ahmed Mohamed',
    email: 'ahmedmohamed302098@gmail.com',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocI7d7RbMXhvM4PMc8T5JHCC3_BCI5o0YqtGsDNJFKcW-H2G2oCLfA=s96-c',
    guestId: 93
  },
  expires: '2026-06-02T15:49:43.842Z'
}
  */

  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome {firstName} to your Account
    </h2>
  );
}
