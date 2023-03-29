import { render, screen } from '@testing-library/react'
import { Skeleton } from '..'

describe('Skeleton', () => {
  it('renders the correct image', () => {
    render(<Skeleton />)

    expect(screen.getByAltText('skeleton-loader')).toBeInTheDocument()
  })
})
