import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 1440px;
  width: 80%;
  height: 6.5rem;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Navigation = styled.nav`
  display: flex;
  gap: 0.75rem;
`

const NAV_COLORS = {
  purple: {
    primary: 'purple',
    secondary: 'purple-light',
  },
  yellow: {
    primary: 'yellow-dark',
    secondary: 'yellow-light',
  },
} as const

interface AProps {
  color: keyof typeof NAV_COLORS
}

export const NavItem = styled.div<AProps>`
  a {
    align-items: center;
    display: flex;
    padding: 0.5rem;
    border-radius: 10px;

    gap: 0.25rem;

    color: ${(props) => props.theme[NAV_COLORS[props.color].primary]};

    background-color: ${(props) =>
      props.theme[NAV_COLORS[props.color].secondary]};

    transition: all 0.3s;

    div {
      background-color: ${(props) =>
        props.theme[NAV_COLORS[props.color].primary]};

      color: ${(props) => props.theme.white};
    }

    &:hover {
      transform: scale(1);
      color: ${(props) => props.theme[NAV_COLORS[props.color].secondary]};

      background-color: ${(props) =>
        props.theme[NAV_COLORS[props.color].primary]};

      div {
        background-color: ${(props) =>
          props.theme[NAV_COLORS[props.color].secondary]};
        p {
          color: ${(props) => props.theme[NAV_COLORS[props.color].primary]};
        }
      }
    }

    &.active {
      color: ${(props) => props.theme[NAV_COLORS[props.color].secondary]};

      background-color: ${(props) =>
        props.theme[NAV_COLORS[props.color].primary]};

      div {
        background-color: ${(props) => props.theme['yellow-light']};
        p {
          color: ${(props) => props.theme['yellow-dark']};
        }
      }
    }
  }
`

export const Items = styled.div`
  width: 1.25rem;
  height: 1.25rem;

  margin-bottom: 31.6px;
  margin-left: 15.8px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  border-radius: 9999px;

  transition: all 0.3s;

  p {
    transition: all 0.3s;
    text-align: center;
    font-weight: bold;
    font-size: 0.75rem;
  }
`
