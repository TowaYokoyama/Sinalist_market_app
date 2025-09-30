'use client';
import React, { useEffect, useRef, memo } from 'react';
import useTradingViewWidget from '../../hooks/useTradingViewWidget';

interface TradingViewWidgetProps {
    title?:string;
    scriptUrl:string;
    height?:number;
    className?:string;
    config:Record<string, null>
};


const TradingViewWidget = ({title, scriptUrl,config,height = 600,className}: TradingViewWidgetProps) =>  {
  const containerRef = useTradingViewWidget(scriptUrl,config,height);

  

  return (
    <div className='w-full'>
        {title && <h3 className='font-semi-bold text-2xl text-gray^100 mb-5'>{title}</h3>}
    <div className="tradingview-widget-container" ref={containerRef} >
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
    </div>
  );
}

export default memo(TradingViewWidget);
