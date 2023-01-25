import Footer from "../../components/Footer";
import Header from "../../components/Header";

import imgAboutContentMission from '../../assets/about_content-mission_img.svg'
import imgAboutContentVision from '../../assets/about_content-vision_img.svg'
import imgAboutContentValue from '../../assets/about_content-value_img.svg'

import './styles-about.scss'

export default function About() {
  return (
    <>
      <Header />

      <div className="about_container">

        <div className="about_section-header">

          <div className="about_section-header_title">
            <h1>Sobre nós</h1>
            <h2>Marketing para empresas</h2>
            <p>Somos uma empresa composta por 5 profissionais que buscam atender <br />
              os clientes de maneira mais eficiente com o propósito de realizar uma <br />
              expansão de seu negócio no ambiente digital e fazer com que a satisfação <br />
              do cliente não seja apenas com o crescimento em likes ou engajamentos e <br />
              sim uma evolução financeira na qual ira sentir uma necessidade em investir <br />
              cada vez mais no ambiente digital.
            </p>
          </div>

        </div>

        <div className="about_section-content">

          <div className="about_section-content_mission">
            <div className="about_section-content_mission_img">
              <img src={imgAboutContentMission} alt="" />
            </div>
            <div className="about_section-content_mission_text">
              <h1>MISSÃO</h1>
              <p>
                Realizar um trabalho com a capacidade de fazer <br />
                o nosso cliente evoluir sentindo a necessidade <br />
                de investimentos no ambiente digital.
              </p>
            </div>
          </div>
          <div className="about_section-content_vision">
            <div className="about_section-content_vision_text">
              <h1>VISÃO</h1>
              <p>
              Ser a maior e melhor empresa de Marketing <br />
              Digital do mundo, oferecendo aos seus clientes e <br />
              parceiros uma relação duradoura, com foco <br />
              no crescimento, rentabilidade e responsabilidade <br />
              financeira.
              </p>
            </div>
            <div className="about_section-content_vision_img">
              <img src={imgAboutContentVision} alt="" />
            </div>
          </div>
          <div className="about_section-content_value">
            <div className="about_section-content_value_img">
              <img src={imgAboutContentValue} alt="" />
            </div>
            <div className="about_section-content_value_text">
              <h1>VALORES</h1>
              <ul>
                <li>Confiança</li>
                <li>Honestidade</li>
                <li>Capacidade para aceitar grandes desafios <br />
                    e conduzi-los até o final.
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </>
  )
}