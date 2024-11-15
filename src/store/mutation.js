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

 export const increment=(state) =>{
          state.count++;
      }
export const decrement=(state) =>{
        state.count--;
    }

///////////////add to cart 
export const addToCart =(state,product)=>{
  
let exist=false
  for( let i=0; i<state.cartItems.length; i++){
        if(state.cartItems[i].id== product.id){
          state.cartItems[i].count+=product.count
          exist=true
          break;
  }}
  // let ProductInCart= state.cartItems.find(item=>{
  //   // console.log(item.id)
  //   return item.id === product.id;
  // });
  
  // if(ProductInCart){
  //   ProductInCart.count+=product.count
  // }
  if(!exist)
  state.cartItems.push(product)
  
  console.log(state.cartItems)
}