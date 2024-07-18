import { createClerkClient } from "@clerk/clerk-sdk-node";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
  });

  const req = {
    headers: request.headers,
    method: request.method,
    body: request.body,
    url: request.url,
  };

  const token = request.headers.get("Authorization")?.split(" ")[1];

  console.log("REQUEST", req);
  console.log("TOKEN", token);

  // @ts-ignore
  const res = await clerkClient.authenticateRequest(req);

  console.log(res);

  return Response.json({ hello: "world" });
}
