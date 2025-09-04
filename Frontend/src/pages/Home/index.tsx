import Sidebar from '../../components/layout/ClientLayout/Sidebar';
import { SubHeroBanner, HeroBanner } from '../../components/home/Banner';
import { useQuery } from '@tanstack/react-query';
import { getPublicData } from '../../api/apiPublic';

import ProductFrame from '../../components/product/ProductFrame';
import ServerError from '../errors/ServerError';


const Home = () => {

 const { data, isLoading,isError } = useQuery({
  queryKey: ["homeLayoutData"],
  queryFn: () => getPublicData("/products/group/"),
});
  const isSkeletonLoading = isLoading || !Boolean(data)



    return (
        <>
            {isError?<ServerError/>:<div className="bg-gray-50 min-h-screen font-inter px-24">
                <main className="container mx-auto px-4 pt-8 flex flex-col lg:flex-row gap-8">
                    <Sidebar isLoading={isSkeletonLoading} categoriesData={data?.categoriesData} />
                    <div className="flex-1">
                        <SubHeroBanner isLoading={isSkeletonLoading} />
                        <ProductFrame isLoading={isSkeletonLoading} data={data?.homeLayoutData1}/>
                        <HeroBanner  isLoading={isSkeletonLoading}  />
                        <ProductFrame isLoading={isSkeletonLoading} data={data?.homeLayoutData3}/>
                    </div>
                </main>
            </div>}
        </>
    );
};

export default Home;
