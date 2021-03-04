import Head from 'next/head'
import { Button, Heading, Text, Code, Icon } from '@chakra-ui/react'
import { DiReact } from "react-icons/di"

import { useAuth } from '@/lib/auth'

const Home = () => {
  const auth = useAuth();

  return (
    <div className="container">
      <Head>
        <title>Fast Feedback</title>
      </Head>

      <main>
        <Heading>Fast Feedback</Heading>
        <Icon as={DiReact} h={8} w={8} />
        <Text>
          Current user: <Code>{auth.user ? auth.user.email : null}</Code>
        </Text>

        {auth.user ? (
          <Button onClick={e => auth.signout()}>Sign out</Button>
        ) : (
            <Button onClick={e => auth.signinWithGithub()}>Sign in</Button>
          )}
      </main>
    </div>
  )
}

export default Home;