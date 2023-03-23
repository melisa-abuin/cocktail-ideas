import { CloseIcon } from '@/src/assets/svg/closeIcon'
import { useCocktailById } from '@/src/hooks/useCocktailById'
import { IngredientsList } from './ingredientsList'
import {
  Body,
  Header,
  IconContainer,
  ModalContainer,
  PageBackground,
  PreparationDescription,
  SectionTitle,
  Title,
} from './styles'

type Props = {
  closeModal: () => void
  idDrink: string
  isOpen: boolean
}

export const Modal = ({ closeModal, idDrink, isOpen }: Props) => {
  const { data } = useCocktailById(idDrink)
  console.log(data)
  if (!isOpen || !data) {
    return null
  }

  return (
    <PageBackground>
      <ModalContainer>
        <Header>
          <Title>{data.strDrink}</Title>

          <IconContainer onClick={closeModal}>
            <CloseIcon />
          </IconContainer>
        </Header>

        <Body>
          <SectionTitle>Ingredients</SectionTitle>

          <IngredientsList {...data} />
          <SectionTitle>Preparation</SectionTitle>

          <PreparationDescription>
            {data.strInstructions}
          </PreparationDescription>
        </Body>
      </ModalContainer>
    </PageBackground>
  )
}
