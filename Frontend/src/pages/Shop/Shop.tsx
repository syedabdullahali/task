import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/layout/ClientLayout/Sidebar'
import ProductFrameAll from '../../components/product/ProductFrameAll'
import { useQuery } from '@tanstack/react-query'
import { getData } from '../../api/method'
import { useNavigate, useParams } from 'react-router-dom'
import ProductSearch from '../../components/product/ProductSearch'
// import { useParams } from 'react-router-dom'

const Shop = () => {
  const {categoryId} = useParams()
  const navigate = useNavigate()

  const [value,setValue] = useState('')
  const {data:{data,categoryData},isLoading } = useQuery({
      queryKey: ['productDetails', categoryId,value],
      queryFn: () => getData(`/products/product_list_with_category?categoryId=${categoryId}&search=${value}`),
      initialData: {data:null} ,
  })  

  const isSkeletonLoading = isLoading || !Boolean(data)

 useEffect(() => {
     window.scrollTo(0, 0); // scroll to top
   }, [categoryId]);
 

  return (
    <div className='flex px-24 pt-2'>
      <Sidebar isLoading={isSkeletonLoading} categoriesData={categoryData}/>
      <div className='w-full px-2 flex justify-start flex-col gap-2 '>
        <div  className='flex justify-between items-center'>
          <ProductSearch value={value} handaleChangeValue={(value:string)=>{setValue(value)}}  /> 
           <button className=" w-40 bg-blue-800 text-white text-md py-2 rounded hover:bg-blue-700 transition-colors" onClick={()=>{
            setValue('')
            navigate('/product-shop/0')
            }}>CLEAR</button>   
        </div>
       <ProductFrameAll isLoading={isSkeletonLoading} data={data}/>  
      </div>
    </div>
  )
}

export default Shop
