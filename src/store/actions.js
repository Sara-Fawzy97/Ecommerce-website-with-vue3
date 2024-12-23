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
export const getAllProducts=({commit},{limit,skip})=>{
    axiosClient.get(`products?limit=${limit}&skip=${skip}`).then(res=>{
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

    axiosClient.get(`products/category/${category}`).then(res=>{
               commit('categoriesProducts',res.data)
    })
}
// 'https://dummyjson.com/products?sortBy=title&order=asc'

//////Sort products By ///////////
export const sort=({commit},{sort,order})=>{

    axiosClient.get(`products?sortBy=${sort}&order=${order}`).then(res=>{
        commit('sortBy',res.data)
    })
}

/////////For searching ////////
export const searchProducts= ({commit},prod)=>{
    axiosClient.get(`products/search?q=${prod}`).then(res=>{
        commit('search',res.data)
    })
}