import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { SignInResponse, signIn } from 'next-auth/react'

type Props = {}

const Login = (props: Props) => {
    const router = useRouter()
    const [errorMessage, setErrorMessage] = useState('')

    const [userForm, setUserForm] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const res: SignInResponse | undefined = await signIn('credentials', {
                email: userForm.email,
                password: userForm.password,
                callbackUrl: `${window.location.origin}/`,
                redirect: false
            })
            if (res && !res.ok) {
                return setErrorMessage(res?.error ?? 'Bir hata oluştuğğ.')
            }
            router.push('/')
        } catch (e: any) {
            console.log(e)
        }
    }

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className='mb-10' >
                        <p className='text-xl font-semibold text-primary-900 border rounded-full bg-white px-10 py-1  w-full' >PERFECTIONIST</p>
                    </div>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">

                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Giriş Yap
                            </h1>
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Email</label>
                                    <input onChange={(e) => setUserForm({ ...userForm, email: e.target.value })} value={userForm.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mail@example.com" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Şifre</label>
                                    <input onChange={(e) => setUserForm({ ...userForm, password: e.target.value })} value={userForm.password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className='flex flex-col gap-2' >
                                    <button type='submit' className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Giriş Yap</button>
                                    {errorMessage !== "" && <div className='border rounded bg-yellow-600 text-white w-full text-xs p-1 text-center' >
                                        {errorMessage}
                                    </div>}

                                </div>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Bir hesabın yok mu ? <Link href="/auth/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Kayıt ol</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login