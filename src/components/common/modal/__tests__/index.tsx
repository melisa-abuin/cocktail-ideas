import { Modal } from '..'
import { render, screen } from '@testing-library/react'
import { ComponentProps } from 'react'

const defaultProps = {
  children: null,
  closeModal: jest.fn(),
  isOpen: true,
  title: 'title',
}

const mount = ({
  children,
  closeModal,
  isOpen,
  title,
}: ComponentProps<typeof Modal> = defaultProps) => {
  return render(
    <Modal closeModal={closeModal} isOpen={isOpen} title={title}>
      {children}
    </Modal>
  )
}

describe('Modal', () => {
  it('renders the children correctly', () => {
    mount({ ...defaultProps, children: 'children' })

    expect(screen.getByText('children')).toBeInTheDocument()
  })

  it('renders null if the modal is closed', () => {
    const { container } = mount({ ...defaultProps, isOpen: false })

    expect(container.firstChild).toBeNull()
  })
})
