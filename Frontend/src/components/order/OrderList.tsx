import { OrderDta, OrderItem } from '../../types/order.s'
import { Link } from 'react-router-dom'

const OrderList = ({ order, getStatusClass }: { order: OrderDta, getStatusClass: (status: string) => void }) => {



    return (
        <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden p-6">

            <div className="flex justify-between items-center mb-4 pb-4 border-b border-dashed border-gray-300">
                <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="font-semibold text-gray-800">CTH-{order.id}</span>
                </div>
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${ getStatusClass(order.status) }`}>
                    {order.status}
                </span>
            </div>

            <div className="flex items-center text-sm text-gray-500 mb-6">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {order.destination}
            </div>

            {order.items.map((item: OrderItem, index) => (
                <>
                    <div key={item.product.id} className='flex justify-between'>

                        <div key={index} className="flex items-center space-x-4 mb-4">
                            <img
                                src={item.product.image.url}
                                alt={item.product.title}
                                className="w-16 h-16 rounded-lg object-cover bg-gray-100"
                            />
                            <div className="flex-1">

                                <p className="text-base text-gray-800 font-medium">{item.product.title}</p>
                                <p className="text-base text-gray-800 font-medium">${item.product.price}</p>

                                <p>
                                    {((item.product.discount / 100) * item.product.price) > 0 ?
                                        <span className=" top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                            -${((item.product.discount / 100) * item.product.price).toFixed(2)} Off</span> : <></>}

                                </p>

                            </div>
                        </div>

                        <div>
                            <Link to={`/product-detail/${ item.product.id }`} className="block w-fit ml-auto px-6 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Details</Link>


                            <p className="text-sm text-gray-500">${item.price} x{item.quantity}</p>
                            <p className="text-sm text-gray-500 font-bold">Total Item Price ${(Number(item.price) * item.quantity).toFixed(2)}</p>

                        </div>

                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-dashed border-gray-300">



                    </div>
                </>
            ))}
            Total: Amount {Number(order.total_amount_with_discounte) > 0 ?
                <>
                    <del className="text-gray-800 font-semibold">${order.total_amount} </del>
                    <span className="ml-2 text-red-500"> ${(order.total_amount_with_discounte)}</span>
                </> :
                <span className="ml-2 text-gray-600"> ${(order.total_amount_with_discounte)}</span>
            }


        </div>
    )
}

export default OrderList
