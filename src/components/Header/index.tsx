import { NavLink } from 'react-router-dom'

import { MapPin, ShoppingCart } from 'phosphor-react'

import { useCart } from '@contexts/CartContext'

import logo from '@assets/logo.svg'

import { HeaderContainer } from './styles'
import { useEffect, useState } from 'react'

export function Header() {
  const { quantityInCart } = useCart()

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [city, setCity] = useState('');

  useEffect(() => {
    getCurrentPosition()
  }, [])

  useEffect(() => {
    if (latitude !== 0 && longitude !== 0) {
      setCityName()
    }
  }, [latitude, longitude])

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })
  }

  function setCityName() {
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`)
    .then((response) => response.json()).then((data) => {
      setCity(data.city);
    })
  }

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="Logo" />
      </NavLink>

      <div>
        <nav>
          <div id="pin-container">
            <MapPin size={22} weight="fill" />

            <p>{city}</p>
          </div>

          <NavLink to="/checkout" title="Carrinho">
            <ShoppingCart size={22} weight="fill" />

            <div className="notification">
              <span>{quantityInCart}</span>
            </div>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
