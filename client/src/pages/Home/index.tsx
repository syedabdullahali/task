import Footer from '../../components/layout/Footer';
import { ChevronRight } from '../../icon/icon';
import ProductCard from '../../components/product/ProductCard';
import Header from '../../components/layout/Header';
import NavBar from '../../components/layout/NavBar';
import Sidebar from '../../components/layout/Sidebar';
import { SubHeroBanner, HeroBanner } from '../../components/home/Banner';

const products = [
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOL35Snnu-L315KM5nMolf5z48A3qm4RS4oQ&shttps://fabsupermart.com/wp-content/uploads/2023/02/BM_Meatballs_Packshot-510x757-1.jpg', name: 'Al Natural Italian-Style Chicken', discount: '-30%', rating: 4, reviews: 12, price: '$7.25' },
    { image: 'https://m.media-amazon.com/images/I/61mJ+pCAuUL._UF350,350_QL50_.jpg', name: "Angel's Rosamochapopop sweet & salty", discount: '-20%', rating: 5, reviews: 20, price: '$3.29' },
    { image: 'https://plantx.com/cdn/shop/products/FieldRoast-CreamyOriginalChaoBlock_7oz_700x.jpg?v=1647003797', name: 'Felid Roast Choc Cheese Creamy', discount: '-15%', rating: 4, reviews: 15, price: '$9.50' },
    { image: 'https://m.media-amazon.com/images/I/61oZ1kVdJBL.jpg', name: 'Blue Diamond Almonds Lightly Salted', discount: '-25%', rating: 5, reviews: 10, price: '$4.99' }
];

const Home = () => {
    return (
        <>
            <Header />
            <NavBar />

            <div className="bg-gray-50 min-h-screen font-inter px-24">
                <main className="container mx-auto px-4 pt-8 flex flex-col lg:flex-row gap-8">
                    <Sidebar />
                    <div className="flex-1">
                        {/* Hero Section */}
                        <SubHeroBanner />

                        {/* Best Sellers Section */}
                        <section className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">BEST SELLERS</h2>
                                <a href="#" className="flex items-center text-sm font-medium text-blue-600 hover:underline">
                                    View All <ChevronRight size={"16"} className="ml-1" />
                                </a>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-gray-200">
                                {products.map((p, i) => <ProductCard key={i} product={p} />)}
                            </div>
                        </section>

                        <HeroBanner />


                        {/* New Products Section */}
                        <section className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">NEW PRODUCTS</h2>
                                <a href="#" className="flex items-center text-sm font-medium text-blue-600 hover:underline">
                                    View All <ChevronRight size={"16"} className="ml-1" />
                                </a>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
                                {products.map((p, i) => <ProductCard key={i} product={p} />)}
                            </div>
                        </section>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Home;
