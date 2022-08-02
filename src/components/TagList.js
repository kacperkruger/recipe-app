import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"
import slugify from "slugify"

const TagList = ({ recipes }) => {
  const tags = setupTags(recipes)
  return (
    <div className={"tags-container"}>
      <h4>recipes</h4>
      <div className={"tags-list"}>
        {tags.map((tag, index) => {
          const [text, value] = tag
          const tagSlug = slugify(text, { lower: true })
          return (
            <Link to={`/tags/${tagSlug}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagList
