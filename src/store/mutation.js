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
          state.cartItems[i].count += product.count;
          exist=true;
          console.log(  state.cartItems[i].count)
          console.log(  product.count)
          break;
           }
     }
 
  if(!exist)
  state.cartItems.push(product)
  
  localStorage.setItem('Cart-Items',JSON.stringify(state.cartItems))
  console.log(state.cartItems)
}


////get cartItems
export const getCart=(state)=>{
  if(localStorage.getItem('Cart-Items')){
    state.cartItems= JSON.parse(localStorage.getItem('Cart-Items'))
  }
  console.log(state.cartItems)
  
}


/////delete item from the cart
export const delCartItem=(state,id)=>{
  for( let i=0; i<state.cartItems.length; i++){
    if(state.cartItems[i].id== id){
      state.cartItems.splice(i,1)
      localStorage.setItem('Cart-Items',JSON.stringify(state.cartItems));
      break;
    }
  }

}