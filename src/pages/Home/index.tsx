import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import imgSectionServices from '../../assets/section-services-img.svg'
import imgSectiomMarketing from '../../assets/section-marketing-img.svg'

import './styles-home.scss'

export default function Home() {
  return (
    <>
      <Header />

      <div className="home_section-header">
        <div className="home_section-header_title">
          <h1>O que eu faço para passar mais confiança ao meu cliente?</h1>
        </div>

        <div className="home_section-header_button">
          <button>
            VER MAIS {'>'}
            {'>'}
            {'>'}
          </button>
        </div>
      </div>

      <div className="home_section-services">
        <div className="home_section-services_text">
          <h1>SERVIÇOS</h1>
          <h2>Websites</h2>
          <p>
            A necessidade de um website dentro do cenário empresarial gira em{' '}
            <br />
            torno de estabelecer a sua credibilidade como um negócio. Se a{' '}
            <br />
            corporação possui uma boa imagem no ambiente digital, cria-se uma{' '}
            <br />
            confiabilidade, segurança e maturidade diante do público.
          </p>

          <h2>Gestão de Redes Socias</h2>
          <p>
            Cada empresa possui uma finalidade distinta, e nem sempre é possível
            proporcionar, de fato, a atenção necessária para a gestão de Redes
            Sociais e tudo que envolve os novos canais de divulgação da marca,
            dos produtos e serviços disponibilizados para o mercado consumidor.
          </p>
        </div>

        <div className="home_section-services_img">
          <img src={imgSectionServices} alt="" />
        </div>
      </div>

      <div className="section-marketing">
        <div className="section-marketing_img">
          <img src={imgSectiomMarketing} alt="" />
        </div>

        <div className="section-marketing_text">
          <h1>MARKETING</h1>

          <p>
            QUER SABER MAIS SOBRE COMO <br />
            TRAZER CREDIBILIDADE PARA <br />
            SEU NEGÓCIO ?
          </p>

          <button className="btn btn-animation">
            <a
              href="https://wa.me/message/UDX7KT5L46TPF1"
              style={{ textDecoration: 'none', color: '#F0C146' }}
              target="_blank"
            >
              <span className="btn-txt">ENTRAR EM CONTATO</span>
            </a>
          </button>
        </div>
      </div>

      <Footer />
    </>
  )
}
