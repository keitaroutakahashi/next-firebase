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
    <div className="h-screen shadow-lg isolate">
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
      <div className="flex flex-col bg-primary-light justify-center items-center py-5">
        <div className="w-16 h-16 rounded-full bg-slate-300"></div>
        <p className="font-bold text-sm mt-3">株式会社 菊地</p>
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
