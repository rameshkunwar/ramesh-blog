import * as React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { nanoid } from "nanoid";
import { toKebabCase } from "./utils";

const TagBox = styled.div`
  margin-top: 2.5rem;
  max-width: 20rem;
`;
const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const TagLinks = styled.a`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  background-color: rgb(0 56 147 / 0.2);
  height: 2rem;
  border-radius: 1rem;
  padding: 0 0.8rem;
  color: #003893;
  margin-top: 0.5rem;
`;
const TagNames = styled.span`
  vertical-align: middle;
`;
const ShowTagsOnRightSideBar = ({ data }: any) => {
  const allTags = useStaticQuery(graphql`
    query allTags {
      allMdx {
        group(field: { frontmatter: { tags: SELECT } }) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `);
  return (
    <TagBox>
      <div className='inner-tag-container'>
        <h2>Tags</h2>
        <TagContainer>
          {allTags.allMdx.group.map((tag: any) => {
            return (
              <TagLinks
                key={nanoid()}
                href={`/posts/tags/${toKebabCase(tag.tag)}`}
              >
                <TagNames> {tag.tag} </TagNames>
              </TagLinks>
            );
          })}
        </TagContainer>
      </div>
    </TagBox>
  );
};
export default ShowTagsOnRightSideBar;
