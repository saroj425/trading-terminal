import React from 'react'
import { useTheme } from '../context/ThemeContext';
import { FaStar } from 'react-icons/fa';

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

const Stockspanel = () => {
    const { isDarkMode } = useTheme();
  return (
    <div >
        <div className={`rounded shadow-lg z-50 ${isDarkMode ? 'bg-[#1f1f1f] text-white border border-gray-700' : 'bg-white text-black border border-gray-300'}`}>           
            <div className="p-2">
                <input type="text" placeholder="Search" className={`w-full px-3 py-2 rounded text-sm border border-gray-300 focus:outline-none ${isDarkMode ? 'bg-[#1f1f1f] text-white border border-gray-700' : 'bg-white text-black border border-gray-300'}`} />
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
                        <td className="px-4 py-2 text-right text-yellow-400"></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Stockspanel