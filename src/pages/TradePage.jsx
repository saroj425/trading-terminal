import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import TopTabs from '../components/TopTabs'
import ChartPanel from '../components/ChartPanel'
import TradeTabs from '../components/TradeTabs'
import OrderPanel from '../components/OrderPanel'
import BottomStatus from '../components/BottomStatus'
import { useTheme } from '../context/ThemeContext'

import Stockspanel from '../components/Stockspanel'

const TradePage = () => {
  const { isDarkMode } = useTheme();
  const [showExtraPanel, setShowExtraPanel] = useState(false);

  const toggleExtraPanel = () => setShowExtraPanel(!showExtraPanel);

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-[#1f1f1f] text-white' : 'bg-white text-black'}`}>      
      {/* Sidebar */}
      <Sidebar toggleExtraPanel={toggleExtraPanel} showExtraPanel={showExtraPanel} />
      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopTabs />

        <div className="flex flex-1 overflow-hidden">
          {showExtraPanel && (
            <div className={`ml-2 mt-2 w-[300px] rounded relative ${isDarkMode ? 'bg-[#1f1f1f] text-white border border-gray-300' : 'bg-white text-black border border-gray-300'}`}>
              <Stockspanel />
            </div>
          )}
          {/* Chart + TradeTabs */}
          <div className="flex-1 p-2 overflow-y-auto">
            <ChartPanel />
            <TradeTabs />
          </div>
          {/* Order Panel */}
          <OrderPanel />
        </div>
        <BottomStatus />
      </div>
    </div>
  )
}

export default TradePage;
