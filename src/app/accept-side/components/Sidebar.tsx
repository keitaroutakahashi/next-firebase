"use client"

import { useUser } from "@auth0/nextjs-auth0/client"
import { usePathname } from "next/navigation"
import { Sidebar as SidebarUI } from "~/components/ui/sidebar/Sidebar"

const a = {
  a: 1,
}

export const Sidebar = () => {
  const { user, error, isLoading } = useUser()
  const pathname = usePathname()

  console.log(user)

  return <SidebarUI currentPath={pathname} />
}
