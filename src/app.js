import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Theme from './styles/theme'
import Router from './router'
import MoviesProvider from './context/movies/movies-provider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

const App = () => (
  <Theme>
    <QueryClientProvider client={queryClient}>
      <MoviesProvider>
        <Router />
      </MoviesProvider>
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  </Theme>
)

export default App
