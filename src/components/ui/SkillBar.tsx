'use client';

import { useInView } from 'react-intersection-observer';

interface SkillBarProps {
  name: string;
  percentage: number;
}

export default function SkillBar({ name, percentage }: SkillBarProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="skill-item">
      <div className="flex justify-between mb-2">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          ref={ref}
          className="skill-progress" 
          style={{ 
            transform: inView ? 'scaleX(1)' : 'scaleX(0)',
            width: `${percentage}%` 
          }}
        />
      </div>
    </div>
  );
}