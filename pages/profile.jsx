import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Profile() {
  const { user, error, isLoading } = useUser();
  let component = null;
  if (isLoading) {
    component = <p>Loading...</p>;
  } else if (error) {
    component = <p>Error: {error.message}</p>;
  } else if (!user) {
    component = (
      <div>
        <p>Not logged in</p>
        <p>
          <a href="/api/auth/login">Login</a>
        </p>
      </div>
    );
  } else {
    component = (
      <div>
        <p>
          Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
        </p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>Shop App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {component}
    </>
  );
}
