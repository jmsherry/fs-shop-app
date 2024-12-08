import React from 'react'
import {
  Typography,
  Container,
  Box,
} from '@/components/mui'
import Header from '@/components/header'

function layout({children}) {
  return (
    <Box>
      <Header />
      <Container>{children}</Container>
    </Box>
  )
}

export default layout