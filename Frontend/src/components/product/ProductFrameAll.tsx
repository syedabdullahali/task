import ProductCard from "./ProductCard";
type Product = {
    image: string;
    name: string;
    discount: string;
    rating: number;
    reviews: number;
    price: string;
};


const ProductFrameAll = ({ data, isLoading = false }: { data: any, isLoading: boolean }) => (

        <section className="mb-8">
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-gray-200">
                {(isLoading ? new Array(8).fill({}) : data)?.map((p:Product, i:number) => (
                    <ProductCard key={i} product={p as Product} isLoading={isLoading} />
                ))}
            </div>
        </section>
)

export default ProductFrameAll

