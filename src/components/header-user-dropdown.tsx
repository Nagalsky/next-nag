import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

export default function HeaderUserDropdown() {
  const { data: session } = useSession()

  const ref = useRef(null)

  const [opened, setOpened] = useState(false)

  const handleClickOpen = () => {
    setOpened((prev) => !prev)
  }

  const handleClickOutside = () => {
    setOpened(false)
  }

  useOnClickOutside(ref, handleClickOutside)

  return (
    <div className="relative flex items-center gap-4" ref={ref}>
      <Image
        src={session?.user?.image || 'https://via.placeholder.com/40'}
        width={40}
        height={40}
        alt="Avatar"
        placeholder="blur"
        blurDataURL={`${session?.user?.image}?auto=format,compress&q=1&blur=500&w=2`}
        priority
        className="rounded-full cursor-pointer"
        onClick={handleClickOpen}
      />

      {opened && (
        <div className="absolute right-0 top-full z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-2">
            <button
              onClick={() => signOut()}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none w-full"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
