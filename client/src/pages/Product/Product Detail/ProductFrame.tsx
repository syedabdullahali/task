import Skeleton from "react-loading-skeleton";
import ProductCard from "../../../components/product/ProductCard";
import { ChevronRight } from "../../../icon/icon";

type Product = {
    image: string;
    name: string;
    discount: string;
    rating: number;
    reviews: number;
    price: string;
};


const ProductFrame = ({ data, isLoading = false }: { data: any, isLoading: boolean }) => (

    (isLoading ? [{}] : data)?.map((el: { products: Product[], category_title: string }) =>
        <section className="mb-8">
            <div className="flex items-center justify-between mb-4">

                {isLoading ? <Skeleton height={30} width={200} /> : <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{el.category_title}</h2>}

                {isLoading ? <Skeleton width={100} /> : <a href="#" className="flex items-center text-sm font-medium text-blue-600 hover:underline">
                    View All <ChevronRight size={"16"} className="ml-1" />
                </a>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-gray-200">
                {(isLoading ? new Array(5).fill({}) : el?.products)?.map((p, i) => (
                    <ProductCard key={i} product={p as Product} isLoading={isLoading} />
                ))}
            </div>
        </section>))

export default ProductFrame

