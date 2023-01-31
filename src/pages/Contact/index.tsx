import Header from '../../components/Header'
import Footer from '../../components/Footer'

import imgSectionHeader from '../../assets/contact_section-header_img.svg'
import contact_imgIconInstagram from '../../assets/icon_instagram-img.svg'
import contact_imgIconFacebook from '../../assets/icon_facebook-img.svg'
import contact_imgIconWhatsapp from '../../assets/icon_whatsapp-img.svg'
import imgSectionComputer from '../../assets/contact_section-cumputer_img.svg'
import imgSectionRegister from '../../assets/contact_section-register_img.svg'
import imgIconAnexo from '../../assets/contact_anexo_img.svg'

import './styles-contact.scss'

export default function Contact() {
  return (
    <>
      <div className="contact_container">
        <Header />

        <div className="contact_section-header">
          <div className="contact_section-header_text">
            <span>
              conecte-se a nossa <br />
              empresa e tire as <br />
              suas duvidas.
            </span>
            <button>
              VER MAIS {'>'}
              {'>'}
              {'>'}
            </button>
          </div>
          <div className="contact_section-header_img">
            <img src={imgSectionHeader} alt="" />
          </div>
        </div>

        <div className="contact_contacts">
          <div className="contact_contacts_container">
            <a href="https://instagram.com/futuromilionarioficial" style={{textDecoration:"none"}} target="_blank">
              <div className="contact_contacts_container_link-instagram">
                <span>Instagram</span>
                <img src={contact_imgIconInstagram} alt="" />
              </div>
            </a>

            <div className="contact_contacts_container_link-facebook">
              <span>Facebook</span>
              <img src={contact_imgIconFacebook} alt="" />
            </div>

            <a href="https://wa.me/message/UDX7KT5L46TPF1" style={{textDecoration: "none"} } target="_blank">
              <div className="contact_contacts_container_link-whatsapp">
                <span>Whatsapp</span>
                <img src={contact_imgIconWhatsapp} alt="" />
              </div>
            </a>

            <div className="contact_contacts_container_link-computer">
              <img src={imgSectionComputer} alt="" />
            </div>
          </div>
        </div>

        <h1 className="contact_text-register">Vamos colocar seu projeto em prática ?</h1>

        <div className="contact_register-container">
          <div className="contact_register-container_input">
            <input type="text" placeholder='Nome' />
            <input type="tel" placeholder='Telefone' />
            <input type="email" name="" id="" placeholder='E-mail' />
          </div>

          <div className="contact_register-container_img">
            <img src={imgSectionRegister} alt="" />
          </div>
        </div>

        <h1 className="contact_text-work">Trabalhe conosco</h1>

        <div className="contact_work-container">
          <div className="contact_work-container_curriculum">
            <img src={imgIconAnexo} alt="" />
            <span>Anexar currículo</span>
          </div>

          <div className="contact_work-container_input">
            <input type="text" placeholder='Nome' />
            <input type="tel" placeholder='Telefone' />
            <input type="email" name="" id="" placeholder='E-mail' />
            <input type="text" placeholder='Mensagem' />
          </div>
        </div>
          
        <Footer />
      </div>
    </>
  )
}
