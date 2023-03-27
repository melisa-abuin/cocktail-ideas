import { IngredientsList } from '..'
import { render, screen } from '@testing-library/react'
import { mockedCocktail } from '@/src/mocks/cocktails'
import { Cocktail } from '@/src/types/cocktails'

type Props = Cocktail & { type: 'Measure' | 'Ingredient' }

const defaultProps = {
  ...mockedCocktail,
  type: 'Measure',
} as Props

describe('IngredientsList', () => {
  it('renders the correct texts for measure when the type is Measure', () => {
    render(<IngredientsList {...defaultProps} />)

    expect(screen.queryByText('sugar')).not.toBeInTheDocument()
    expect(screen.queryByText('lime')).not.toBeInTheDocument()

    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('renders the correct texts for ingredients when the type is Ingredient', () => {
    render(<IngredientsList {...defaultProps} type="Ingredient" />)

    expect(screen.queryByText('2')).not.toBeInTheDocument()
    expect(screen.queryByText('1')).not.toBeInTheDocument()

    expect(screen.getByText('sugar')).toBeInTheDocument()
    expect(screen.getByText('lime')).toBeInTheDocument()
  })
})
