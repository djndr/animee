import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const AuthorBio = ({ author }) => {
  author = author?.node
  if (!author.description) return null

  const avatar = getImage(author?.avatar.imageFile)


  const description = author.description.replace(/(\r\n|\n|\r)/gm, "<br/>")

  return (
    <div className="author-bio">
      <div className="author-title-wrapper">
        <div className="author-avatar vcard">
          <div className="avatar avatar-160 wp-user-avatar wp-user-avatar-160 alignnone photo">
            <GatsbyImage
              image={avatar}
              className="avatar"
              alt={author.name} />
          </div>
        </div>
        <h2 className="author-title heading-size-4">By {author.name}</h2>
      </div>
      <div className="author-description">
        <div dangerouslySetInnerHTML={{ __html: description }} />

        <Link className="author-link" to={author.uri} rel="author">
          View Archive <span aria-hidden="true">→</span>{" "}
        </Link>
      </div>
    </div>
  )
}

export default AuthorBio
