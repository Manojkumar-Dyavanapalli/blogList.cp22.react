// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blogs-list">
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogItemDetails={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
