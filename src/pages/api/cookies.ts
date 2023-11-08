import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Set-Cookie", "username=Quang; Path=/; HttpOnly");

  res.status(200).send("Cookies has been set.");
}
