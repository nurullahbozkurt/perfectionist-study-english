import React, { use, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ro } from 'date-fns/locale'

type Props = {}

const Register = (props: Props) => {
    const { data: session, status } = useSession()
    const [errorMessage, setErrorMessage] = useState('')
    const router = useRouter()

    const [confirmPassword, setConfirmPassword] = useState('')

    const [userForm, setUserForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!userForm.firstName || !userForm.email || !userForm.password || !userForm.lastName) {
            return setErrorMessage('Lütfen tüm alanları doldurunuz.')
        }
        if (userForm.password !== confirmPassword) {
            return setErrorMessage('Şifreler eşleşmiyor.')
        }
        try {
            const response = await axios.post('/api/auth/register', userForm)
            console.log("response", response)
        } catch (e: any) {
            console.log("e", e)
            setErrorMessage(e.response.data.message)
        }

        try {
            const res = await signIn('credentials', {
                email: userForm.email,
                password: userForm.password,
                callbackUrl: `${window.location.origin}/`,
                redirect: false
            })
            router.push('/')
            console.log("res", res)
        } catch (e: any) {
            console.log(e)
        }

    }

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Hesap Oluştur
                            </h1>
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">İsim</label>
                                    <input onChange={(e) => setUserForm({ ...userForm, firstName: e.target.value })} value={userForm.firstName} type="name" name="firstName" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Soyisim</label>
                                    <input onChange={(e) => setUserForm({ ...userForm, lastName: e.target.value })} value={userForm.lastName} type="name" name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input onChange={(e) => setUserForm({ ...userForm, email: e.target.value })} value={userForm.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mail@example.com" />
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Şifre</label>
                                    <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Şifreni Doğrula</label>
                                    <input onChange={(e) => setUserForm({ ...userForm, password: e.target.value })} value={userForm.password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>

                                {errorMessage !== "" && <div className='border rounded bg-yellow-600 text-white w-full text-xs p-1 text-center' >
                                    {errorMessage}
                                </div>}
                                <button type='submit' className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> Kayıt Ol</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Hesabın var mı ? <Link href="/auth/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Giriş Yap</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register