import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaUserTie } from 'react-icons/fa'

import { Disclosure, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Öğrenciler', href: '/admin/students', page: "students", },
    { name: 'Öğrenci Soruları', href: '/admin/student-questions', page: "student-questions", },
    { name: 'Cümle Ekle', href: '', page: "", },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const router = useRouter().query


    return (
        <Disclosure as="nav" className="bg-primary-800 ">
            {({ open }) => (
                <>
                    <div className="mx-auto w-full px-2 md:px-6 lg:px-8 ">
                        <div className="w-full relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 right-0 flex items-center lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                                {/* Profile dropdown */}
                                <div className="inset-y-0 left-0 flex items-center lg:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        {open ? (
                                            <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-between' >
                                <div className='text-white w-full hidden lg:flex items-center gap-10 text-sm' >
                                    {
                                        navigation.map((item) => (
                                            <Link passHref className={`${router.page === item.page ? "bg-white/20 rounded px-3 py-1" : ""}`} href={{ pathname: item.href, query: { page: item.page } }} >{item.name}</Link>
                                        ))
                                    }

                                </div>
                                <div className='hidden lg:flex items-center' >
                                    <FaUserTie className='text-white text-lg' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="lg:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Link passHref
                                    key={item.name}
                                    href={{ pathname: item.href, query: { page: item.page } }}
                                    className={classNames(
                                        router.page === item.page ? 'bg-primary-700/50 text-white' : 'text-gray-300',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
