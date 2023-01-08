import MobileNav from './MobileNav'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/heading-logo.svg'
import Link from './Link'

const NavigationBar = () => {
  return (
    <header className="mb-4 py-4">
      <div className="mx-auto flex items-center justify-between bg-cardBg bg-opacity-5">
        {/* <div className="mx-auto flex max-w-3xl items-center justify-between bg-cardBg bg-opacity-5 px-4 sm:px-6 xl:max-w-5xl xl:px-0"> */}
        <Link href="/" aria-label="AcidOP">
          <div className="mr-3 animate-pulse">
            <Logo />
          </div>
        </Link>
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:flex">
            {headerNavLinks.map((link, index) => {
              if (link.type !== 'dropdown') {
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className="p-1 font-bold text-gray-100 hover:text-primary-400 sm:p-4"
                  >
                    {link.title}
                  </Link>
                )
              }
              if (link.type === 'dropdown') {
                return (
                  <Menu as="a" className="relative inline-block p-1 sm:p-4">
                    <div>
                      <Menu.Button className="inline-flex justify-center rounded-md bg-transparent font-bold text-gray-100 hover:text-primary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        {link.title}
                        <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mt-2 w-24 origin-top-right rounded-md bg-cardBg shadow-lg focus:outline-none">
                        {link.links.map((item, index) => (
                          <div key={index} className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active ? 'text-primary-400' : 'text-gray-100'
                                  } group flex w-full justify-center  rounded-md px-2 py-2`}
                                >
                                  <Link href={item.href}>{item.title}</Link>
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )
              }
            })}
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default NavigationBar
