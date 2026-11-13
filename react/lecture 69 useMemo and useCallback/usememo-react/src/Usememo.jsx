import React from 'react'
import { useState, useMemo } from "react";


function Usememo() {
      const [count, setCount] = useState(0);

    const sum = useMemo(() => {

        console.log("Calculation running...");

        let total = 0;

        for (let i = 1; i <= 10000000; i++) {
            total += i;
        }

        return total;

    }, []);
  return (

    <div>
          <h2>Sum: {sum}</h2>

            <button onClick={() => setCount(count + 1)}>
                Click {count}
            </button>
        
    </div>
  )
}

export default Usememo