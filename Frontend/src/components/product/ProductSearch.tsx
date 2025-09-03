import React, { useEffect, useState } from 'react'
import { Search } from '../../icon/icon'
import { useNavigate } from 'react-router-dom'
import { Product } from '../../types/product'
import Spinner from '../ui/Spin'

const ProductSearch = ({ dropdown = false, data, handaleChangeValue, value = "", isLoading = false }:
    { data?: [], dropdown?: boolean, handaleChangeValue: (value: string) => void, value: string, isLoading?: boolean }
) => {
    const [isFocus, setIsFocus] = useState(false)
    const naviaget = useNavigate()

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!(e.target as HTMLElement).closest('.product-search')) {
                setIsFocus(false);
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [])




    return (
        <div  onFocus={() => setIsFocus(true)} className="hidden relative product-search   lg:flex w-96  flex-1 mx-8 items-center border border-gray-300 rounded pl-4 py-2 bg-gray-100 ">
            <Search size={"18"} className="text-gray-500 mr-2" />
            <input value={value} onChange={(e) => { handaleChangeValue(e.target.value) }} type="text" placeholder="100% Bacon delivery without crossing the cow-line..."
                className=" bg-transparent focus:outline-none text-gray-700 w-full" />
            <ul className={`bg-white flex flex-col  gap-4 top-full left-0 absolute z-20 rounded-b overflow-hidden   ${ dropdown && isFocus ? "w-full  " : "h-0 w-0 overflow-hidden " } duration-700`}>
                {data?.map((el: Product) =>
                    <li key={el.id} onClick={()=>{
                        setIsFocus(false)
                        naviaget(`/product-detail/${el.id}`)
                        }} className='group hover:bg-gray-200 px-2 py-1 cursor-pointer flex justify-between itmes-center'>
                        <span className='flex gap-2 items-center'>
                            <img src={el.image.url} width={55} height={50} className='border p-1 object-cover ' />
                            <span className='border-b-2 border-black group-hover:text-blue-800 group-hover:border-blue-800'>{el.title}</span>
                        </span>
                        <span className="text-red-500 font-semibold pt-2 text-sm">
                            {(el.discount / 100) * el.price > 0 ?
                                <>
                                    <del className="text-gray-600">${el.price} </del>
                                    <span className="ml-2 text-red-500"> ${(el.price - (el.discount / 100) * el.price)}</span>
                                </> :
                                <span className="ml-2 text-gray-600"> ${(el.price - (el.discount / 100) * el.price)}</span>

                            }
                        </span>
                    </li>
                )}
                {!isLoading && !data?.length && !value.trim()&&
                    <li className='flex justify-between items-center'>
                        <span className='p-4 w-full'>Data Not Found</span>
                        <span onClick={() => { handaleChangeValue("") }} className='border-b-2 cursor-pointer text-sm border-black group-hover:text-blue-800 group-hover:border-blue-800'>Clear</span>
                    </li>
                }
            </ul>
            {isLoading ? <Spinner className='-ml-14' size={15} /> : <span className='h-4 w-6 '></span>}
        </div>
    )
}

export default ProductSearch
