import { CoffeSeparator, CoffeesSection, Title } from './style'
import { CoffeeConstructor } from './CoffeeConstructor'
import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'

export function Coffees() {
  const { coffeesInfo } = useContext(OrderContext)

  return (
    <CoffeesSection>
      <header>
        <Title>Nossos Cafés</Title>
      </header>
      <CoffeSeparator>
        {coffeesInfo.map((coffee) => {
          return <CoffeeConstructor key={coffee.name} {...coffee} />
        })}
      </CoffeSeparator>
    </CoffeesSection>
  )
}
