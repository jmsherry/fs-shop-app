/* eslint-disable */
import Head from "next/head";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Layout from "@/components/layout";
import {Typography, Box} from "@/components/mui"

export default function Profile() {
  const { user, error, isLoading } = useUser();
  let component = null;
  if (isLoading) {
    component = <Typography>Loading...</Typography>;
  } else if (error) {
    component = <Typography>Error: {error.message}</Typography>;
  } else if (!user) {
    component = (
      <Box>
        <Typography>Not logged in</Typography>
        <Typography>
          <Link href="/api/auth/login">Login</Link>
        </Typography>
      </Box>
    );
  } else {
    component = (
      <Box>
        <Typography>
          Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
        </Typography>
        <Box component="pre">{JSON.stringify(user, null, 2)}</Box>
      </Box>
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
      <Layout>{component}</Layout>
    </>
  );
}
