import React, { useState } from 'react';
import { CiLight } from 'react-icons/ci';
import { FaPlus, FaRegUserCircle, FaStar } from 'react-icons/fa';
import { IoMdAlarm } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdDarkMode } from 'react-icons/md';
import { PiDotsNineBold } from 'react-icons/pi';
import { useTheme } from '../context/ThemeContext'; // adjust path if needed

const instruments = [
  { id:1,symbol: "BTC", desc: "Bitcoin vs US Dollar", icon: "🟠" },
  { id:2,symbol: "XAU/USD", desc: "Gold vs US Dollar", icon: "🪙" },
  { id:3,symbol: "AAPL", desc: "Apple Inc.", icon: "🍎" },
  { id:4,symbol: "EUR/USD", desc: "Euro vs US Dollar", icon: "🇪🇺" },
  { id:5,symbol: "GBP/USD", desc: "Great Britain Pound vs US Dollar", icon: "🇬🇧" },
  { id:6,symbol: "USD/JPY", desc: "US Dollar vs Japanese Yen", icon: "🇺🇸" },
  { id:7,symbol: "USTEC", desc: "US Tech 100 Index", icon: "📈" },
  { id:8,symbol: "USOIL", desc: "Crude Oil", icon: "🛢️" },
];

const TopTabs = () => {
  const [opendropdown, setOpenDropdown] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeTab,setActivetab] = useState(0);

  return (
    <div className={`flex items-center justify-between space-x-4 px-4 py-2 ${isDarkMode ? 'bg-[#1f1f1f] text-white border-b border-gray-700' : 'bg-white text-black border-b border-gray-300'}`}>
      <div className='flex gap-4'>
        {/* <button className="text-yellow-400">BTC</button> */}
        {
          instruments?.slice(0,5).map((items,index)=>(
            <button key={index} onClick={(e)=>setActivetab(index)}  className={`px-3 py-1 ${ activeTab === index ? isDarkMode ? 'border-b-2 border-white' : 'border-b-2 border-black' : 'border-b-0' }`}>{items?.symbol}</button>
          ))
        }
        {/* <button>ETH</button>
        <button>BTC/XAU</button>
        <button>BTC/JPY</button> */}
        <button onClick={() => setOpenDropdown(!opendropdown)}><FaPlus /></button>
      </div>
      <div className="flex gap-4 justify-between items-center ml-auto">
        <h2 className='text-[16px] uppercase'>Demo | $500.00 USD</h2>
        <IoMdAlarm className='text-2xl' />
        <IoSettingsOutline className='text-2xl' />
        <FaRegUserCircle className='text-2xl' />
        <PiDotsNineBold className='text-2xl' />

        <button onClick={toggleTheme}>
          {isDarkMode ? <CiLight className='text-white text-2xl' /> : <MdDarkMode className='text-black text-2xl' />}
        </button>
        {/* <button className={`uppercase px-4 py-1 rounded ${isDarkMode ? 'bg-[#1f1f1f] text-white border-b border-gray-700' : 'bg-white text-black border-b border-gray-300'}`}>Deposite</button> */}
        <button className={`uppercase px-4 py-1 rounded transition-colors duration-200 ${ isDarkMode ? 'bg-white text-black border-b border-gray-700' : 'bg-[#1f1f1f] text-white border-b border-gray-300' }`} > Deposit </button>
      </div>

      {opendropdown && (
        // <div className="absolute left-4 top-14 w-[400px] bg-[#121212] text-white border border-gray-700 rounded shadow-lg z-50">
          <div className={`absolute left-4 top-14 w-[400px] rounded shadow-lg z-50 ${isDarkMode ? 'bg-[#1f1f1f] text-white border border-gray-700' : 'bg-white text-black border border-gray-300'}`}>
          
          <div className="p-2">
            <input type="text" placeholder="Search" className="w-full px-3 py-2 rounded text-sm border border-gray-300 focus:outline-none" />
          </div>
          <div className="px-3 py-1 text-sm border-b border-gray-300">Favorites</div>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-gray-300 text-gray-400">
                <th className="px-4 py-2">Symbol</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-2 py-2 text-right"></th>
              </tr>
            </thead>
            <tbody>
              {instruments.map((item, idx) => (
                <tr key={idx} className="hover:bg-[#2c2c2c]">
                  <td className="px-4 py-2 flex items-center gap-2">{item.icon} {item.symbol}</td>
                  <td className="px-4 py-2">{item.desc}</td>
                  <td className="px-4 py-2 text-right text-yellow-400"><FaStar /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TopTabs;
