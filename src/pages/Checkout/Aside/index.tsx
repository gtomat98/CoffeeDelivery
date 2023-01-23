import {
  AsideInformation,
  CoffeeList,
  CoffeesInformation,
  PaymentAmountsFooter,
  TotalItems,
} from './style'
import { CoffeeItem } from './CoffeeItem'
import { useContext } from 'react'
import { Item, OrderContext } from '../../../contexts/OrderContext'

export function Aside() {
  const { items } = useContext(OrderContext)
  const totalValueOfCoffes = items?.reduce(getTotal, 0)

  function getTotal(total: number, item: Item) {
    return total + item.coffee.price * item.amount
  }

  const deliveryFee = 3.5

  const totalPurchaseAmount = (totalValueOfCoffes! + deliveryFee).toFixed(2)

  return (
    <AsideInformation>
      <h1>Cafés selecionados</h1>
      <CoffeesInformation>
        <CoffeeList>
          {items?.map((item) => {
            return <CoffeeItem key={item.coffee.name} {...item} />
          })}
        </CoffeeList>
        <PaymentAmountsFooter>
          {items?.length !== 0 && (
            <TotalItems>
              <p>
                <span>Total de itens</span>
                <span>R$ {totalValueOfCoffes!.toFixed(2)}</span>
              </p>
              <p>
                <span>Entrega</span>
                <span>R$ {deliveryFee.toFixed(2)}</span>
              </p>
              <p>
                <span>Total</span>
                <span>R$ {totalPurchaseAmount}</span>
              </p>
            </TotalItems>
          )}
          <button type="submit">CONFIRMAR SEU PEDIDO</button>
        </PaymentAmountsFooter>
      </CoffeesInformation>
    </AsideInformation>
  )
}
