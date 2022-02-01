import { toBeInTheDocument } from '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HomePage from '../pages'

describe('Home (index) page', () => {
  it('should render', () => {
    render(<HomePage />)
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })
})
