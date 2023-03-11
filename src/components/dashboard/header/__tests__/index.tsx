import { Header } from '..'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'

jest.mock('@/src/hooks/useRedirectToDashboard')
jest.mock('../hooks/useRedirectToHome')

const queryClient = new QueryClient()

const mountRender = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <Header />
    </QueryClientProvider>
  )
}

describe('Header', () => {
  it('renders the title correctly', () => {
    mountRender()

    expect(screen.getByText('Cocktails')).toBeInTheDocument()
  })
})
