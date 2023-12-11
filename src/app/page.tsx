import MainPage from '@/pages/Main'
import { Layout } from '@/widgets/Layout'
import { Footer } from '@/widgets/Layout/Footer'
import { Header } from '@/widgets/Layout/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Layout>
        <MainPage />
      </Layout>
    </div>
  )
}
