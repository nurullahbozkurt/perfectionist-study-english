import { Inter } from 'next/font/google'
import React from 'react'

import { Layout } from '@/components/Layout';
import LetsStart from './LetsStart';


const inter = Inter({ subsets: ['latin'] })
type Props = {}

const Home = (props: Props) => {

    return (
        <Layout>
            <>
                <div className="min-h-full my-7 lg:my-20 bg-gradient-to-tr flex justify-center items-center ">
                    <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                        <LetsStart image='/grammar.jpg' href='/grammars/was-were?page=Gramer' width="3712" height="5568" title='Gramer Çalışması' subtitle='Gramer' miniTitle1='Gramer Notlarını Gör' miniTitle2='Tüm Gramerler İle Cümle Kur' />
                        <LetsStart image="/active-tense2.jpg" href='/active-tenses/was-were?page=Gramer' width="2465" height="3358" title="Active Tense Alıştırması" subtitle='Active Tense' miniTitle1='Olumlu, Olumsuz ve Soru Cümleleri' miniTitle2='Hızlı Cümle Kurma Pratiği' />
                        <LetsStart image='/daily.jpg' href='/daily-sentences?page=Günlük+İfadeler' width="3168" height="4762" title='Günlük İfadeler Çalışması' subtitle='Günlük İfadeler' miniTitle1='Günlük İfadeleri Öğren' miniTitle2='Günlük İfadeler ile Cümleler Kur' />
                        <LetsStart image='/community.jpg' href='/community?page=Topluluk' width="3997" height="2665" title='Toplulukta Bulun' subtitle='Topluluk' miniTitle1='Topluluğa Soru Sor' miniTitle2="Sorulan Sorulardan Birşeyler Öğren" />
                        <LetsStart image='/notes.jpg' href='/reviews?page=Notlar' width="3805" height="5073" title='Notlarım' subtitle='Notlar' miniTitle1='Öğrenirken Not Al' miniTitle2='Notlarını Eğitmene Sor' />
                        <LetsStart image='/recording.jpg' href='https://drive.google.com/drive/u/0/folders/1UEQ8dThWgE24mhbKhkoYAGgTABkHlY_V' width="1688" height="3000" title='Ders Kayıtları' subtitle='Kayıtlar' miniTitle1='Dersin Ses Kayıtları' miniTitle2='Dersin Notları' />
                    </div>
                </div>
            </>
        </Layout>
    )
}

export default Home