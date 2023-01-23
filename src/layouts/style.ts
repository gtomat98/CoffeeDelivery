import styled, { keyframes } from 'styled-components'

const animationBooker = {
  loading: keyframes`
    0%{
        box-shadow: -15px -15px 30px 0 #fff, 15px 15px 30px 0 #1d0dca17,
        0px 0px 1px 5px #1d0dca17;
    }

    25% {
        box-shadow: none;
    }

    50% {
        box-shadow: -15px -15px 30px 0 #fff, 15px 15px 30px 0 #DBAC2C,
        0px 0px 1px 5px #DBAC2C;
    }

    75%{
        box-shadow: none;

    }

    100% {
        box-shadow: -15px -15px 30px 0 #fff, 15px 15px 30px 0 #1d0dca17,
        0px 0px 1px 5px #1d0dca17;  
    }    
`,

  notLoading: keyframes`
    0% {
       

    }
    100%{  
    }
  `,
} as const

const entraceOrExitanimationBooker = {
  entrance: keyframes`
    0% {
        transform: translateY(60px);
    }

    100% {
        transform: translateY(-20px);
    }
    `,

  exit: keyframes`
      0% {
        box-shadow: -15px -15px 30px 0 #fff, 15px 15px 30px 0 #1d0dca17,
        0px 0px 1px 5px #1d0dca17;  
        width: 2.5rem;
        height: 2.5rem;
        transform: translateY(-20px);
  
      }
      100%{  
        box-shadow: -15px -15px 30px 0 #fff, 15px 15px 30px 0 #1d0dca17,
        0px 0px 1px 5px #1d0dca17;  
        width: 2.5rem;
        height: 2.5rem;
        transform: translateY(60px);
      }
    `,
} as const

export const PopUpGroup = styled.div<{
  number: number | undefined
  animation: keyof typeof animationBooker
  entracecOrExit: keyof typeof entraceOrExitanimationBooker
}>`
  max-width: 2.5rem;
  width: calc((4rem * ${(props) => props.number}) + 2.5rem);
  max-height: 2.5rem;
  height: 2.5rem;

  position: fixed;
  bottom: 0px;
  right: 20px;
  z-index: 1000;

  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem;

  background: #f5f5fa;
  border-radius: 10px;
  box-shadow: -15px -15px 30px 0 #fff, 15px 15px 30px 0 #1d0dca17,
    0px 0px 1px 5px #1d0dca17;

  cursor: pointer;

  animation: ${(props) => animationBooker[props.animation]} 1s 1
      cubic-bezier(0.86, 0, 0.07, 1),
    ${(props) => entraceOrExitanimationBooker[props.entracecOrExit]} 1s 1
      cubic-bezier(0.77, 0, 0.18, 1) forwards;

  transition: max-width 0.5s, width 0.5s, max-height 0.5s, height 0.5s,
    box-shadow 1s;

  > div {
    position: absolute;
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 1s;
    visibility: hidden;
  }

  &:hover {
    animation: ${(props) => entraceOrExitanimationBooker[props.entracecOrExit]}
      1s 1 cubic-bezier(0.77, 0, 0.18, 1) forwards;
    transition: max-width 1s, max-height 0.5s, box-shadow 1s;
    max-width: calc((4rem * ${(props) => props.number}) + 2.5rem + 30rem);
    width: fit-content;
    max-height: 5.5rem;
    height: 5.5rem;
    box-shadow: none;
    padding: 1rem;

    > div {
      position: relative;
      display: flex;
      gap: 1rem;
      transition: visibility 0s, opacity 1s;
      visibility: visible;
      opacity: 1;
    }
  }
`

export const PopUp = styled.div`
  font-weight: bold;
  width: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem;

  background: #f5f5fa;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  font-size: 12px;

  transition-delay: 0s;

  transition: width 0.2s, box-shadow 1s, margin 1s;

  img {
    display: flex;
    width: 2.5rem;

    transform: rotate(0);

    transition: transform 1s;
  }

  div,
  button {
    visibility: hidden;
    opacity: 0;
    transition: none;
  }

  &:hover {
    transition: 0.2s;
    transition-delay: 0.5s;

    img {
      transition: 0.5s;
      transition-delay: 0.5s;
      transform: rotate(360deg);
    }

    div,
    button {
      transition: visibility 5s, opacity 2s;
      transition-delay: 0.5s;
      visibility: visible;
      opacity: 1;
    }

    margin-right: 0.5rem;
    width: 10rem;
    cursor: pointer;
    background: #f8f8ff;
    box-shadow: -15px -15px 30px 0 #fff, 15px 15px 30px 0 #1d0dca17,
      10px 0px 0px 0 #1d0dca17;
  }
`

export const Counter = styled.div`
  font-size: 1rem;

  color: ${(props) => props.theme.text};
  display: flex;
  height: 2.375rem;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0 0.4rem;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;
    svg {
      transition: 0.5s;
      color: ${(props) => props.theme.purple};
    }

    &:hover {
      svg {
        background-color: ${(props) => props.theme.hover};
        border-radius: 1000px;
        transform: scale(1.2);
        transition: 0.5s;
        color: ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`

export const ActionButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TrashButton = styled.button`
  background: none;

  &:hover {
    background: none;
    svg {
      transition: 0.5s;
      transform: scale(1.1);
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
  svg {
    transform: scale(1);
    transition: 0.5s;
    color: ${(props) => props.theme.purple};
  }
`
