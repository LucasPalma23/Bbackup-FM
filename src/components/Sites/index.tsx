import './styles-sites.scss'

type siteProps = {
  image: JSX.Element
  name: string
}

export default function Sites(props: siteProps) {
  return (
    <div className="container-sites" data-aos="fade-right">
      <div className="container-sites_image">
        <div className="image">{props.image}</div>
      </div>
      <h1>{props.name}</h1>
      <button>Ver modelo</button>
    </div>
  )
}
