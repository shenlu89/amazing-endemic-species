import { useState, useEffect } from "react";

export default function NumberAnimation({ count, className }: any) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let start: number = 0;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const duration = 2000;
      const increment = Math.min(1, progress / duration);
      setNumber(Math.floor(increment * +count));
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
    return () => cancelAnimationFrame(start);
  }, []);

  return <div className={className}>{number.toLocaleString()}</div>;
}
