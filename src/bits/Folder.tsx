import { useState } from 'react';

const darkenColor = (hex, percent) => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) color = color.split('').map(c => c + c).join('');
  const num = parseInt(color, 16);
  let r = Math.max(0, Math.min(255, Math.floor(((num >> 16) & 0xff) * (1 - percent))));
  let g = Math.max(0, Math.min(255, Math.floor(((num >> 8) & 0xff) * (1 - percent))));
  let b = Math.max(0, Math.min(255, Math.floor((num & 0xff) * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder = ({ color = '#FFD700', size = 1, items = [], className = '' }) => {
  const maxItems = 4;
  const papers = items.slice(0, maxItems);
  const [open, setOpen] = useState(false);
  const folderBackColor = darkenColor(color, 0.15);

  const getOpenTransform = (index) => {
    // Adjusted X and Y to handle the extra width of squares
    if (index === 0) return 'translate(-170%, -80%) rotate(-15deg)';
    if (index === 1) return 'translate(-90%, -95%) rotate(-5deg)';
    if (index === 2) return 'translate(10%, -95%) rotate(5deg)';
    if (index === 3) return 'translate(90%, -80%) rotate(15deg)';
    return '';
  };

  return (
    <div style={{ transform: `scale(${size})` }} className={className}>
      <div className="group relative cursor-pointer select-none" onClick={() => setOpen(!open)}>
        
        {/* FOLDER BACK */}
        <div
          className="relative w-[100px] h-[80px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]"
          style={{ 
            backgroundColor: folderBackColor,
            clipPath: open ? 'none' : 'inset(-100% -100% 0% -100%)' // Fixes noclip
          }}
        >
          {/* TAB */}
          <span
            className="absolute bottom-[99%] left-0 w-[35px] h-[12px] rounded-t-[6px]"
            style={{ backgroundColor: folderBackColor }}
          ></span>

          {/* CHARACTER CARDS (SQUARES) */}
          {papers.map((item, i) => (
            <div
              key={i}
              className={`absolute left-1/2 transition-all duration-500 shadow-2xl rounded-[4px] overflow-hidden 
                ${!open ? 'group-hover:-translate-y-[25%]' : ''}`} // Hover Peek
              style={{
                width: '90px', // Full Square width
                height: '90px', // Full Square height
                bottom: '2%',
                // Z-index keeps Kita (index 0) on top during hover
                zIndex: open ? 40 : (10 + (maxItems - i)),
                transform: open ? getOpenTransform(i) : 'translate(-50%, 20%) scale(0.9)',
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              {item}
            </div>
          ))}

          {/* FRONT FLAPS */}
          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-all duration-500 ease-in-out 
              ${!open ? 'group-hover:skew-x-[15deg] group-hover:scale-y-[0.8]' : ''}`}
            style={{
              backgroundColor: color,
              borderRadius: '5px 10px 10px 10px',
              transform: open ? 'skewX(20deg) scaleY(0.6)' : undefined,
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          ></div>
          
          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-all duration-500 ease-in-out 
              ${!open ? 'group-hover:skew-x-[-15deg] group-hover:scale-y-[0.8]' : ''}`}
            style={{
              backgroundColor: color,
              borderRadius: '5px 10px 10px 10px',
              transform: open ? 'skewX(-20deg) scaleY(0.6)' : undefined,
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
