'use client';

import { useEffect, useState } from 'react';

interface CounterProps {
  value: number;
  className?: string;
}

export default function Counter({ value, className = '' }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const step = value / (duration / 30);
    
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      setCount(Math.floor(current));
      
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return <span className={className}>{count}</span>;
}