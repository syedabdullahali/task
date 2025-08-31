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

// Truck Icon Component
const Truck = (props: Icon) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={props.size||"24"} height={props.size||"24"}  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 13 23 18 16 18 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
);

// Gift Icon Component
const Gift = (props: Icon) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={props.size||"24"} height={props.size||"24"}  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
        <path d="M22 10.5V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14 10 12"></polyline>
    </svg>
);

// Award Icon Component
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


export { Award, Gift, Truck, ShoppingBag, ShoppingCart, Heart, Search, ChevronRight, ChevronLeft, Star, ChevronDown, List,CheckIcon}