import { Product} from "../../types/product";
import ProductCard from "./ProductCard";

const ProductFrameAll = ({ data, isLoading = false }: { data: any, isLoading: boolean }) => (

    <section className="mb-8">
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-gray-200">
             {(isLoading ? new Array(5).fill({}) : data)?.map((p:Product, i:number) => (
                    <ProductCard key={p?.id?p?.id:i} product={p} isLoading={isLoading} />
                ))}
        </div>         
    </section>
)

export default ProductFrameAll

