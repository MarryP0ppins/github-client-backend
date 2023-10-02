import { defineSecret } from "firebase-functions/params";
import { onRequest } from "firebase-functions/v2/https";

//---PRODUCTION---
const clientIdProduction = defineSecret("CLIENT_ID");
const clientSecretProduction = defineSecret("CLIENT_SECRET");

export const getGithubAccessToken = onRequest(
  { secrets: [clientIdProduction, clientSecretProduction] },
  async (request, response) => {
    const params =
      "?client_id=" +
      clientIdProduction.value() +
      "&client_secret=" +
      clientSecretProduction.value() +
      "&code=" +
      request.query.code;
    try {
      const result = await fetch(
        "https://github.com/login/oauth/access_token" + params,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
        }
      ).then((result) => result.json());
      response
        .set({
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Origin": "*",
        })
        .json(result);
    } catch (error) {
      response.json(error);
    }
  }
);

//---DEVELOPED---
const clientIdDeveloped = defineSecret("CLIENT_ID_DEVELOPED");
const clientSecretDeveloped = defineSecret("CLIENT_SECRET_DEVELOPED");

export const getGithubAccessTokenDeveloped = onRequest(
  { secrets: [clientIdDeveloped, clientSecretDeveloped] },
  async (request, response) => {
    const params =
      "?client_id=" +
      clientIdDeveloped.value() +
      "&client_secret=" +
      clientSecretDeveloped.value() +
      "&code=" +
      request.query.code;
    try {
      const result = await fetch(
        "https://github.com/login/oauth/access_token" + params,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
        }
      ).then((result) => result.json());
      response
        .set({
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Origin": "*",
        })
        .json(result);
    } catch (error) {
      response.json(error);
    }
  }
);

//---DEPLOY---
const clientIdDeploy = defineSecret("CLIENT_ID_DEPLOY");
const clientSecretDeploy = defineSecret("CLIENT_SECRET_DEPLOY");

export const getGithubAccessTokenDeploy = onRequest(
  { secrets: [clientIdDeploy, clientSecretDeploy] },
  async (request, response) => {
    const params =
      "?client_id=" +
      clientIdDeploy.value() +
      "&client_secret=" +
      clientSecretDeploy.value() +
      "&code=" +
      request.query.code;
    try {
      const result = await fetch(
        "https://github.com/login/oauth/access_token" + params,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
        }
      ).then((result) => result.json());
      response
        .set({
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Origin": "*",
        })
        .json(result);
    } catch (error) {
      response.json(error);
    }
  }
);
