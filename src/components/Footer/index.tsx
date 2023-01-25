import imgLogo from '../../assets/logo-responsive.svg'
import imgIconInstagram from '../../assets/icon_instagram-img.svg'
import imgIconFacebook from '../../assets/icon_facebook-img.svg'

import './styles-footer.scss'

export default function Footer() {
  return (
    <>
      <div className="container-footer">
        <div className="line-footer-top"></div>
        <div className="container-footer-primary">
          <div className="img-footer-primary">
            <img src={imgLogo} alt="" />
          </div>
          <div className="footer-address">
            <h3>Fale conosco:</h3>
            <p>R. XXXXX XXXXX, XXX-XXX</p>
            <p>Piracicaba -SP</p>
            <p>contato@xxxxx.com.br</p>
            <p>(19) xxxxx-xxxx</p>
          </div>
          <div className="footer-signin">
            <h2>CADASTRE-SE</h2>
            <input type="text" name="" id="" placeholder='NOME COMPLETO' />
            <input type="email" name="" id="" placeholder='E-MAIL' />
            <input type="password" name="" id="" placeholder='SENHA' />
            <button>FINALIZAR CADASTRO</button>
          </div>
        </div>
        <div className="line-footer-bottom"></div>
        <div className="footer_media-social">
          <p>Siga á FUTURO MILIONÁRIO:</p>
          <div className="footer_media-social_instagram">
            <div className="footer_media-social_instagram_image">
              <img src={imgIconInstagram} alt="" />
            </div>
            <span>@futuromilionarioficial</span>
          </div>
          <div className="footer_media-social_facebook">
            <div className="footer_media-social_facebook_image">
              <img src={imgIconFacebook} alt="" />
            </div>
            <span>Futuro Milionário</span>
          </div>
        </div>
      </div>
    </>
  )
}