import Footer from '../../components/layout/Footer';
import { ChevronRight } from '../../icon/icon';
import ProductCard from '../../components/product/ProductCard';

import Sidebar from '../../components/layout/Sidebar';
import { SubHeroBanner, HeroBanner } from '../../components/home/Banner';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../../api/method';

type Product = {
  image: string;
  name: string;
  discount: string;
  rating: number;
  reviews: number;
  price: string;
};


const Home = () => {

 const { isSuccess, data, isError, status, isLoading } = useQuery({
  queryKey: ["homeLayoutData"],
  queryFn: () => getData("/products/group/"),
});
 
      console.log(isSuccess,data,isError,status,isLoading)
    return (
        <>


            <div className="bg-gray-50 min-h-screen font-inter px-24">
                <main className="container mx-auto px-4 pt-8 flex flex-col lg:flex-row gap-8">
                    <Sidebar categoriesData={data?.categoriesData} />
                    <div className="flex-1">
                        {/* Hero Section */}
                        <SubHeroBanner />

                        {/* Best Sellers Section */}
                        {data?.homeLayoutData1?.map((el:{products:Product[],category_title:string})=>
                        <section className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{el.category_title}</h2>
                                <a href="#" className="flex items-center text-sm font-medium text-blue-600 hover:underline">
                                    View All <ChevronRight size={"16"} className="ml-1" />
                                </a>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-gray-200">
                                {el?.products?.map((p:Product, i:number) => <ProductCard key={i} product={p} />)}
                            </div>
                        </section>)}

                        <HeroBanner />


                        {/* New Products Section */}
                        {data?.homeLayoutData3?.map((el:{products:Product[],category_title:string})=>
                        <section className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{el.category_title}</h2>
                                <a href="#" className="flex items-center text-sm font-medium text-blue-600 hover:underline">
                                    View All <ChevronRight size={"16"} className="ml-1" />
                                </a>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-gray-200">
                                {el?.products?.map((p:Product, i:number) => <ProductCard key={i} product={p} />)}
                            </div>
                        </section>)}
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Home;
