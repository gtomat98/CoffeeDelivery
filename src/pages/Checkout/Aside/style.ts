import styled from 'styled-components'

export const AsideInformation = styled.aside`
  width: 28rem;
  display: block;

  h1 {
    font-size: 1.125rem;
    font-family: 'Baloo 2';
    display: flex;
  }
`

export const CoffeesInformation = styled.section`
  margin-top: 2rem;
  width: 100%;

  border-radius: 10px 50px;

  padding: 2.5rem;

  background: ${(props) => props.theme.card};
`

export const CoffeeList = styled.ul`
  display: block;
`

export const PaymentAmountsFooter = styled.footer`
  width: 100%;
  display: block;

  button {
    margin-top: 1.5rem;

    width: 100%;
    height: 2.875rem;

    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};

    font-weight: bold;
    font-size: 0.75rem;

    &:hover {
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const TotalItems = styled.div`
  width: 100%;
  display: block;
  gap: 10rem;

  p {
    display: flex;
    justify-content: space-between;

    margin-bottom: 0.75rem;

    color: ${(props) => props.theme.text};
    line-height: 200%;
    font-size: 0.75rem;

    & :last-child {
      color: ${(props) => props.theme.subtitle};
      font-size: 1rem;
    }
  }

  & :last-child {
    span {
      color: ${(props) => props.theme.subtitle};
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
`
