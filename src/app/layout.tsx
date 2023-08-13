import { UserProvider } from "@auth0/nextjs-auth0/client"
import { Inter } from "next/font/google"
import "~/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <UserProvider>
        <body className={`${inter.className} text-black`}>{children}</body>
      </UserProvider>
    </html>
  )
}
