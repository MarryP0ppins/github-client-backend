import express, { Request, Response } from "express";
import querystring from "querystring";
import { get } from "lodash";
import axios from "axios";
import cors from "cors";

const app = express();

const GITHUB_CLIENT_ID = "7e515e61b9affe886841";
const GITHUB_CLIENT_SECRET = "ddfcbae14e1e46b71e7e3541cac6a7ff844a7401";

app.use(cors());

async function getGitHubUser({
  code,
}: {
  code: string;
}): Promise<{ access_token: string }> {
  const githubToken = await axios
    .post(
      `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${code}`
    )
    .then((res) => res.data)

    .catch((error) => {
      throw error;
    });

  const decoded = querystring.parse(githubToken);

  const accessToken = decoded.access_token as string;

  return { access_token: accessToken };
}

app.get("/getAccessToken", async (req: Request, res: Response) => {
  const code = get(req, "query.code") as string;
  const redirect_uri = get(req, "query.redirect_uri");
  const path = get(req, "query.path", "/");

  if (!code) {
    throw new Error("No code!");
  }

  const access_token = await getGitHubUser({ code });

  res.json(access_token);
});

app.listen(4000, () => {
  console.log("Server is listening");
});
