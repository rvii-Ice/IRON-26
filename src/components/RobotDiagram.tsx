import React from 'react';

export const RobotDiagram = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black/20 border-2 border-dashed border-density-border rounded-lg">
      <div className="relative w-[200px] h-[300px] border-[3px] border-density-text bg-white/5 rounded-xl">
        {/* Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-[120px] bg-density-accent rounded-lg flex flex-col items-center justify-center text-density-bg font-bold text-[10px] text-center">
          SPIKE HUB<br />INTERNAL IMU
        </div>

        {/* Motors */}
        <div className="absolute -bottom-2.5 -left-[15px] w-10 h-[70px] bg-[#3a444e] border border-density-text rounded-l" />
        <div className="absolute -bottom-2.5 -right-[15px] w-10 h-[70px] bg-[#3a444e] border border-density-text rounded-r" />
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[60px] h-[30px] bg-[#3a444e] border border-density-text" />

        {/* Sensors */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#ff4444] border border-white" />
        <div className="absolute top-[60px] -right-3 w-6 h-6 rounded-full bg-blue-500 border border-white" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#44ff44] border border-white" />

        {/* Callouts */}
        <div className="absolute -bottom-6 -left-12 font-mono text-[10px] text-density-accent whitespace-nowrap">PORT A/B: DRIVE</div>
        <div className="absolute top-4 -left-20 font-mono text-[10px] text-density-accent whitespace-nowrap">PORT C: STEER</div>
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-mono text-[10px] text-density-accent whitespace-nowrap uppercase">Port E: Ultrasonic</div>
        <div className="absolute top-[60px] -right-28 font-mono text-[10px] text-density-accent whitespace-nowrap uppercase">Port D: Side</div>
      </div>
    </div>
  );
};

