// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {title, description, publishedDate} = blogItemDetails

  return (
    <li className="blog-item">
      <div className="date-title-cont">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
      <hr className="hr" />
    </li>
  )
}

export default BlogItem
