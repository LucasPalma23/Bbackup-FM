import './styles-posts.scss'

type postProps = {
  image?: JSX.Element;
}

export default function Posts(props:postProps) {
  return (
    <>
      <div className="container-posts">
        <div className="container-posts_image">
          {props.image}
        </div>
      </div>
    </>
  )
}