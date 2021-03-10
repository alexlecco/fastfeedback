import React from 'react'
import {
  Flex,
  Icon,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading
} from '@chakra-ui/react'
import { DiReact } from 'react-icons/di'

import { useAuth } from '@/lib/auth'

const DashboardShell = ({ children }) => {
  const auth = useAuth()
  const photoUrl = auth.user ? auth.user.photoURL : null

  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="white"
        alignItems="center"
        justifyContent="space-between"
        py={4}
        px={8}
      >
        <Stack direction="row" isInLine spacing={4} align="center">
          <Icon as={DiReact} />
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Flex alignItems="center">
          <Link mr={4}>Account</Link>
          <Avatar size="sm" src={photoUrl}></Avatar>
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" p={8} height="100vh">
        <Flex
          maxWidth="800px"
          w="100%"
          ml="auto"
          mr="auto"
          direction="column"
        >
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="gray.700" fontSize="sm">Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading color="black" mb={4}>Sites</Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DashboardShell