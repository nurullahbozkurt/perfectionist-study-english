import Link from 'next/link'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { useApp } from '@/states/app'



const grammars = [
    { name: 'AM IS ARE', description: '', href: '/grammars/am-is-are', tense: "Simple Present Tense" },
    { name: 'WILL + V1', description: "", href: '/grammars/will-v1', tense: "Simple Present Tense" },
    { name: "DO/DOES/DOESN'T", description: "-ar, -er, -ır, -ir", href: '/grammars/do-does', tense: "Simple Present Tense" },

    { name: 'HAD + V3', description: "-mıştı, -mişti, -muştu, -müştü”", href: '/grammars/had-v3', tense: "Past Simple Tense" },
    { name: 'WAS / WERE', description: " -dı, di, du, dü, tı, ti, tu, tü", href: '/grammars/was-were', tense: "Past Simple Tense" },
    { name: "DID DIDN'T", description: "-dı, -di, -du, -dü, -tı, -ti, -tu, -tü", href: '/grammars/did', tense: "Past Simple Tense" },

    { name: 'WILL BE ', description: "", href: '/grammars/will-be', tense: "Future Tenses" },
    { name: 'WILL HAVE + V3 ', description: "", href: '/grammars/will-have-v3', tense: "Future Tenses" },
    { name: 'AM IS ARE GOING TO + V2', description: '-ecek, -acak', href: '/grammars/am-is-are-going-to', tense: "Future Tenses" },
    { name: 'WILL HAVE BEEN + V3 ', description: "", href: '/grammars/will-have-v3', tense: "Future Tenses" },

    { name: 'HAVE BEEN/HAS BEEN', description: "FOR/SINCE", href: '/grammars/have-been-has-been', tense: "Present Perfect Tense" },
    { name: 'HAVE / HAS + V3', description: "-mış, -miş, -muş, -müş", href: '/grammars/have-has-v3', tense: "Present Perfect Tense" },
    { name: 'HAVE BEEN/HAS BEEN + VING', description: "FOR/SINCE + -yordu", href: '/grammars/have-been-has-been-ving', tense: "Present Perfect Tense" },

    { name: 'HAD BEEN', description: "FOR/SINCE + -dı, -di, -du, -dü, -tı, -ti, -tu, -tü", href: '/grammars/had-been', tense: "Past Continuous Tense" },
    { name: 'HAD BEEN + VING', description: "Verb + -yordu + -dı, -di, -du, -dü, -tı, -ti, -tu, -tü", href: '/grammars/had-been-ving', tense: "Past Continuous Tense" },

    { name: 'WILL BE + VING', description: "", href: '/grammars/will-be-ving', tense: "Present Continuous Tense" },
    { name: 'AM IS ARE + VING', description: 'Verb + -yor', href: '/grammars/am-is-are-ving', tense: "Present Continuous Tense" },
    { name: 'WAS / WERE + VING', description: "Verb + -yordu + -dı, -di, -du, -dü, -tı, -ti, -tu, -tü", href: '/grammars/was-were-ving', tense: "Present Continuous Tense" },

]
const activeTenses = [
    { name: 'AM IS ARE', description: '', href: '/active-tenses/am-is-are', tense: "Simple Present Tense" },
    { name: 'WILL + V1', description: "", href: '/active-tenses/will-v1', tense: "Simple Present Tense" },
    { name: "DO/DOES/DOESN'T", description: "-ar, -er, -ır, -ir", href: '/active-tenses/do-does', tense: "Simple Present Tense" },

    { name: 'HAD + V3', description: "-mıştı, -mişti, -muştu, -müştü”", href: '/active-tenses/had-v3', tense: "Past Simple Tense" },
    { name: 'WAS / WERE', description: " -dı, di, du, dü, tı, ti, tu, tü", href: '/active-tenses/was-were', tense: "Past Simple Tense" },
    { name: "DID DIDN'T", description: "-dı, -di, -du, -dü, -tı, -ti, -tu, -tü", href: '/active-tenses/did', tense: "Past Simple Tense" },

    { name: 'WILL BE ', description: "", href: '/active-tenses/will-be', tense: "Future Tenses" },
    { name: 'WILL HAVE + V3 ', description: "", href: '/active-tenses/will-have-v3', tense: "Future Tenses" },
    { name: 'WILL HAVE BEEN + VING ', description: "", href: '/active-tenses/will-have-been-ving', tense: "Future Tenses" },
    { name: 'AM IS ARE GOING TO + V1', description: '-ecek, -acak', href: '/active-tenses/am-is-are-going-to-v1', tense: "Future Tenses" },

    { name: 'HAVE BEEN/HAS BEEN', description: "FOR/SINCE", href: '/active-tenses/have-been-has-been', tense: "Present Perfect Tense" },
    { name: 'HAVE / HAS + V3', description: "-mış, -miş, -muş, -müş", href: '/active-tenses/have-v3-has-v3', tense: "Present Perfect Tense" },
    { name: 'HAVE BEEN/HAS BEEN + VING', description: "FOR/SINCE + -yordu", href: '/active-tenses/have-been-has-been-ving', tense: "Present Perfect Tense" },

    { name: 'HAD BEEN', description: "FOR/SINCE + -dı, -di, -du, -dü, -tı, -ti, -tu, -tü", href: '/active-tenses/had-been', tense: "Past Continuous Tense" },
    { name: 'HAD BEEN + VING', description: "Verb + -yordu + -dı, -di, -du, -dü, -tı, -ti, -tu, -tü", href: '/active-tenses/had-been-ving', tense: "Past Continuous Tense" },

    { name: 'WILL BE + VING', description: "", href: '/active-tenses/will-be-ving', tense: "Present Continuous Tense" },
    { name: 'AM IS ARE + VING', description: 'Verb + -yor', href: '/active-tenses/am-is-are-ving', tense: "Present Continuous Tense" },
    { name: 'WAS / WERE + VING', description: "Verb + -yordu + -dı, -di, -du, -dü, -tı, -ti, -tu, -tü", href: '/active-tenses/was-were-ving', tense: "Present Continuous Tense" },

]

const tenses = [
    "Future Tenses",
    "Past Simple Tense",
    "Simple Present Tense",
    "Past Continuous Tense",
    "Present Perfect Tense",
    "Present Continuous Tense",

]

type Props = {
    isOpenMenuModal: boolean,
    setIsOpenMenuModal: React.Dispatch<React.SetStateAction<boolean>>
    showActiveTenses: boolean,
    showGrammers: boolean,

}

export default function MenuModal(props: Props) {
    const { setIsSidebarOpen, isSidebarOpen, openNav } = useApp()

    function closeModal() {
        props.setIsOpenMenuModal(false)
        if (isSidebarOpen) {
            openNav && openNav()
        }
        setIsSidebarOpen(false)
    }

    return (
        <>
            <Transition appear show={props.isOpenMenuModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto z-50">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full z-50 max-h-[500px] sm:max-h-max overflow-y-scroll sm:max-w-3xl max-w-[300px] lg:ml-[40px] transform overflow-hidden rounded-2xl bg-white p-2 sm:p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 ml-3 pt-1 sm:ml-0"
                                    >
                                        {props.showGrammers && "Gramerler"}
                                        {props.showActiveTenses && "Active Tense"}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        {props.showGrammers && <div className="p-2 sm:p-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                                            {tenses.map((tense) => (
                                                <div className='w-full' >
                                                    <h3 className="text-xs leading-6 font-medium text-gray-900">{tense}</h3>
                                                    {grammars.filter((item) => item.tense === tense).map((item) => (
                                                        <div className='w-full border p-0.5 rounded m-0.5 md:m-1 text-gray-900 hover:bg-gray-200' >
                                                            <Link onClick={closeModal} passHref href={{ pathname: item.href, query: { page: "Gramer" } }} className="w-full h-full flex items-center mt-1 text-[10px] px-2 py-1 rounded">{item.name}</Link>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>}

                                        {props.showActiveTenses && <div className="p-2 sm:p-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                                            {tenses.map((tense) => (
                                                <div>
                                                    <h3 className="text-xs leading-6 font-medium text-gray-900">{tense}</h3>
                                                    {activeTenses.filter((item) => item.tense === tense).map((item) => (
                                                        <div className='border p-0.5 rounded m-0.5 md:m-1 text-gray-900 hover:bg-gray-200' >
                                                            <Link onClick={closeModal} passHref href={{ pathname: item.href, query: { page: "Active Tense" } }} className="w-full flex items-center mt-1 text-[10px] px-2 py-1 rounded">{item.name}</Link>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>}
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}









{/* <div className="p-4 grid grid-cols-3 gap-4">
                        {tenses.map((tense) => (
                            <div>
                                <h3 className="text-xs leading-6 font-medium text-gray-900">{tense}</h3>
                                {grammars.filter((item) => item.tense === tense).map((item) => (
                                    <div className='' >
                                        <a href={item.href} className="mt-1 text-[10px] text-gray-900 hover:bg-gray-200 px-2 py-1 rounded">{item.name}</a>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div> */}