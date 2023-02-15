import * as React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import siteConfig from "../../../site-config";
import { graphql, HeadFC, Link, PageProps } from "gatsby";

const BlogPost = ({ data, children }: any) => {
  return (
    <Layout>
      <SEO
        title={siteConfig.title}
        description={siteConfig.description}
        author={siteConfig.author}
        keywords={siteConfig.tags}
        articleUrl={`https://kunwar.dk`}
      />
      {/* <p> {data.mdx.frontmatter.modified} </p> */}
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        description
        modified(formatString: "MMM D, YYYY")
      }
    }
  }
`;

export const Head: HeadFC = () => <title>My blog</title>;
export default BlogPost;
