import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import footerDiscount from "../../../assets/footerDiscount.png";
import { Award, Gift, ShoppingBag, Truck } from "../../../icon/icon";
import { getPublicData } from "../../../api/apiPublic";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
}

interface Category {
  category_id: number;
  category_title: string;
  products: Product[];
}

interface FooterData {
  success: boolean;
  data: Category[];
}

const Footer = () => {
  const { data, isLoading, isError } = useQuery<FooterData>({
    queryKey: ["footer_data"],
    queryFn: () => getPublicData(`/products/footer_group`),
  });

  const footerLinks =
    data?.data.map((category) => ({
      linkParent: category,
      links: category.products.map((product) => product),
    })) || [];

  return (
    <footer className="bg-gray-50 text-gray-800 font-sans leading-relaxed">
      <div className="bg-blue-900 px-6 lg:px-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="text-white py-12 text-center md:text-left mb-8 md:mb-0 max-w-lg">
            <h2 className="text-sm font-light mb-1">$20 discount for your first order</h2>
            <h1 className="text-4xl font-semibold mb-4">
              Join our newsletter and get...
            </h1>
            <p className="text-sm font-light leading-snug">
              Join our email subscription now to get updates on promotions and coupons.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="py-3 px-4 rounded-lg flex-1 text-sm bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="py-3 px-6 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
          <figure>
            <img src={footerDiscount} alt="Footer Discount" />
          </figure>
        </div>
      </div>

      <div className="py-8 px-6 lg:px-24 border-b border-gray-200">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          <div className="flex flex-col items-center text-center">
            <ShoppingBag className="w-12 h-12 text-[#1e3a8a] mb-2" />
            <span className="text-sm font-medium">Everyday fresh products</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Truck className="w-12 h-12 text-[#1e3a8a] mb-2" />
            <span className="text-sm font-medium">Free delivery for order over $70</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Gift className="w-12 h-12 text-[#1e3a8a] mb-2" />
            <span className="text-sm font-medium">Daily Mega Discounts</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Award className="w-12 h-12 text-[#1e3a8a] mb-2" />
            <span className="text-sm font-medium">Best price on the market</span>
          </div>
        </div>
      </div>

      <div className="py-12 px-6 lg:px-24">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {isLoading
            ? Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex flex-col">
                  <Skeleton width={100} height={20} className="mb-4" />
                  {Array.from({ length: 6 }).map((_, i) => (
                    <Skeleton key={i} width={80} height={14} className="mb-2" />
                  ))}
                </div>
              ))
            : footerLinks.map((section, index) => (
                <div key={index} className="flex flex-col">
                  <h4 className="text-sm font-bold uppercase mb-4 text-[#1e3a8a]">
                    <Link to={`/product-shop/${section.linkParent.category_id}`}>{section.linkParent.category_title}</Link>
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={`/product-detail/${link.id}`}
                          className="text-sm text-gray-600 hover:text-[#1e3a8a] transition-colors duration-200"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
