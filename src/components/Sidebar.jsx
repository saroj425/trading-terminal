import React from 'react'
import logo from '../images/lono_new.png'
import { useTheme } from '../context/ThemeContext';
import { FaBars } from 'react-icons/fa';

const Sidebar = ({toggleExtraPanel}) => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    // <div className="w-16 bg-[#1d1d1d] flex flex-col items-center p-2 space-y-4">
    <div className={`w-16 flex flex-col items-center p-2 space-y-4 ${isDarkMode ? 'bg-[#1f1f1f] text-white border-r border-gray-700' : 'bg-white text-black border-r border-gray-300'}`}>
        <button><img src={logo} className='w-25 h-25'/></button>
        <button onClick={toggleExtraPanel}><FaBars/></button>
        <button>⚙️</button>
        {/* Add icons using react-icons or similar */}
    </div>
  )
}

export default Sidebar