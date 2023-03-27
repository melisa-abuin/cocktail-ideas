import { Image } from './components/image'
import { Cocktail as CocktailType } from '@/src/types/cocktails'
import { useState } from 'react'
import { CocktailDetail } from './components/cocktailDetail'

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

      {isModalOpen && (
        <CocktailDetail
          idDrink={idDrink}
          isModalOpen={isModalOpen}
          closeModal={handleCloseModal}
        />
      )}
    </>
  )
}
