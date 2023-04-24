import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './components/Board'

import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import { Button, Box } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'

// const { Button } = chakraTheme.components

// const theme = extendBaseTheme({
//   components: {
//     Button,
//   },
// })

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraBaseProvider>
      <div>
      <Board />
      </div>
    </ChakraBaseProvider>
  )
}

export default App
