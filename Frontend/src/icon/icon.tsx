interface Icon {
    className?: string,
    size?:string
}


const ShoppingBag = (props: Icon) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={props.size||"24"} height={props.size||"24"}  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
);

const Truck = (props: Icon) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={props.size||"24"} height={props.size||"24"}  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 13 23 18 16 18 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
);

const Gift = (props: Icon) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={props.size||"24"} height={props.size||"24"}  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
        <path d="M22 10.5V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14 10 12"></polyline>
    </svg>
);

const Award = (props: Icon) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={props.size||"24"} height={props.size||"24"}  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
    </svg>
);

const ShoppingCart = (props: Icon) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={props.size||"24"} height={props.size||"24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
);

const Heart = (props: Icon) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={props.size||"24"} height={props.size||"24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
);

const Search = (props: Icon) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={props.size||"24"} height={props.size||"24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
);

const ChevronRight = (props: Icon) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={props.size||"24"} height={props.size||"24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m9 18 6-6-6-6" /></svg>
);

const ChevronLeft = (props: Icon) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={props.size||"24"} height={props.size||"24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m15 18-6-6 6-6" /></svg>
);

const Star = (props: Icon) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={props.size||"24"} height={props.size||"24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
);

const ChevronDown = (props: Icon) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={props.size||"24"} height={props.size||"24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m6 9 6 6 6-6" /></svg>
);

const List = (props: Icon) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={props.size||"24"} height={props.size||"24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><line x1="8" x2="21" y1="6" y2="6" /><line x1="8" x2="21" y1="12" y2="12" /><line x1="8" x2="21" y1="18" y2="18" /><line x1="3" x2="3.01" y1="6" y2="6" /><line x1="3" x2="3.01" y1="12" y2="12" /><line x1="3" x2="3.01" y1="18" y2="18" /></svg>
);

const CheckIcon = (props: Icon) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width={props.size||"24"} height={props.size||"24"} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500">
    <path fillRule="evenodd" d="M19.916 3.657a.75.75 0 01.107 1.05l-6.845 9.878a.75.75 0 01-1.049.107l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 6.292-9.103a.75.75 0 011.05-.107z" clipRule="evenodd" />
  </svg>
);
const DeleteIcon = (props: Icon) => (

    <svg  {...props} width={props.size || "24"} height={props.size || "24"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        fill="currentColor">
        <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z">
        </path>
    </svg>
);

const EditIcon = (props: Icon) => (

    <svg {...props} width={props.size || "24"} height={props.size || "24"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.7574 2.99678L14.7574 4.99678H5V18.9968H19V9.23943L21 7.23943V19.9968C21 20.5491 20.5523 20.9968 20 20.9968H4C3.44772 20.9968 3 20.5491 3 19.9968V3.99678C3 3.4445 3.44772 2.99678 4 2.99678H16.7574ZM20.4853 2.09729L21.8995 3.5115L12.7071 12.7039L11.2954 12.7064L11.2929 11.2897L20.4853 2.09729Z">
        </path>
    </svg>
);

const UserGroupIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.75c-.328.115-.668.225-1.008.337A12.355 12.355 0 0112 21.75c-2.83 0-5.45-1.015-7.462-2.673a3.444 3.444 0 01-1.462-2.733v-2.31c0-.77.347-1.493.957-1.983L12 9.75m-4.5 7.5h.008v.008h-.008v-.008zm-2.25-6.69a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75l-2.25-2.25m4.5 0l-2.25 2.25M12 9.75h6.75a.75.75 0 01.75.75v3a.75.75 0 01-.75.75H12" />
  </svg>
);

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75c0 .414.336.75.75.75h2.25a.75.75 0 00.75-.75v-2.25a.75.75 0 00-.75-.75H9a.75.75 0 00-.75.75v2.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75c0 .414.336.75.75.75h2.25a.75.75 0 00.75-.75v-2.25a.75.75 0 00-.75-.75H17.25a.75.75 0 00-.75.75v2.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5a1.5 1.5 0 01-1.5-1.5V6a1.5 1.5 0 011.5-1.5h12A1.5 1.5 0 0121 6v6a1.5 1.5 0 01-1.5 1.5H18" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21h.01M12 21a.75.75 0 00.75-.75V15" />
  </svg>
);

const CategoryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v.75c0 .414.336.75.75.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5a.75.75 0 00.75-.75v-.75a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v.75c0 .414.336.75.75.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 17.25h16.5a.75.75 0 00.75-.75v-.75a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v.75c0 .414.336.75.75.75z" />
  </svg>
);

const ProductIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 006.18-15.65M12 3a9 9 0 00-6.18 15.65m6.18-15.65l-2.25 2.25m2.25-2.25l2.25 2.25m-2.25-2.25V9a.75.75 0 00.75.75h3a.75.75 0 00.75-.75V3m-4.5 9.75h.01M12 18.75h.01" />
  </svg>
);

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.197 5.197a7.5 7.5 0 0010.606 10.606z" />
    </svg>
);

const AddIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 -ml-1 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);


const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5" />
    </svg>
);

const HelpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.144 1.006 1.144 2.475 0 3.481l-1.554 1.554a2.25 2.25 0 01-3.182 0l-1.554-1.554m-2.25 2.25h.008v.008h-.008zM12 18.75h.008v.008H12z" />
  </svg>
);

export {DeleteIcon,EditIcon, Award, Gift, Truck, ShoppingBag, ShoppingCart, Heart, Search, ChevronRight, 
    ChevronLeft, Star, ChevronDown, List,CheckIcon,CategoryIcon,ProductIcon,TruckIcon,UserGroupIcon,
    SearchIcon,AddIcon,CalendarIcon,HelpIcon}