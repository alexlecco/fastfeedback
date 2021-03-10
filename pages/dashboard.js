import Head from 'next/head'
import { Button, Flex, Text, Code, Icon } from '@chakra-ui/react'
import { DiReact } from "react-icons/di"

import { useAuth } from '@/lib/auth'
import EmptyState from '@/components/EmptyState'

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) ('Loading...')

  return <EmptyState />
}

export default Dashboard;