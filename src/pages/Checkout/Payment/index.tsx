import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  AddressHeader,
  Cash,
  ClientPaymentInformationSection,
  Credit,
  Debit,
  Label,
  PaymentMethodInputs,
} from './style'

interface Props {
  setPayment: (payment: 'CreditCard' | 'DebitCard' | 'Cash') => void
}

export function Payment(setPayment: Props) {
  return (
    <ClientPaymentInformationSection>
      <AddressHeader>
        <CurrencyDollar size={22} />
        <div>
          <h2>Pagamento</h2>
          <p>Informe o endereço onde deseja receber o seu pedido</p>
        </div>
      </AddressHeader>
      <PaymentMethodInputs>
        <Credit
          type="radio"
          name="payment"
          id="credit"
          onChange={() => {
            setPayment.setPayment('CreditCard')
          }}
        />
        <Label htmlFor="credit">
          <CreditCard size={16} />
          CARTÃO DE CRÉDITO
        </Label>

        <Debit
          type="radio"
          name="payment"
          id="debit"
          onChange={() => {
            setPayment.setPayment('DebitCard')
          }}
        />
        <Label htmlFor="debit">
          <Bank size={16} />
          CARTÃO DE DÉBITO
        </Label>

        <Cash
          type="radio"
          name="payment"
          id="cash"
          onChange={() => {
            setPayment.setPayment('Cash')
          }}
        />
        <Label htmlFor="cash">
          <Money size={16} />
          DINHEIRO
        </Label>
      </PaymentMethodInputs>
    </ClientPaymentInformationSection>
  )
}
