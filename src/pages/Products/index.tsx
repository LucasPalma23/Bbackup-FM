import Header from '../../components/Header'
import Sites from '../../components/Sites'
import Posts from '../../components/Posts'
import Footer from '../../components/Footer'

import imgSite1 from '../../assets/site1.svg'
import imgSite2 from '../../assets/site2.svg'
import imgSite3 from '../../assets/site3.svg'
import imgSectionHeaderProduct from '../../assets/product-section-header-img.svg'
import imgPost1 from '../../assets/post1.svg'
import imgPost2 from '../../assets/post2.svg'
import imgPost3 from '../../assets/post3.svg'
import imgPost4 from '../../assets/post4.svg'
import imgPost5 from '../../assets/post5.svg'
import imgPost6 from '../../assets/post6.svg'

import './styles-products.scss'

export default function Products() {
  return (
    <>
      <Header />

      <section>
        <div className="image-section-header">
          <img src={imgSectionHeaderProduct} alt="" />
        </div>
        <h1>CATÁLOGO</h1>
      </section>

      <div className="container-products-site_title">
        <h1>Websites</h1>
      </div>

      <div className="container-products-sites">

        <div className="products-sites">
          <div className="container_site">
            <Sites
              name="Construa seu lar - Mude de vida com os melhores imóveis para você"
              image={<img src={imgSite1} />}
            />
          </div>

          <div className="container_site">
            <Sites
              name="AgroFarm é propriedade e operação familiar"
              image={<img src={imgSite2} />}
            />
          </div>
          
          <div className="container_site">
            <Sites
              name="É a Fashionweek, onde o melhor tem o menor preço"
              image={<img src={imgSite3} />}
            />
          </div>
        </div>
      </div>

      <div className="container-products-post_title">
        <h1>Social Media</h1>
      </div>

      <div className="container-products-posts">

        <div className="products-posts">
          <div className="container_post">
            <Posts 
              image={<img src={imgPost1}/>}
            />
          </div>

          <div className="container_post">
            <Posts
              image={<img src={imgPost2}/>}
            />
          </div>
          
          <div className="container_post">
            <Posts
              image={<img src={imgPost3}/>}
            />
          </div>

          <div className="container_post">
            <Posts
              image={<img src={imgPost4}/>}
            />
          </div>

          <div className="container_post">
            <Posts
              image={<img src={imgPost5}/>}
            />
          </div>

          <div className="container_post">
            <Posts
              image={<img src={imgPost6}/>}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
