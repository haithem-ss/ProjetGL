import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider,extendTheme  } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      100: "#FEC144", //Yellow
      200: "#DEE2E6",  //Gris claire
      300:"#495057" ,// Gris foncé
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider  theme={theme}>
      <App />
    </ChakraProvider>
)
