import React from 'react';
import { motion } from 'motion/react';
import { RobotDiagram } from './components/RobotDiagram';
import { LogicFlow } from './components/LogicFlow';

export default function App() {
  return (
    <div className="flex flex-col h-screen w-full max-w-[1024px] mx-auto overflow-hidden bg-density-bg text-density-text border-x border-density-border">
      {/* Header */}
      <header className="h-[60px] border-bottom-2 border-density-accent px-6 flex items-center justify-between bg-density-panel border-b-2 border-density-accent">
        <h1 className="text-[18px] tracking-[2px] uppercase text-density-accent font-black">
          SFHS IRON // System Architecture
        </h1>
        <div className="flex gap-5 font-mono text-[11px]">
          <span className="status-bar-item">FIRMWARE: V2.0.4</span>
          <span className="status-bar-item">BATTERY: 82%</span>
          <span className="status-bar-item">GYRO: STABLE</span>
          <span className="status-bar-item text-density-accent">● COMMS: ACTIVE</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="grid grid-cols-[280px_1fr_280px] flex-1 p-4 gap-4 overflow-hidden">
        {/* Left Panel: Electronic Port Mapping */}
        <aside className="panel">
          <div className="panel-header">
            <span className="label-pill">SBC/SBM</span>
            <h2 className="text-[11px] uppercase tracking-wider text-density-text-dim font-bold">Electronic Port Mapping</h2>
          </div>
          <div className="content-block overflow-y-auto">
            <div className="port-item">
              <div className="port-id">A</div>
              <div className="port-desc">Large Motor (Left)<br /><span className="port-tag">Drive Axle • PWM Out</span></div>
            </div>
            <div className="port-item">
              <div className="port-id">B</div>
              <div className="port-desc">Large Motor (Right)<br /><span className="port-tag">Drive Axle • PWM Out</span></div>
            </div>
            <div className="port-item">
              <div className="port-id">C</div>
              <div className="port-desc">Medium Motor<br /><span className="port-tag">Ackermann Steering</span></div>
            </div>
            <div className="port-item">
              <div className="port-id">D</div>
              <div className="port-desc">Ultrasonic (Side)<br /><span className="port-tag">Wall Following PID</span></div>
            </div>
            <div className="port-item">
              <div className="port-id">E</div>
              <div className="port-desc">Ultrasonic (Front)<br /><span className="port-tag">Intersection Trigger</span></div>
            </div>
            <div className="port-item">
              <div className="port-id">F</div>
              <div className="port-desc">Color Sensor<br /><span className="port-tag">Start/Finish Line</span></div>
            </div>
          </div>
        </aside>

        {/* Center Panel: Physical Mapping */}
        <section className="panel">
          <div className="panel-header">
            <span className="label-pill">TOP-DOWN</span>
            <h2 className="text-[11px] uppercase tracking-wider text-density-text-dim font-bold">Physical Mapping (300mm x 200mm)</h2>
          </div>
          <div className="content-block">
            <RobotDiagram />
          </div>
        </section>

        {/* Right Panel: State Machine */}
        <aside className="panel">
          <div className="panel-header">
            <span className="label-pill">LOGIC</span>
            <h2 className="text-[11px] uppercase tracking-wider text-density-text-dim font-bold">State Machine (Turn)</h2>
          </div>
          <div className="content-block overflow-y-auto">
            <LogicFlow />
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="h-[40px] border-t border-density-border bg-density-panel flex items-center px-6 font-mono text-[10px] text-density-text-dim gap-10">
        <span>FILENAME: SFHS-IRON-System-Diagram.png</span>
        <span>ASSET: /DIAGRAMS/CONCEPT/</span>
        <span>STRATEGY: PID_WALL_FOLLOW_V4</span>
        <span>WRO 2024 READY</span>
      </footer>
    </div>
  );
}

