import { useEffect, useState } from 'react';
import './ScrollProgress.css';
import Confetti from 'react-confetti';

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;

    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (scrollPercentage > 0)
    return (
      <div className="fixed top-0 left-0 w-full h-[5px] bg-black/10 z-50">
        {/* <div className="relative h-full w-full"> */}
        <div className="fixed bottom-0 right-4 mt-[5px] text-blue-400 bg-yellow-300">
          {scrollPercentage === 100
            ? 'End of Story'
            : `${Math.floor(scrollPercentage)}%`}
        </div>
        <div
          className="progress-bar text-blue-400"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
        {/* </div> */}

        {scrollPercentage === 100 && (
          <Confetti width={window.innerWidth} height={window.innerHeight} run />
        )}
      </div>
    );
};

export default ScrollProgressBar;
