type Props = {
  children: React.ReactNode
}

export const Main: React.FC<Props> = ({ children }) => {
  return (
    <main className="min-h-screen bg-primary-light p-7">
      <section>
        <h2 className="border-b border-gray-light pb-4 text-xl font-bold">
          排出物一覧
        </h2>
        <div className="mt-8">{children}</div>
      </section>
    </main>
  )
}
