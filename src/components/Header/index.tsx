import NavLogo from '../../assets/logo/NavLogo.svg' // Logo import

import { NavLink } from 'react-router-dom' // tag for navigation
import { HeaderContainer, Items, NavItem, Navigation } from './style' // style for header

import { MapPin, ShoppingCart } from 'phosphor-react' // navigation icons
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export function Header() {
  const { items, newClientOrder } = useContext(OrderContext)
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={NavLogo} alt=""></img>
      </NavLink>
      <Navigation>
        <NavItem color="purple">
          <a>
            <MapPin size={22} weight="fill" />
            {newClientOrder?.clientAddress && (
              <p>
                {newClientOrder?.clientAddress.town},{' '}
                {newClientOrder?.clientAddress.state}{' '}
              </p>
            )}
          </a>
        </NavItem>
        <NavItem color="yellow">
          <NavLink to="/checkout">
            {items?.length !== 0 && (
              <Items>
                <p>{items?.length}</p>
              </Items>
            )}

            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </NavItem>
      </Navigation>
    </HeaderContainer>
  )
}
