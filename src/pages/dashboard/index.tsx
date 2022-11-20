import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard page</title>
      </Head>

      <h1>Welcome to Dashboard page</h1>

      <Link href="/dashboard/test">to Test</Link>
    </>
  )
}

export default Dashboard
