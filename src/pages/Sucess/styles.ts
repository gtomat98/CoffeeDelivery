import styled from 'styled-components'

import { DOT_COLORS, DotColor } from '../Home/style'

export const MainContainer = styled.main`
  padding-top: 5rem;
  width: 80%;
  max-width: 1120px;

  display: block;
  margin: auto;

  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: bolder;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }

  h2 {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme.subtitle};
  }
`

export const DivForStyle = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: column;
    align-content: space-between;

    width: 32.875rem;
    min-height: 16.875rem;

    padding: 2.5rem;

    border: double 2px transparent;
    border-radius: 10px 50px;
    background-image: linear-gradient(white, white),
      radial-gradient(
        circle at top left,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme.purple}
      );
    background-origin: border-box;
    background-clip: padding-box, border-box;
  }

  img {
    width: 40%;
  }
`

export const Dots = styled.div<DotColor>`
  display: flex;
  align-items: center;
  gap: 1rem;

  flex-wrap: wrap;

  flex: 1;

  svg {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;

    background-color: ${(props) => props.theme[DOT_COLORS[props.Color]]};
    color: ${(props) => props.theme.white};
    border-radius: 999px;
  }

  line-height: 130%;
  font-size: 1rem;
  color: ${(props) => props.theme.text};

  p {
    word-wrap: break-word;
  }

  span {
    font-weight: bold;
  }
`
