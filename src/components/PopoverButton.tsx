import React, { Fragment } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'


type Props = {
    items: {
        name: string;
        description: string;
        href: string;
        tense: string;
    }[];
    title: string;
}

const PopoverButton = (props: Props) => {
    const tenses = [
        "Future Tenses",
        "Past Simple Tense",
        "Simple Present Tense",
        "Past Continuous Tense",
        "Present Perfect Tense",
        "Present Continuous Tense",

    ]
    return (
        <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-100">
                {props.title}
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute -left-[100px] top-full z-10 mt-3 w-screen max-w-2xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4 grid grid-cols-3 gap-4">
                        {tenses.map((tense) => (
                            <div>
                                <h3 className="text-xs leading-6 font-medium text-gray-900">{tense}</h3>
                                {props.items.filter((item) => item.tense === tense).map((item) => (
                                    <div className='' >
                                        <a href={item.href} className="mt-1 text-[10px] text-gray-900 hover:bg-gray-200 px-2 py-1 rounded">{item.name}</a>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
        // <Popover className="relative">
        //     <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-100">
        //         {props.tense}
        //         <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
        //     </Popover.Button>

        //     <Transition
        //         as={Fragment}
        //         enter="transition ease-out duration-200"
        //         enterFrom="opacity-0 translate-y-1"
        //         enterTo="opacity-100 translate-y-0"
        //         leave="transition ease-in duration-150"
        //         leaveFrom="opacity-100 translate-y-0"
        //         leaveTo="opacity-0 translate-y-1"
        //     >
        //         <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
        //             <div className="p-4 grid grid-cols-4 gap-3">
        //                 {props.items.filter((item) => item.tense === props.tense).map((item) => (
        //                     <div
        //                         key={item.name}
        //                         className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50"
        //                     >
        //                         <div className="flex-auto">
        //                             <a href={item.href} className="block font-semibold text-gray-900">
        //                                 {item.name}
        //                                 <span className="absolute inset-0" />
        //                             </a>
        //                         </div>
        //                     </div>
        //                 ))}
        //             </div>
        //         </Popover.Panel>
        //     </Transition>
        // </Popover>
    )
}

export default PopoverButton