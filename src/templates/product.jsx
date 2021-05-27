import React from "react";
import { graphql,Link } from "gatsby";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";

import "./product.scss"

export const productQuery = graphql`
query ($strapiId: Int!) {
  strapiProducts(strapiId: {eq: $strapiId}) {
    title
    price
    descricao
    imagem {
      localFile {
        publicURL
      }
    }
    strapiId
  }
}
`

const Product = ({ pageContext }) => {
  const { product } = pageContext
  console.log(product)
  return (
    <div>
      <Header />
      <div style={{display:"flex"}}>
        <Sidebar />
        <div className="produto">
          <div>
          <img src={product.imagem[0].localFile.publicURL} width="300" alt="" />
          </div>
          <div className="info-container">
          <h1>{product.title}</h1>
          <h2>R$ {product.price}</h2>
          <p>{product.descricao}</p>
          </div>
        </div>
        <Link to="/">Voltar a página inicial</Link>
      </div>
    </div>
  );
};

export default Product;