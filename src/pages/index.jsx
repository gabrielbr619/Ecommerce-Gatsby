import * as React from "react"
import { graphql } from "gatsby"
import { Products } from "../components/Product/Product";
import "./global.scss"
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar"

const IndexPage = ({ data }) => (
  
    
    <div style={{ display: "flex", flexDirection: "column",height:"100%" }}>
      <Header />

      <div style={{ display: "flex", alignSelf:"stretch", flexGrow:1, height:"100%"}}>
      <Sidebar />
      <Products products={data} />
    </div>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
query IndexQuery {
  products: allStrapiProducts {
    edges {
      node {
        id
        descricao
        Qtd
        price
        published_at
        title
        strapiId
        imagem {
          url
          width
          localFile {
            publicURL
          }
        }
      }
    }
  }
}
`