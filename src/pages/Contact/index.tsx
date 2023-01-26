import Header from '../../components/Header'
import Footer from '../../components/Footer'

import imgSectionHeader from '../../assets/contact_section-header_img.svg'

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

        <Footer />
      </div>
    </>
  )
}
