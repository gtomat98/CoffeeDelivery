import styled from 'styled-components'

export const ProductCoffee = styled.div`
  background: ${(props) => props.theme.card};

  border-radius: 10px 40px;

  width: 100%;
  height: 19.375rem;

  margin-bottom: 2.5rem;

  img {
    width: 7.5rem;
    margin-top: -1.5rem;
    margin-bottom: 0.75rem;
    animation: gira 30s linear infinite;
    @keyframes gira {
      0% {
        opacity: 1;
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }

  strong {
    font-family: 'Baloo 2';
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
`

export const Desc = styled.span`
  color: ${(props) => props.theme.label};
  text-align: center;
  font-size: 0.875rem;
  margin-bottom: 2.0625rem;
`

export const Divider = styled.div`
  margin: auto;
  width: 85%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`

export const DividerTags = styled.div`
  margin: auto;
  width: 95%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`

export const CoffeeTypeSpan = styled.span`
  text-align: center;
  font-size: 0.7rem;
  font-weight: bold;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  margin-bottom: 1rem;
`

export const FooterPrice = styled.footer`
  width: 85%;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AddToCart = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  border: none;
  border-radius: 8px;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s;

  &:hover {
    background: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
  }

  &:disabled {
    &:hover {
      background: ${(props) => props.theme['purple-dark']};
      cursor: not-allowed;
    }
    opacity: 0.5;
  }
`

export const Price = styled.div`
  width: 4.1875rem;

  color: ${(props) => props.theme.text};
  font-size: 1rem;

  align-items: center;
  display: flex;
  gap: 0.25em;

  span {
    color: ${(props) => props.theme.text};
    font-family: 'Baloo 2';
    font-size: 1.5rem;
  }

  p {
    font-family: 'Baloo 2';
  }
`

export const Counter = styled.div`
  background: ${(props) => props.theme.button};
  border-radius: 8px;

  width: 4.5rem;
  height: 2.375rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.4rem;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;
    color: ${(props) => props.theme.purple};

    transition: all 0.3s;

    &:hover {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
