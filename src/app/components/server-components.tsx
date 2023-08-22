import { getSession, getAccessToken } from "@auth0/nextjs-auth0"
import { headers } from "next/headers"

export default async function Page() {
  const session = await getSession()
  const accessToken = await getAccessToken()

  console.log("accessToken", accessToken)

  const res = await fetch("http://localhost:3000/api/profile", {
    headers: { authorization: accessToken.accessToken || "" },
  })
  const profile = await res.json()
  console.log(profile)

  if (session) {
    return (
      <>
        <h3>Access Token</h3>
        <pre data-testid="server-component-at">
          {JSON.stringify(accessToken, null, 2)}
        </pre>
        <h3>User</h3>
        <pre data-testid="server-component">
          {JSON.stringify(session.user, null, 2)}
        </pre>
      </>
    )
  }
  return <></>
}
