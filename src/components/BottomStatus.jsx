import React from 'react'
import { useTheme } from '../context/ThemeContext'

const BottomStatus = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  console.log("isDarkModeisDarkModeisDarkModeisDarkModeisDarkMode",isDarkMode);

  return (
    // <div className="bg-[#1a1a1a] text-xs text-gray-400 px-4 py-2 border-t border-gray-700">
    <div className={`text-xs text-gray-400 px-4 py-2 border-t border-gray-700 ${isDarkMode ? 'bg-[#1f1f1f] text-white' : 'bg-white text-black'}`}>
        Equity: <span className="text-white">500.00 USD</span> | Free Margin: 500.00 USD |
        Balance: 500.00 USD | Margin: 0.00 USD | Margin Level: -
    </div>
  )
}

export default BottomStatus