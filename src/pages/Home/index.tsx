import { useState } from 'react'
import Sites from '../../components/Sites'
import AOS from 'aos'
import 'aos/dist/aos.css';

import imgLogo from '../../assets/logo.svg'
import imgPolygon from '../../assets/polygon-img.svg'
import imgSite1 from '../../assets/site1.svg'
import imgLogoResponsive from '../../assets/logo-responsive.svg'
import imgSectionServices from '../../assets/section-services-img.svg'
import imgSectiomMarketing from '../../assets/section-marketing-img.svg'

import './styles.scss'

export default function Home() {
  AOS.init();

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
              <li>Início</li>
            </div>
            <div>
              <li>Catálogo</li>
            </div>
            <div>
              <li>Sobre</li>
            </div>
            <div>
              <li>Contato</li>
            </div>
          </ul>
        </nav>
      </header>
      <div className="section-header">
        <div className="title-header">
          <h1>O que eu faço para passar mais confiança ao meu cliente?</h1>
        </div>
        <div className="button-header">
          <button>
            VER MAIS {'>'}
            {'>'}
            {'>'}
          </button>
        </div>
      </div>
      <section className="services">
        <div className="section-services" >
          <div className="section-services_text">
            <h1>SERVIÇOS</h1>
            <h2>Websites</h2>
            <p>
              A necessidade de um website dentro do cenário empresarial gira em torno <br />
              de estabelecer a sua credibilidade como um negócio. Se a corporação <br />
              possui uma boa imagem no ambiente digital, cria-se uma confiabilidade,  <br />
              segurança e maturidade diante do público.
            </p>
            <h2>Gestão de Redes Sociais</h2>
            <p>
            Cada empresa possui uma finalidade distinta, e nem sempre é possível <br />
            proporcionar, de fato, a atenção necessária para a gestão de Redes Sociais <br />
            e tudo que envolve os novos canais de divulgação da marca, dos produtos <br />
            e serviços disponibilizados para o mercado consumidor.
            </p>
          </div>
          <div className="section-services_img">
            <img src={imgSectionServices} />
          </div>
        </div>
      </section>
      <div className="section-marketing">
        <div className="section-marketing_img"><img src={imgSectiomMarketing} alt="" /></div>
        <div className="section-marketing_text">
          <h1>Marketing</h1>
          <p>
            QUER SABER MAIS SOBRE COMO <br />
            TRAZER CREDIBILIDADE PARA <br />
            SEU NEGÓCIO ?
          </p>
          <button>ENTRAR EM CONTATO</button>
        </div>
      </div>
    </>
  )
}
