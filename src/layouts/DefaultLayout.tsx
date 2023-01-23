import { NavLink, Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

import { useContext } from 'react'
import { OrderContext } from '../contexts/OrderContext'
import { Counter, PopUp, PopUpGroup, TrashButton } from './style'
import { DotsSixVertical, Minus, Plus, Trash } from 'phosphor-react'

export function DefaultLayout() {
  const {
    items,
    changeAmount,
    removeItem,
    handleAnimationEnd,
    styleAddedToBag,
  } = useContext(OrderContext)
  const itemsLength = items?.length as number

  return (
    <div>
      <Header />
      <Outlet />
      <PopUpGroup
        number={itemsLength}
        animation={
          styleAddedToBag && itemsLength > 0 ? 'loading' : 'notLoading'
        }
        entracecOrExit={itemsLength > 0 ? 'entrance' : 'exit'}
        onAnimationEnd={() => {
          handleAnimationEnd()
        }}
      >
        <DotsSixVertical size={24} weight="light" />
        <div>
          {items?.map((item) => {
            return (
              <div key={item.coffee.name}>
                <PopUp>
                  <NavLink to="/checkout">
                    <img src={item.coffee.src} alt="" />
                  </NavLink>

                  <Counter>
                    <button
                      type="button"
                      onClick={() => {
                        changeAmount(item, -1)
                      }}
                    >
                      <Minus size={16} />
                    </button>

                    <span>{item.amount}</span>
                    <button
                      type="button"
                      onClick={() => {
                        changeAmount(item, 1)
                      }}
                    >
                      <Plus size={16} />
                    </button>
                  </Counter>
                  <TrashButton
                    type="button"
                    onClick={() => {
                      removeItem(item)
                    }}
                  >
                    <Trash size={20} weight="duotone" />
                  </TrashButton>
                </PopUp>
              </div>
            )
          })}
        </div>
      </PopUpGroup>
    </div>
  )
}
