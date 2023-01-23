import {
  Dot,
  Dots,
  Intro,
  IntroDivForBackground,
  IntroText,
  MainContainer,
} from './style'

import BigCoffee from '../../assets/asideImages/Imagem.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Coffees } from './components/Coffees'

export function Home() {
  return (
    <MainContainer>
      <Intro>
        <IntroDivForBackground>
          <IntroText>
            <strong>Encontre o café perfeito para qualquer hora do dia</strong>
            <h3>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h3>

            <Dots>
              <Dot Color="yellow-dark">
                <ShoppingCart size={16} weight="fill" />
                <p>Compra simples e segura</p>
              </Dot>
              <Dot Color="yellow">
                <Timer size={16} weight="fill" />
                <p>Entrega rápida e rastreada</p>
              </Dot>
              <Dot Color="gray">
                <Package size={16} weight="fill" />
                <p>Embalagem mantém o café intacto</p>
              </Dot>
              <Dot Color="purple">
                <Coffee size={16} weight="fill" />
                <p>O café chega fresquinho até você</p>
              </Dot>
            </Dots>
          </IntroText>
          <img src={BigCoffee} alt=""></img>
        </IntroDivForBackground>
      </Intro>
      <Coffees></Coffees>
    </MainContainer>
  )
}
