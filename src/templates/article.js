import { Link, graphql } from "gatsby"
import React from "react"
//import merge from "deepmerge"
import unified from "unified"
import markdown from "remark-parse"
import codeTitles from "remark-code-titles"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import highlight from "rehype-highlight"
import rehypeReact from "rehype-react"
//import rehypeSanitize from "rehype-sanitize"

import hl_bash from "highlight.js/lib/languages/bash"
import hl_cpp from "highlight.js/lib/languages/cpp"
import hl_dockerfile from "highlight.js/lib/languages/dockerfile"
import hl_js from "highlight.js/lib/languages/javascript"
import hl_py from "highlight.js/lib/languages/python"

import "highlight.js/styles/codepen-embed.css"

//import gh from "hast-util-sanitize/lib/github"
//var schema = merge(gh, {tagNames: ['math', 'mi']})

import Layout from "../layouts"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import styles from "../styles/article.module.scss"

var highlightSchema = {
  languages: {
    bash: hl_bash,
    cpp: hl_cpp,
    dockerfile: hl_dockerfile,
    js: hl_js,
    py: hl_py,}
}

var processor = unified()
  .use(markdown, {commonmark: true})
  .use(codeTitles)
  .use(remarkRehype, {allowDangerousHTML: true})
  .use(rehypeRaw)
  .use(highlight, highlightSchema)
  //.use(rehypeSanitize, schema)
  .use(rehypeReact, {createElement: React.createElement})

class ArticleTemplate extends React.Component {
  render() {
    const data = this.props.data
    const title = data.article.title
    const social = data.site.siteMetadata.social
    const github_repo = data.article.github_repo
    let githubRepoElement;
    if (github_repo) {
      githubRepoElement = <div><a href={github_repo} className={styles.repoLink}>{github_repo}</a></div>
    }
    return (
      <Layout location={this.props.location} title={title} social={social}>
        <div className={styles.responsiveBlogPost}>
          <div className={styles.individualPost}>
            <p>
              <strong>Tags:</strong>
                {data.article.relationships.tags.map(t => {
                  return ` #${t.name} `})}
            </p>
            {githubRepoElement}
            <div
              css={{
                display: `flex`,
                justifyContent: `space-between`,
                marginBottom: rhythm(2),
              }}
            >
            </div>
            <div>
              {processor.processSync(data.article.body.value).contents}
            </div>
          </div>
        </div>
        <Link to="/blog">
          <Button marginTop="85px">Blog</Button>
        </Link>
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default ArticleTemplate

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteTitle: title
        social {
          email
          github
          stackoverflow
        }
      }
    }
    article: articles(fields: { slug: { eq: $slug } }) {
      title
      github_repo
      body {
        value
      }
      internal {
        description
      }
      relationships {
        tags {
          name  
        }
      }
    }
  }
`
