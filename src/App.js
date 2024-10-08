import axios from 'axios';
import './App.css';
import Category from './Category';
import { useEffect, useState } from 'react';

function App() {
  let [finalCategory,setFinalCategory] = useState([]);
  let [finalProducts,setFinalProducts] = useState([]);
  let [catName,setCatName] = useState('');

  let getCategory = () => {
    axios.get('https://dummyjson.com/products/categories')
    .then((res) => res.data)
    .then((finalResponse) => setFinalCategory(finalResponse))
  }

  let getProducts = () => {
    axios.get('https://dummyjson.com/products')
    .then((res) => res.data)
    .then((response) => setFinalProducts(response.products))
  }

  useEffect(() => {
    getCategory();
    getProducts();
  },[])

  useEffect(() => {
    if(catName !== "") {
      axios.get(`https://dummyjson.com/products/category/${catName}`)
      .then((res) => res.data)
      .then((response) => setFinalProducts(response.products))
    }
    
  },[catName])

  let Pitems = finalProducts.map((product,i) => {
    return(
      <ProductItems key={i} pData={product}></ProductItems>
    )
  })

  return (
    <>
      <div className='py-[40px]'>
        <div className='max-w-[1320px] mx-auto'>
          <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our Products</h1>
          <div className='grid grid-cols-[30%_auto] gap-[20px]'>
            <div>
              <Category finalCategory={finalCategory} setCatName={setCatName}></Category>
            </div>

            <div>
              <div className='grid grid-cols-3 gap-5'>
                { finalProducts.length>=1 ? Pitems : "No product found"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function ProductItems({pData}) {
    return(
    <div className='shadow-lg text-center pb-[4]'>
      <img alt="no" src={pData.thumbnail} className='w-[100%] h-[220px]'></img>
      <h4>{pData.title}</h4>
      <b>{`Rs. ${pData.price}`}</b>
    </div>
  )
}
