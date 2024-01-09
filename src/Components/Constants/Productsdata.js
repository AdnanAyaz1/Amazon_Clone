
import axios from 'axios'

    async function Productsdata()
    {
     const data = await axios.get('https://fakestoreapi.com/products');
     return data;
   }


export default Productsdata;