import React from 'react';
import CountUp from 'react-countup';
import { FaBuilding, FaUsers, FaChartLine, FaLightbulb } from 'react-icons/fa';

const SnapshotSection = () => {
  const stats = [
    { number: 2, suffix: '+', label: 'Businesses', icon: <FaBuilding /> },
    { number: 100, suffix: '+', label: 'Employees', icon: <FaUsers /> },
    { number: 2, suffix: '', label: 'Core Sectors', icon: <FaChartLine /> },
    { label: 'Future Focused', icon: <FaLightbulb /> }, // Replaced "Founded"
  ];

  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-text-primary font-bold">
            Our Group at a Glance
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl text-accent mb-2">
                {stat.icon}
              </div>
              <h3 className="font-heading text-4xl md:text-5xl font-bold text-text-primary">
                {stat.number ? <CountUp end={stat.number} duration={3} suffix={stat.suffix} enableScrollSpy scrollSpyOnce /> : '-'}
              </h3>
              <p className="font-body text-base text-text-secondary mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SnapshotSection;