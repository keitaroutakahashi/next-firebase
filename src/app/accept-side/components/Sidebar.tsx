'use client'

import { usePathname } from 'next/navigation'
import { Sidebar as SidebarUI } from '~/components/ui/sidebar/Sidebar'

export const Sidebar = () => {
  const pathname = usePathname()

  return <SidebarUI currentPath={pathname} />
}
