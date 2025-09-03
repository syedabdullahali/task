import { NavLink } from 'react-router-dom';
import {CategoryIcon, ProductIcon, TruckIcon, UserGroupIcon} from "../.././../icon/icon"

const navItems = [
  { name: 'Users', icon: UserGroupIcon, path: '/admin' },
  { name: 'Category', icon: CategoryIcon, path: '/admin/category_management' },
  { name: 'Product', icon: ProductIcon, path: '/admin/product_management' },
  { name: 'Order Tracking', icon: TruckIcon, path: '/admin/order_management' },
];

const App = () => {
  return (
    <aside className="bg-white p-4  flex-shrink-0 border-r border-gray-200 min-h-screen">
      <nav className="space-y-2">
        {navItems.map((item, index) => (
          <NavLink key={index} to={item.path} className="flex items-center gap-2 p-3 rounded-xl hover:bg-gray-100 transition-colors duration-150">
            <item.icon />
            <span className="text-sm font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default App;
