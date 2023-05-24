import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { Form } from "./components/Form";

const client = new QueryClient()

function App() {

  return (

    <QueryClientProvider client={client}>
      <Form />
    </QueryClientProvider>

  )
}

export default App
