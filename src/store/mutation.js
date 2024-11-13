 export const getCategories=(state,categories)=>{

   state.categories=categories

 }

 export const getProducts=(state,products)=>{
  state.ALlproducts=products.products
  // console.log(state.ALlproducts)
 }

 export const getSingleProduct=(state,oneProduct)=>{
  state.oneProduct=oneProduct
  console.log(state.oneProduct)
 }