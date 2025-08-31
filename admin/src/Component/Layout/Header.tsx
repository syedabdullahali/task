import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    // Mock user data for the header
    const userData = {
        name: 'Project Name #1',
        avatar: 'https://placehold.co/40x40/E5E7EB/4B5563?text=UN',
        online: true,
    };
    const [isUserDropDownActive, setDropDownStatus] = useState(false)
   const navigate =  useNavigate()

    return (
        <header className="z-50 flex items-center justify-between p-4 md:p-6 bg-white shadow-sm rounded-b-xl border-b border-gray-200 sticky top-0">
            <div className="flex items-center gap-2 sm:gap-4">
                <div className="bg-[#1e3a8a] text-white p-2 rounded-lg font-extrabold text-xl shadow-lg">N</div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">NILED</h1>
                <span className="hidden md:inline text-gray-500 font-medium text-sm">Dashboard</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 text-gray-500">
                <span className="text-xs sm:text-sm font-medium hidden md:inline text-gray-700">Project Name #1</span>
                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="hidden md:block w-32 md:w-96 pl-8 pr-2 py-2 text-sm rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-2 md:block hidden text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <div className="relative cursor-pointer" onClick={() => { setDropDownStatus(prev => !prev) }}>
                    <img className="h-10 w-10 rounded-full shadow-md transition-transform duration-300 transform hover:scale-105" src={userData.avatar} alt="User Avatar" />
                    <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full ring-2 ring-white"></span>
                    <div
                        className={`
    absolute right-0 top-full z-10
    w-56 rounded border bg-white shadow-lg
    transition-all duration-300 ease-in-out
    ${ isUserDropDownActive ?  "opacity-100 scale-100":"opacity-0 scale-95 pointer-events-none"  }
  `}
                    >
                        <ul className="flex flex-col p-2 space-y-2">
                            <li>
                                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
                                    Profile
                                </button>
                            </li>
                            <li>
                                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
                                    Settings
                                </button>
                            </li>
                            <li>
                                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
                                onClick={()=>{navigate("/")}}
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header