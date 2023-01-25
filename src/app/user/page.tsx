import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
import React from "react";

const User = async ({}) => {
  const session = await unstable_getServerSession(authOptions);
  const accessToken = session?.accessToken;
  const data = await fetch(
    "https://graph.facebook.com/me?access_token=" + accessToken
  );
  const display = await data.json();
  return <pre>{JSON.stringify(display)}</pre>;
};

export default User;
