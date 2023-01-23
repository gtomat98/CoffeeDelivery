import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { Coffee, OrderContext } from '../../../../../contexts/OrderContext'
import {
  AddToCart,
  CoffeeTypeSpan,
  Counter,
  Desc,
  Divider,
  DividerTags,
  FooterPrice,
  Price,
  ProductCoffee,
} from './style'

import * as zod from 'zod'
import { useContext, useState } from 'react'

const isAmountValid = zod.number().positive().min(1).max(10)

export function CoffeeConstructor(coffee: Coffee) {
  const { newItem, changeAmount, items } = useContext(OrderContext)
  const [counter, setCounter] = useState(0)

  function handleAmountChange(num: number) {
    if (num + counter >= 0 && num + counter < 10) {
      setCounter(counter + num)
    }
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        const teste = items?.find((item) => item.coffee.name === coffee.name)
        if (teste) {
          changeAmount(teste, counter)
        } else {
          newItem({ amount: counter, coffee })
        }

        setCounter(0)
      }}
    >
      <ProductCoffee>
        <Divider>
          <img src={coffee.src} alt=""></img>
        </Divider>
        <DividerTags>
          {Object.values(coffee.tag).map((element) => {
            return <CoffeeTypeSpan key={element}> {element} </CoffeeTypeSpan>
          })}
        </DividerTags>
        <Divider>
          <strong>{coffee.name}</strong>
        </Divider>
        <Divider>
          <Desc>{coffee.description}</Desc>
        </Divider>

        <FooterPrice>
          <Price>
            <p>R$</p>
            <span>{coffee.price}</span>
          </Price>

          <Counter>
            <button
              type="button"
              onClick={() => {
                handleAmountChange(-1)
              }}
            >
              <Minus size={16} />
            </button>

            <span>{counter}</span>
            <button
              type="button"
              onClick={() => {
                handleAmountChange(1)
              }}
            >
              <Plus size={16} />
            </button>
          </Counter>

          <AddToCart disabled={!isAmountValid.safeParse(counter).success}>
            <ShoppingCartSimple size={22} weight="fill" />
          </AddToCart>
        </FooterPrice>
      </ProductCoffee>
    </form>
  )
}
