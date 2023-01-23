import Header from '../../components/Header'

import imgSectionServices from '../../assets/section-services-img.svg'
import imgSectiomMarketing from '../../assets/section-marketing-img.svg'

import './styles-home.scss'

export default function Home() {

  return (
    <>
      <Header />
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
          <h1>MARKETING</h1>
          <p>
            QUER SABER MAIS SOBRE COMO <br />
            TRAZER CREDIBILIDADE PARA <br />
            SEU NEGÓCIO ?
          </p>
          <button className='btn btn-animation'><span className='btn-txt'>ENTRAR EM CONTATO</span></button>
        </div>
      </div>
    </>
  )
}
