import styled from 'styled-components'

export const CoffeesSection = styled.section`
  margin: 2rem auto 5rem auto;
  width: 90%;
  max-width: 1440px;
`

export const Title = styled.strong`
  display: flex;
  margin-bottom: 2rem;
  font-family: 'Baloo 2';
  font-size: 1.75rem;
`

export const CoffeSeparator = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 16rem);
  grid-gap: 0rem 2rem;
`
