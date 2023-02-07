import { Description, Title } from "./styles"
import Image from "next/image"
import { Column } from "../../section/column"

export const Header = () => {
  return (
    <Column width={470}>
      <Title>Cocktails</Title>
      <Image alt="banner" height={126} src="/cocktails-banner.jpg" width={457} />
      <Description>Do you have drinks at home but don't know what to prepare? Tell us which ones and we will find the cocktail for you</Description>
    </Column>
  )
}