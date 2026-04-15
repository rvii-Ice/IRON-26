import React from 'react';
import { motion } from 'motion/react';

const states = [
  { id: 1, name: 'ST-01: STRAIGHT', desc: 'Wall Following via Port D. Gyro stabilization (Yaw=0).' },
  { id: 2, name: 'ST-02: DETECTION', desc: 'Port E Distance > 50cm. Confirms Wall Opening detected.' },
  { id: 3, name: 'ST-03: EXECUTION', desc: 'Steering Port C set to MAX. Drive A/B until Gyro=90°.' },
  { id: 4, name: 'ST-04: ACQUISITION', desc: 'Scan for wall via Port D. Re-lock PID loop for ST-01.' },
];

export const LogicFlow = () => {
  return (
    <div className="flex flex-col">
      {states.map((state, index) => (
        <React.Fragment key={state.id}>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`state-node ${index === 0 ? 'active' : ''}`}
          >
            <h3>{state.name}</h3>
            <p>{state.desc}</p>
          </motion.div>
          {index < states.length - 1 && (
            <div className="connector-line" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

