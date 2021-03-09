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

const DashboardShell = ({ children }) => (
  <Flex flexDirection="column">
    <Flex
      backgroundColor="white"
      alignItems="center"
      justifyContent="space-between"
      p={4}
    >
      <Stack direction="row" isInLine spacing={4}>
        <Icon as={DiReact} />
        <Link>Feedback</Link>
        <Link>Sites</Link>
      </Stack>
      <Flex alignItems="center">
        <Link mr={4}>Account</Link>
        <Avatar size="sm"></Avatar>
      </Flex>
    </Flex>
    <Flex backgroundColor="gray.100" p={8}>
      <Flex
        maxWidth="800px"
        justifyContent="center"
        alignItems="center"
        ml="auto"
        mr="auto"
      >
        <Breadcrumb>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="black">Sites</BreadcrumbLink>
          </BreadcrumbItem>
          <Heading color="black">Sites</Heading>
          {children}
        </Breadcrumb>
      </Flex>
    </Flex>
  </Flex>
)

export default DashboardShell