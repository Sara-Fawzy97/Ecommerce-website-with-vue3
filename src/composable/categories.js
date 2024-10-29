import axios from "axios";
import {ref} from 'vue'

const getCategories=()=>{
 const apiUrl='https://fakestoreapi.com/'
let categories= ref([])

const load=async()=>{
    await axios.get(apiUrl+'products/categories').then(
        (res)=>{
            categories.value=res.data
            console.log(categories.value)
        }
    )
    
}

return{
    load,categories
}
}
export default getCategories