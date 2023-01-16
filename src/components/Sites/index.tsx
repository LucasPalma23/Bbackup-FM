import './styles.scss'

type siteProps = {
  image: JSX.Element;
  name: string
}

export default function Sites(props:siteProps) {
  return (
  <div className="container" data-aos="fade-right">
    <div className="container-image">
      {props.image}
    </div>
    <h1>{props.name}</h1>
    <button>Ver modelo</button>
  </div>
)
}