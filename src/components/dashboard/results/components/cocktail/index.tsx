import { Image } from './components/image'
import { Cocktail as CocktailType } from '@/src/types/cocktails'
import { Modal } from '@/src/components/common/modal'
import { useState } from 'react'

export const Cocktail = ({
  idDrink,
  strDrink,
  strDrinkThumb,
}: CocktailType) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)

  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <>
      <Image
        onClick={handleOpenModal}
        strDrink={strDrink}
        strDrinkThumb={strDrinkThumb}
      />

      <Modal isOpen={isModalOpen} closeModal={handleCloseModal} />
    </>
  )
}
