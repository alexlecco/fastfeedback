import Head from 'next/head'
import { Button, Flex, Text, Code, Icon } from '@chakra-ui/react'
import { DiReact } from "react-icons/di"

import { useAuth } from '@/lib/auth'
import EmptyState from '@/components/EmptyState'

const Home = () => {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Fast Feedback</title>
      </Head>

      <Icon as={DiReact} h={12} w={12} />

      {
        auth.user ? (
          <EmptyState />
          //<Button onClick={e => auth.signout()}>Sign out</Button>
        ) : (
            <Button mt={4} size="sm" onClick={e => auth.signinWithGithub()}>Sign in</Button>
          )
      }

    </Flex>
  )
}

export default Home;