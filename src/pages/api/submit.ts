import type { NextApiRequest, NextApiResponse } from "next";

const createMen = async (data: { name: string }) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Set-Cookie", "username=lee; Path=/; HttpOnly");
  res.status(200).send("Cookie has been set.");

  const data = req.body;
  const _res = await createMen(data);

  return res.status(200).json(_res);
}
