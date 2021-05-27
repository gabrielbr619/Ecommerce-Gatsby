import * as React from "react"
import "./Product.scss"
import { Link } from "gatsby";

export const Products = (props) => {

  return(
  <div className="products-container-master">  
      {props.products.products.edges.map(document => (
        <div key={document.node.id}>
          <Link to={document.node.title + document.node.strapiId }>
          <img src={document.node.imagem[0].localFile.publicURL} alt="deu errado" width="300"x/>
          </Link>
          <p className="product-name">{document.node.title}</p>
          <p className="product-price">R$ {document.node.price}</p>
          <p>{document.node.descricao}</p>
          
        </div>
      ))}
  
    </div>
  )

      }

