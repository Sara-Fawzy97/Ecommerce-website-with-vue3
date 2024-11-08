import axiosClient from "../axiosClient"
// import axios from 'axios'

//////get All Categories////////////
export  const getAllCategories=({commit})=>{
    axiosClient.get('products/categories') 
    .then(res=>{
    
    commit('getCategories',res.data)
    }
    )
}

///////get All products////////////
export const getAllProducts=({commit})=>{
    axiosClient.get('products').then(res=>{
        commit('getProducts',res.data)
    })
}

