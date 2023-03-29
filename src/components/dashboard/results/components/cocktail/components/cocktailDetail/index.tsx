import { ErrorMessage } from '@/src/components/common/errorMessage'
import { Modal } from '@/src/components/common/modal'
import { useCocktailById } from '@/src/hooks/useCocktailById'
import { IngredientsList } from './components/ingredientsList'
import { Skeleton } from './components/skeleton'
import { Ingredients, PreparationDescription, SectionTitle } from './styles'

interface Props {
  closeModal: () => void
  idDrink: string
  isModalOpen: boolean
}

export const CocktailDetail = ({ closeModal, idDrink, isModalOpen }: Props) => {
  const { data, error, isFetching } = useCocktailById(idDrink)

  if (isFetching) {
    return (
      <Modal closeModal={closeModal} isOpen={isModalOpen} title="Loading">
        <Skeleton />
      </Modal>
    )
  }

  if (error) {
    return (
      <Modal closeModal={closeModal} isOpen={isModalOpen} title="Error">
        <ErrorMessage />
      </Modal>
    )
  }

  if (!data) {
    return null
  }

  return (
    <Modal closeModal={closeModal} isOpen={isModalOpen} title={data.strDrink}>
      <>
        <SectionTitle>Ingredients</SectionTitle>

        <Ingredients>
          <IngredientsList type="Measure" {...data} />
          <IngredientsList type="Ingredient" {...data} />
        </Ingredients>
        <SectionTitle>Preparation</SectionTitle>

        <PreparationDescription>{data.strInstructions}</PreparationDescription>
      </>
    </Modal>
  )
}
