import styled from 'styled-components'

export const ClientPaymentInformationSection = styled.section`
  svg {
    color: ${(props) => props.theme.purple};
  }
  padding: 2.5rem;
  margin-top: 0.75rem;

  display: block;

  border-radius: 10px;

  width: 100%;
  height: 12.9375rem;

  background: ${(props) => props.theme.card};
`

export const AddressHeader = styled.header`
  display: flex;
  gap: 0.75rem;

  div {
    h2 {
      color: ${(props) => props.theme.subtitle};
      font-size: 1rem;
      font-weight: normal;
    }

    p {
      color: ${(props) => props.theme.text};
      font-size: 0.875rem;
      font-weight: normal;
    }
  }
`

export const PaymentMethodInputs = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 11.125rem 11.125rem 11.125rem;
  grid-template-rows: 3.1875rem;

  grid-gap: 0.75rem;
`

export const RadioBase = styled.input`
  display: none;

  transition: background 0.3s;

  &:checked + label {
    border: 1px solid ${(props) => props.theme['purple-dark']};
    outline: 1px solid ${(props) => props.theme['purple-dark']};
  }
`

export const Label = styled.label`
  padding: 1rem;

  display: flex;
  gap: 0.75rem;
  align-items: center;

  border: 1px solid ${(props) => props.theme.button};
  background: ${(props) => props.theme.button};
  border-radius: 5px;

  color: ${(props) => props.theme.text};
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 0.75rem;

  outline-color: transparent;

  transition: all 0.3s;

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
    outline: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.hover};
  }
`

export const Credit = styled(RadioBase)``

export const Debit = styled(RadioBase)``

export const Cash = styled(RadioBase)``
