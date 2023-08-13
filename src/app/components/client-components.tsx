'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import React, { useState, useEffect } from 'react'

export default function ClientComponent() {
  const { user } = useUser()

  useEffect(() => {
    ;(async () => {
      const res = await fetch(`${window.location.origin}/api/profile`)
      console.log(await res.json())
    })()
  }, [])

  if (user) {
    return (
      <pre data-testid="client-component">{JSON.stringify(user, null, 2)}</pre>
    )
  }
  return <></>
}
