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
            <p>Piracicaba - SP</p>
            <p>futuromilionario08@gmail.com</p>
            <p>(19) 99464-8146</p>
          </div>
          <div className="footer-signin">
            <h2>QUER FICAR POR DENTRO DAS NOVIDADES?</h2>
            <input type="email" name="" id="" placeholder="E-MAIL" />
            <button>CADASTRAR</button>
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
