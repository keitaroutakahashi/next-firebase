type Props = {
  children: React.ReactNode
}

export const Main: React.FC<Props> = ({ children }) => {
  return (
    <main className="bg-primary-light min-h-screen p-7">
      <section>
        <h2 className="font-bold text-xl border-b pb-4 border-gray-light">
          排出物一覧
        </h2>
        <div className="mt-8">{children}</div>
      </section>
    </main>
  )
}
