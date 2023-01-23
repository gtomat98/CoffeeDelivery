import styled from 'styled-components'

export const CoffeeIndividualData = styled.li`
margin-bottom: 1.5rem;
  padding: 0.5rem 0.25rem 2rem 0.25rem;

  display: flex;
  align-items: start;
  justify-content: space-between;

  img {
    width: 4rem;
  }

  strong {
    font-weight: normal;
    color: ${(props) => props.theme.subtitle};
    font-size: 1rem;
  }

  p {
    width: 100%
    text-align: right;
    color: ${(props) => props.theme.text};
    font-weight: bold;
  }

  border-bottom: 2px solid ${(props) => props.theme.button};
`

export const GroupForStyle = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const ActionButtons = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
`

export const CounterButtons = styled.div`
  background: ${(props) => props.theme.button};
  border-radius: 8px;

  width: 4.5rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
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

export const TrashButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  width: 5.6875rem;
  height: 2rem;

  font-size: 0.75rem;

  color: ${(props) => props.theme.text};

  svg {
    color: ${(props) => props.theme.purple};
  }
`
