import axiosClient from "../axiosClient"
// import axios from 'axios'
// baseURL: 'https://dummyjson.com/'

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

/////////////get Single product/////////////
export const getOneProduct=({commit},id)=>{
    axiosClient.get(`products/${id}`).then(res=>{
            commit('getSingleProduct',res.data)
        }
    )
}

export const increment=({ commit }) =>{
            commit('increment');
        }

export const decrement=({ commit }) =>{
            commit('decrement');
        }


//////////////get products by categories /////////////
export const getCategoryProducts=({commit},category)=>{

    axiosClient.get(`products/category/:${category}`).then(res=>{
               commit('getProducts',res.data)
    })
}
