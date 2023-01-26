import { useState } from 'react'
import { Link } from 'react-router-dom';

import imgLogo from '../../assets/logo.svg'
import imgPolygon from '../../assets/polygon-img.svg'
import imgLogoResponsive from '../../assets/logo-responsive.svg'

import './styles-header.scss'

export default function Header() {
  const [active, setActive] = useState('nav-list')
  const navToggle = () => {
    active === 'nav-list'
      ? setActive('nav-list nav-list-active')
      : setActive('nav-list')
  }

  return (
    <>
      <header>
        <img src={imgPolygon} alt="polígono" className="polygon-header" />
        <div className="img-responsive">
          <img
            src={imgLogoResponsive}
            alt="Logo da empra"
            className="logo-img-responsive"
          />
        </div>
        <img src={imgLogo} alt="Logo da empresa" className="logo-img" />
        <nav>
          <div onClick={navToggle} className="mobile-menu">
            <div className="line1"></div>
            <div className="line1"></div>
            <div className="line1"></div>
          </div>
          <ul className={active}>
            <div>
              <Link to={"/"} style={{textDecoration: "none"}}>
                <li>Início</li>
              </Link>
            </div>
            <div>
              <Link to={"/catalogo"} style={{textDecoration: "none"}}>
                <li>Catálogo</li>
              </Link>
            </div>
            <Link to={"/sobre"} style={{textDecoration: "none"}}>
              <div>
                <li>Sobre</li>
              </div>
            </Link>
            <Link to={"/contato"} style={{textDecoration: "none"}}>
              <div>
                <li>Contato</li>
              </div>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  )
}