import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import kebabCase from "lodash/kebabCase"

const TagBox = styled.div`
margin-top:2.5rem;
max-width:20rem;
`
const TagContainer = styled.div`
display:flex;
flex-wrap:wrap;
`
const TagLinks = styled.a`
font-size: 1.2rem;
margin-right: .5rem;
background-color:rgb(0 56 147 / 0.2);
height: 2rem;
border-radius: 1rem;
padding: 0 .8rem;
color: #003893;
margin-top:.5rem;
`
const TagNames = styled.span`
vertical-align:middle;
`
const  RightSideBar = ({data}) => {
    const allTags = useStaticQuery(graphql`
    query allTags {
        allMarkdownRemark {
            group(field: frontmatter___tags) {
              tag: fieldValue
            }
          }
    }
    `)
    return(
      <TagBox>
              <div className="inner-tag-container">
                <h2>tags</h2>
               <TagContainer>              
                {
                 allTags.allMarkdownRemark.group.map((tag, index) => {
                    return (
                      <TagLinks key={`xyz-${index}`} href={`/tags/${kebabCase(tag.tag.replace('c#', 'c-sharp'))}/`}>
                        <TagNames>{tag.tag}</TagNames>
                      </TagLinks>                 
                    )
                  })                        
                }               
               </TagContainer>
              </div>
        </TagBox>
    )
}
export default RightSideBar
    
   