import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  currentPath: string
}

const LINK = [
  {
    path: '/accept-side/emissions',
    label: '排出物一覧',
  },
]

export const Sidebar: React.FC<Props> = ({ currentPath }) => {
  return (
    <div className="isolate h-screen shadow-lg">
      <div className="p-2">
        <h1>
          <Image
            src="/images/logo.png"
            width={200}
            height={100}
            alt="tsunagu"
          />
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center bg-primary-light py-5">
        <div className="h-16 w-16 rounded-full bg-slate-300"></div>
        <p className="mt-3 text-sm font-bold">株式会社 菊地</p>
      </div>
      <nav className="px-5 py-6">
        <ul className="text-sm">
          {LINK.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={classNames({
                  'font-bold': item.path === currentPath,
                })}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
