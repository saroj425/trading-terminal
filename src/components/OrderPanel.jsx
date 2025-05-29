import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { useTheme } from '../context/ThemeContext'

const OrderPanel = () => {
  const {isDarkMode} = useTheme();
  return (
    <div className={`mt-2 w-[320px] border border-gray-300 rounded-md p-4 space-y-4 text-sm ${isDarkMode ? 'bg-[#1f1f1f] text-white' : 'bg-white text-black border border-gray-200'}`}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="flex items-center gap-2 text-base font-medium"> <span className="text-blue-400">⬤</span> ETH </h2>
        <button className="text-gray-400 hover:text-red-500 text-lg">×</button>
      </div>

      {/* Dropdown */}
      
      <select className={`w-full px-3 py-2 rounded border border-gray-300 text-sm ${isDarkMode ? 'bg-[#1f1f1f] text-white' : 'bg-white text-black border border-gray-200'}`}>
        <option>Regular form</option>
        {/* Add more options as needed */}
      </select>

      {/* Sell/Buy Prices */}
      <div className="flex border border-gray-300 rounded overflow-hidden text-center text-sm">
        <div className="flex-1 py-3 border-r border-gray-300">
          <div className="text-red-400 font-semibold text-lg">2,563.57</div>
          <div className="text-xs text-red-500 mt-1">Sell</div>
        </div>
        <div className="w-[1px] relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-400 px-2 text-[10px] rounded border border-gray-300">
            1.80 USD
          </div>
        </div>
        <div className="flex-1 py-3">
          <div className="text-blue-400 font-semibold text-lg">2,565.37</div>
          <div className="text-xs text-blue-500 mt-1">Buy</div>
        </div>
      </div>

      {/* Percentages */}
      <div className="flex justify-between px-1 text-xs text-gray-300">
        <span className="text-red-500">34%</span>
        <span className="text-blue-500">66%</span>
      </div>

      {/* Market/Pending Buttons */}
      <div className="flex gap-2">
        <button className="flex-1  py-2 rounded border border-gray-300">Market</button>
        <button className="flex-1  py-2 rounded border border-gray-300">Pending</button>
      </div>

      {/* Volume */}
      <div>
        <label className="text-xs">Volume</label>
        <div className="flex mt-1 border border-gray-300 rounded overflow-hidden">
          <input className={`px-3 py-2 w-full text-sm outline-none ${isDarkMode ? 'bg-[#1f1f1f] text-white' : 'bg-white text-black border border-gray-200'}`} value="0.10" />
          <span className="px-2 py-2 border-l border-gray-300"> Lots </span>
          <div className="flex flex-col border-l border-gray-300">
            <button className="px-2 hover:bg-gray-300">+</button>
            <button className="px-2 hover:bg-gray-300">−</button>
          </div>
        </div>
      </div>

      {/* Take Profit */}
      <div>
        <label className="text-xs flex items-center gap-1"> Take Profit <AiOutlineInfoCircle className="text-gray-500 text-xs" /> </label>
        <div className="flex mt-1 border border-gray-300 rounded overflow-hidden">
          <input className={`px-3 py-2 w-full text-sm outline-none ${isDarkMode ? 'bg-[#1f1f1f] text-white' : 'bg-white text-black border border-gray-200'}`} placeholder="Not set" />
          <select className={`border-l border-gray-300 px-2 ${isDarkMode ? 'bg-[#1f1f1f] text-white' : 'bg-white text-black border border-gray-200'}`}>
            <option>Price</option>
          </select>
          <button className="px- hover:bg-gray-300 border-l border-gray-600">+</button>
        </div>
      </div>

      {/* Stop Loss */}
      <div>
        <label className="text-xs flex items-center gap-1"> Stop Loss <AiOutlineInfoCircle className="text-gray-300 text-xs" /> </label>
        <div className="flex mt-1 border border-gray-300 rounded overflow-hidden">
          <input className={`px-3 py-2 w-full text-sm outline-none ${isDarkMode ? 'bg-[#1f1f1f] text-white' : 'bg-white text-black border border-gray-200'}`} placeholder="Not set" />
          <select className={`border-l border-gray-300 px-2 ${isDarkMode ? 'bg-[#1f1f1f] text-white' : 'bg-white text-black border border-gray-200'}`}>
            <option>Price</option>
          </select>
          <button className="px-3  hover:bg-gray-300 border-l border-gray-600">+</button>
        </div>
      </div>
    </div>
  )
}

export default OrderPanel