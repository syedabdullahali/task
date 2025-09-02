import footerDiscount from "../../../assets/footerDiscount.png"
import { Award, Gift, ShoppingBag, Truck } from "../../../icon/icon";

const Footer = () => {
  // Mock data for the footer links
  const footerLinks = [
    {
      title: "FRUIT & VEGETABLES",
      links: [
        "Cuts & Sprouts",
        "Exotic Fruits & Veggies",
        "Fresh Fruits",
        "Fresh Vegetables",
        "Herbs & Seasonings",
        "Packaged Produce",
        "Party Trays"
      ]
    },
    {
      title: "BREAKFAST & DAIRY",
      links: [
        "Butter and Margarine",
        "Cheese",
        "Eggs Substitutes",
        "Honey",
        "Marmalades",
        "Milk & Flavoured Milk",
        "Sour Cream and Dips",
        "Yogurt"
      ]
    },
    {
      title: "MEAT & SEAFOOD",
      links: [
        "Beef",
        "Breakfast Sausage",
        "Chicken",
        "Crab and Shellfish",
        "Dinner Sausage",
        "Farm Raised Fillets",
        "Shrimp",
        "Sliced Deli Meat",
        "Wild Caught Fillets"
      ]
    },
    {
      title: "BEVERAGES",
      links: [
        "Coffee",
        "Craft Beer",
        "Drink Boxes & Pouches",
        "Milk & Plant-Based Milk",
        "Soda & Pop",
        "Sparkling Water",
        "Tea & Kombucha",
        "Water",
        "Wine"
      ]
    },
    {
      title: "BREADS & BAKERY",
      links: [
        "Butter and Margarine",
        "Cheese",
        "Eggs Substitutes",
        "Honey",
        "Marmalades",
        "Milk & Flavoured Milk",
        "Sour Cream and Dips",
        "Yogurt"
      ]
    }
  ];



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
              <button
                className="py-3 px-6 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
          </div>
          <figure>
            <img src={footerDiscount} />
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
          {footerLinks.map((section, index) => (
            <div key={index} className="flex flex-col">
              <h4 className="text-sm font-bold uppercase mb-4 text-[#1e3a8a]">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-sm text-gray-600 hover:text-[#1e3a8a] transition-colors duration-200">
                      {link}
                    </a>
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
