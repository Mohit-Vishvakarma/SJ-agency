import React from 'react';
import '@fontsource/playfair-display'

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex flex-col items-center">
        {/* <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-white font-playfair font-bold">
          <span className="text-xs -mt-1">S</span>
          <span className="text-xs mt-1">J</span>
        </div> */}
        <img src="/siyajewels-logo.png" alt="" className='h-10' />
        <div style={{ fontFamily: 'Playfair Display' }}
          className="text-xs text-purple-dark -ml-1 font-playfair text-center font-semibold tracking-wide mt-0">
          Siya Jewels
          <p className='font-medium'>Infotech</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
