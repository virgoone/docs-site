import { NextApiRequest, NextApiResponse } from "next";

const TRAY_URL = process.env.TRAY_URL;

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const user = {
      email: req.body.email,
    };

    try {
      const trayRes = await fetch(TRAY_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log('trayRes-->', trayRes)

      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(404).send(null);
  }
}

export default handler;
