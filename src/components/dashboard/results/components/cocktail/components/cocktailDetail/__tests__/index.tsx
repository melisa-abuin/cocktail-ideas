import { CocktailDetail } from '..'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useCocktailById } from '@/src/hooks/useCocktailById'
import { mockedCocktail } from '@/src/mocks/cocktails'
import { ComponentProps } from 'react'

jest.mock('@/src/hooks/useCocktailById')

afterEach(() => {
  jest.resetAllMocks()
})

const defautlProps = {
  closeModal: jest.fn(),
  idDrink: '1',
  isModalOpen: true,
}

const queryClient = new QueryClient()

const mountRender = ({
  closeModal,
  idDrink,
  isModalOpen,
}: ComponentProps<typeof CocktailDetail> = defautlProps) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <CocktailDetail
        closeModal={closeModal}
        idDrink={idDrink}
        isModalOpen={isModalOpen}
      />
    </QueryClientProvider>
  )
}

describe('CocktailDetail', () => {
  it('renders a loader if the query is loading', () => {
    jest.mocked(useCocktailById as jest.Mock<any>).mockReturnValueOnce({
      data: null,
      isFetching: true,
      error: null,
    })

    mountRender()

    expect(screen.getByAltText('skeleton-loader')).toBeInTheDocument()
  })

  it('renders an error message if the query failed', () => {
    jest.mocked(useCocktailById as jest.Mock<any>).mockReturnValueOnce({
      data: null,
      isFetching: false,
      error: () => {},
    })

    mountRender()

    expect(
      screen.getByText('Ups, something went wrong! Try again please.')
    ).toBeInTheDocument()
  })

  it('renders the cocktail details when the api call is successful', () => {
    jest.mocked(useCocktailById as jest.Mock<any>).mockReturnValueOnce({
      data: mockedCocktail,
      isFetching: false,
      error: null,
    })

    mountRender()

    expect(screen.getByText(mockedCocktail.strDrink)).toBeInTheDocument()
  })
})
