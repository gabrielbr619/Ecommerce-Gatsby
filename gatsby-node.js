/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
 const path = require(`path`);

 const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
   // Query for article nodes to use in creating pages.
   resolve(
     graphql(request).then(result => {
       if (result.errors) {
         reject(result.errors)
       }
 
       return result;
     })
   )
 });
 
 
 // Implement the Gatsby API “createPages”. This is called once the
 // data layer is bootstrapped to let plugins create pages from data.
 exports.createPages = ({ actions, graphql }) => {
   const { createPage } = actions;
 
   const getProducts = makeRequest(graphql, `
     {
       allStrapiProducts {
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
     `).then(result => {
     // Create pages for each article.
     result.data.allStrapiProducts.edges.forEach(({ node }) => {
       createPage({
         path: `/${node.title}${node.strapiId}`,
         component: path.resolve(`src/templates/product.jsx`),
         context: {
           product: node,
         },
       })
     })
   });
  }
   
 
// You can delete this file if you're not using it
