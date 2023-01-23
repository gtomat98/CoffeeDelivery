import styled from 'styled-components'

import Background from '../../assets/background/Background.svg'

export const MainContainer = styled.main``

export const Intro = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 5rem 0;

  background: ${(props) => props.theme.white};
  background-image: url(${Background});
  background-size: cover;
`

export const IntroDivForBackground = styled.div`
  width: 80%;
  max-width: 1440px;

  display: flex;
  justify-content: space-between;
  gap: 2rem;

  img {
    width: 50%;
  }

  @media only screen and (max-width: 1000px) {
    img {
      display: none;
    }
  }
`
export const IntroText = styled.aside`
  display: block;

  strong {
    word-wrap: normal;
    color: ${(props) => props.theme.title};
    line-height: 130%;
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: 800;
  }

  h3 {
    margin-top: 1rem;
    color: ${(props) => props.theme.subtitle};
    line-height: 130%;
    font-size: 1.25rem;
    font-weight: normal;
  }
`

export const DOT_COLORS = {
  purple: 'purple',
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
  gray: 'text',
} as const

export interface DotColor {
  Color: keyof typeof DOT_COLORS
}

export const Dot = styled.div<DotColor>`
  width: 40%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;

  svg {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;

    background-color: ${(props) => props.theme[DOT_COLORS[props.Color]]};
    color: ${(props) => props.theme.white};
    border-radius: 999px;
  }

  p {
    color: ${(props) => props.theme.text};
    font-size: 1rem;
    width: calc(100% - 2rem);
  }
`
export const Dots = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 4rem;

  @media only screen and (max-width: calc(900px - 2rem)) {
    display: block;

    div {
      width: 100%;
    }
  }
`
