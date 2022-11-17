import type { NextPage } from 'next'
import Head from 'next/head'
import { getSession, GetSessionParams } from 'next-auth/react'

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard page</title>
      </Head>

      <h1>Welcome to Dashboard page</h1>
    </>
  )
}

export default Dashboard

export const getServerSideProps = async (
  context: GetSessionParams | undefined,
) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/',
      },
    }
  }

  return {
    props: { session },
  }
}
