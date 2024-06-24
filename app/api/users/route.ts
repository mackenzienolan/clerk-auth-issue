import { createClerkClient } from "@clerk/clerk-sdk-node";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
  });

  const req = {
    headers: {
      authorization: request.headers.get("Authorization"),
    },
  };

  const token = request.headers.get("Authorization")?.split(" ")[1];

  console.log("REQUEST", req);
  console.log("TOKEN", token);

  const res = await clerkClient.authenticateRequest(
    // @ts-ignore
    req,
    {
      headerToken: request.headers.get("Authorization")?.split(" ")[1],
    },
  );

  console.log(res);

  return Response.json({ hello: "world" });
}
