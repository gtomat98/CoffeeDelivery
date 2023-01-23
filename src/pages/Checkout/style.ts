import styled from 'styled-components'

export const MainContainer = styled.main`
  form {
    max-width: 1440px;
    width: 80%;
    margin: 2.5rem auto;

    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    gap: 2rem;
  }
`

export const NoItemsSection = styled.section`
  margin: auto;
  max-width: 1440px;
  width: 80%;

  margin-top: 1.5rem;
  border-top: 2px solid #333333;
  border-radius: 10px;
  border-color: ${(props) => props.theme['purple-light']};
  display: block;
  color: ${(props) => props.theme['purple-dark']};
  text-align: center;
  line-height: 1.6;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
    margin-top: 2rem;

    &:hover {
      color: ${(props) => props.theme.yellow};
    }
  }

  p {
    color: ${(props) => props.theme['purple-dark']};
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`

export const InformationContainer = styled.section`
  width: 40rem;
  h1 {
    font-size: 1.125rem;
    font-family: 'Baloo 2';
  }
`

export const ClientInformationSection = styled.section`
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  margin-top: 2rem;

  padding: 2.5rem;

  display: block;

  border-radius: 10px;

  width: 100%;
  height: 23.25rem;

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

export const InformationInputs = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  grid-template-rows: 2.625rem 2.625rem 2.625rem 2.625rem;

  grid-gap: 1rem 0.75rem;
`

export const InputBase = styled.input`
  box-sizing: border-box;
  padding: 12px;
  background: ${(props) => props.theme.input};
  border-radius: 5px;

  color: ${(props) => props.theme.text};
  font-weight: normal;
  font-family: 'Roboto';
  font-size: 0.875rem;

  outline-color: transparent;

  transition: all 0.3s;

  &::placeholder {
    color: ${(props) => props.theme.label};
  }
  border: 1px solid ${(props) => props.theme.button};

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
    outline: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    cursor: not-allowed;
  }
`

const CEP_STATUS = {
  error: 'error',
  default: 'yellow-dark',
  sucess: 'sucess',
} as const

interface cepBorderColor {
  color: keyof typeof CEP_STATUS
  animation?: 'loading' | 'static'
}

export const CEP = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  padding: 12px;
`

export const CEPCONTAINER = styled.div<cepBorderColor>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  label {
    cursor: text;
    display: flex;
    align-items: center;
    svg {
      color: ${(props) => props.theme[CEP_STATUS[props.color]]};
      margin-right: 12px;
      animation: ${(props) => props.animation} 2s linear infinite;

      @keyframes loading {
        0% {
          transform: rotate(0);
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }

        100% {
          transform: rotate(360deg);
          opacity: 1;
        }
      }

      @keyframes static {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }

        100% {
          opacity: 1;
        }
      }
    }
  }

  grid-row-start: 1;
  grid-column-start: 1;
  box-sizing: border-box;
  background: ${(props) => props.theme.input};
  border-radius: 5px;

  color: ${(props) => props.theme.text};
  font-weight: normal;
  font-family: 'Roboto';
  font-size: 0.875rem;

  outline-color: transparent;

  transition: all 0.3s;

  &::placeholder {
    color: ${(props) => props.theme.label};
  }
  border: 1px solid ${(props) => props.theme.button};

  &:focus-within {
    border: 1px solid ${(props) => props.theme[CEP_STATUS[props.color]]};
    outline: 1px solid ${(props) => props.theme[CEP_STATUS[props.color]]};
  }
`

export const Rua = styled(InputBase)`
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 4;
`

export const Número = styled(InputBase)`
  grid-row-start: 3;
  grid-column-start: 1;
`

export const Complemento = styled(InputBase)`
  grid-row-start: 3;
  grid-column-start: 2;
  grid-column-end: 4;
`
export const ComplementoLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  grid-row-start: 3;
  grid-column-start: 2;
  grid-column-end: 4;

  color: ${(props) => props.theme.text};
  font-weight: normal;
  font-family: 'Roboto';
  font-size: 0.875rem;
`

export const Bairro = styled(InputBase)`
  grid-row-start: 4;
  grid-column-start: 1;
`
export const Cidade = styled(InputBase)`
  grid-row-start: 4;
  grid-column-start: 2;
`
export const UF = styled(InputBase)`
  grid-row-start: 4;
  grid-column-start: 3;
`
