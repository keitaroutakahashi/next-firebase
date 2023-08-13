import { Sidebar } from '~/app/accept-side//components/Sidebar'
import { Main } from '~/app/accept-side//components/Main'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="grid grid-cols-[250px_1fr]">
        <Sidebar />
        <Main>{children}</Main>
      </div>
    </div>
  )
}
