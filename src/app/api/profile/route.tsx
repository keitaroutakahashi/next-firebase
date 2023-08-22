import console from "console"
import {
  getSession,
  withApiAuthRequired,
  getAccessToken,
} from "@auth0/nextjs-auth0"
import { NextResponse } from "next/server"

const GET = async (req: Request) => {
  console.log("req", req.headers.get("authorization"))
  // const session = await getSession()
  // const accessToken = await getAccessToken()

  // console.log(session, "session")
  // console.log(accessToken, "accessToken")

  return NextResponse.json({ a: "a" })
}

export { GET }

// const GET = withApiAuthRequired(async () => {
//   const session = await getSession()

//   return NextResponse.json(session?.user)
// })

// export { GET }
