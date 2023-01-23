import { DivForStyle, Dots, MainContainer } from './styles'
import Delivery from '../../assets/asideImages/Illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export function Sucess() {
  const { newClientOrder } = useContext(OrderContext)
  return (
    <MainContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>
      <DivForStyle>
        <section>
          <Dots Color="purple">
            <MapPin size={16} weight="fill" />
            <div>
              <p>
                Entrega em{' '}
                <span>
                  {newClientOrder!.clientAddress.street},{' '}
                  {newClientOrder!.clientAddress.num}
                </span>
              </p>
            </div>
          </Dots>
          <Dots Color="yellow">
            <Timer size={16} weight="fill" />
            <div>
              <p>Previsão de entrega</p>
              <span>20min - 30min</span>
            </div>
          </Dots>
          <Dots Color="yellow-dark">
            <CurrencyDollar size={16} weight="fill" />
            <div>
              <p>Pagamento na entrega</p>
              <span>{newClientOrder?.payment}</span>
            </div>
          </Dots>
        </section>
        <img src={Delivery} alt="" />
      </DivForStyle>
    </MainContainer>
  )
}
