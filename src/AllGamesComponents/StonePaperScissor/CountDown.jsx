import { useState, useEffect } from 'react';

const Countdown = () => {
  const [counter, setCounter] = useState(3); // Start the countdown from 3

  useEffect(() => {
    // Only start the countdown if the counter is greater than 0
    if (counter > 0) {
      const interval = setInterval(() => {
        setCounter((prev) => prev - 1); // Decrease the counter every second
      }, 1000); // Update every second (1000 milliseconds)

      // Clean up the interval when the countdown reaches 0
      return () => clearInterval(interval);
    }
  }, [counter]); // Dependency array ensures that the effect runs when the counter changes

  return (
    
      <div className="text-6xl font-bold text-indigo-600 bg-green-600 rounded-full px-8 py-3 w-fit mx-auto">
        {counter > 0 ? counter : 'Go!'}
      </div>
   
  );
};

export default Countdown;
