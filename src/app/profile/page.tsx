import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import React, { Suspense } from "react"
import ClientComponent from "../components/client-components"
import ServerComponent from "../components/server-components"

export default withPageAuthRequired(
  async function Page() {
    return (
      <main>
        <h2>Server Component:</h2>
        <Suspense fallback={<div>server loading</div>}>
          <ServerComponent />
        </Suspense>
        <h2>Client Component:</h2>
        <Suspense fallback={<div>client loading</div>}>
          <ClientComponent />
        </Suspense>
      </main>
    )
  },
  { returnTo: "/profile" },
)
