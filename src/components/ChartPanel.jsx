import React, { useEffect } from 'react'
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const ChartPanel = () => {

  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.title = "Chartscreen";
    // Clear existing widget and script
    const container = document.getElementById('tv_chart_container');
    if (container) container.innerHTML = "";
    const existingScript = document.querySelector('script[src="https://s3.tradingview.com/tv.js"]');
    if (existingScript) existingScript.remove();
    // Create new TradingView widget script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          container_id: 'tv_chart_container',
          width: '100%',
          height: '100%',
          symbol: "AAPL",
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: isDarkMode ? 'dark' : 'light', // ✅ Light or Dark
          style: '1',
          locale: 'en',
          toolbar_bg: isDarkMode ? '#1f1f1f' : '#f1f3f6',
          enable_publishing: false,
          allow_symbol_change: true,
          hide_side_toolbar: false,
          withdateranges: true,
          details: true,
          hotlist: true,
          calendar: true,
          studies: ['MACD@tv-basicstudies'],
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      const container = document.getElementById('tv_chart_container');
      if (container) container.innerHTML = "";
    };
  }, [isDarkMode]); // 🔁 Rebuild on theme change
    const navigate = useNavigate();
    
    

  return (
    <div className={`h-[60%] rounded relative p-1 ${isDarkMode ? 'bg-[#1f1f1f] text-white border border-gray-300' : 'bg-white text-black border border-gray-300'}`}>    
      <div className="text-sm text-blue-300 mb-4">       
        <div id="tv_chart_container" className="mb-4"></div>
        <div id="tv_chat_container" className="mt-4"></div>
      </div>      
    </div>
  )
}

export default ChartPanel