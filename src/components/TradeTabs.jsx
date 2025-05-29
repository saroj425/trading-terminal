import React from 'react'
import { useTheme } from '../context/ThemeContext'

const TradeTabs = () => {
  const {isDarkMode} = useTheme();
  const [activeTab, setActiveTab] = React.useState('open');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  console.log("activeTabactiveTabactiveTabactiveTab", activeTab);
  return (
    // <div className="bg-[#1d1d1d] mt-4 rounded">
    <div className={`mt-4 rounded ${isDarkMode ? 'bg-[#1f1f1f] text-white border border-gray-700' : 'bg-white text-black border border-gray-300'}`}>
        <div className="flex border-b border-gray-700">
          {
            ["open", "pending", "closed"].map((tab) => (
              <button 
                key={tab} 
                className={`flex-1 p-2 ${activeTab === tab ? 'border-b-2 border-yellow-500' : ''}`} 
                onClick={() => handleTabClick(tab)}
              >
                {tab.toUpperCase()} (0)
              </button>
            ))
          }
        
        </div>
          {activeTab ==='open' && (
            <div className="text-center py-10 text-gray-400">No Open positions</div>
          )}
          {activeTab ==='pending' && (
            <div className="text-center py-10 text-gray-400">No Pending positions</div>
          )}
          {activeTab ==='closed' && (
            <div className="text-center py-10 text-gray-400">No closed positions</div>
          )}
    </div>
  )
}

export default TradeTabs