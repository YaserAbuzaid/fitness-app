"use client"
import { useState } from "react";

export default function PushUps() {
  let [reps, setReps] = useState(0);
  let [shake, setShake] = useState(false);

  const decrement = () => {
    if (reps === 0) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      alert("bruh NOW U WANNA OWE ME REPS DUDE");
      return;
    }
    setReps(prev => prev - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8 bg-gray-900 text-white rounded-lg shadow-lg w-[350px] mx-auto mt-10">
      <h2 className="text-2xl font-bold text-green-400">Push-Up Counter</h2>
      
      <p className={`text-4xl font-extrabold ${shake ? "animate-shake" : "animate-fadeIn"}`}>
        {reps}
      </p>

      <div className="grid grid-cols-2 gap-4 w-full">
        <button 
          onClick={() => setReps(reps + 1)} 
          className="px-4 py-3 bg-blue-500 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-transform rounded-md"
        >
          Add Rep
        </button>

        <button 
          onClick={decrement} 
          className="px-4 py-3 bg-red-500 hover:bg-red-700 active:scale-95 rounded-md transition-transform"
        >
          Remove Rep
        </button>
      </div>

      <button 
        onClick={() => setReps(0)} 
        className="px-4 py-3 bg-gray-600 hover:bg-gray-800 rounded-md transition-all hover:scale-105 active:scale-95 w-full"
      >
        Reset
      </button>

      <button className="px-4 py-3 bg-green-500 hover:bg-green-700 rounded-md transition-all hover:scale-105 active:scale-95 w-full">
        Start Timer
      </button>
    </div>
  );
}





// //**
// // 
// // 


// // 
// //  
// // */

// /**
//  * "use client"
// import { useState, useEffect } from "react";

// export default function WorkoutTracker() {
//   let [reps, setReps] = useState(0);
//   let [shake, setShake] = useState(false);

//   const decrement = () => {
//     if (reps === 0) {
//       setShake(true);
//       setTimeout(() => setShake(false), 500);
//       alert("bruh NOW U WANNA OWE ME REPS DUDE");
//       return;
//     }
//     setReps(prev => prev - 1);
//   };

//   // Timer states
//   const [seconds, setSeconds] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [running, setRunning] = useState(false);

//   useEffect(() => {
//     if (!running) return; // Stop if timer is not running

//     const interval = setInterval(() => {
//       setSeconds(prev => {
//         if (prev === 59) {
//           setMinutes(min => min + 1);
//           return 0; // Reset seconds when they hit 59
//         }
//         return prev + 1;
//       });
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup interval when stopped
//   }, [running]);

//   return (
//     <div className="flex flex-col items-center justify-center gap-6 p-8 bg-gray-900 text-white rounded-lg shadow-lg w-[400px] mx-auto mt-10">
//       <h2 className="text-2xl font-bold text-green-400">Workout Tracker</h2>

//       {/* Push-Up Counter */}
//       <div className="text-center">
//         <h3 className="text-xl font-semibold text-yellow-300">Push-Up Counter</h3>
//         <p className={`text-4xl font-extrabold ${shake ? "animate-shake" : "animate-fadeIn"}`}>
//           {reps}
//         </p>

//         <div className="grid grid-cols-2 gap-4 w-full">
//           <button 
//             onClick={() => setReps(reps + 1)} 
//             className="px-4 py-3 bg-blue-500 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-transform rounded-md"
//           >
//             Add Rep
//           </button>

//           <button 
//             onClick={decrement} 
//             className="px-4 py-3 bg-red-500 hover:bg-red-700 active:scale-95 rounded-md transition-transform"
//           >
//             Remove Rep
//           </button>
//         </div>

//         <button 
//           onClick={() => setReps(0)} 
//           className="px-4 py-3 bg-gray-600 hover:bg-gray-800 rounded-md transition-all hover:scale-105 active:scale-95 w-full"
//         >
//           Reset Reps
//         </button>
//       </div>

//       {/* Timer */}
//       <div className="text-center mt-6">
//         <h3 className="text-xl font-semibold text-yellow-300">Timer</h3>
//         <p className="text-4xl font-extrabold">
//           {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
//         </p>

//         <div className="flex gap-4 w-full justify-center">
//           <button 
//             onClick={() => setRunning(true)} 
//             className="px-4 py-3 bg-green-500 hover:bg-green-700 hover:scale-105 active:scale-95 transition-transform rounded-md"
//           >
//             Start Timer
//           </button>

//           <button 
//             onClick={() => setRunning(false)} 
//             className="px-4 py-3 bg-red-500 hover:bg-red-700 rounded-md transition-transform"
//           >
//             Stop Timer
//           </button>
//         </div>

//         <button 
//           onClick={() => { setSeconds(0); setMinutes(0); setRunning(false); }} 
//           className="px-4 py-3 bg-gray-600 hover:bg-gray-800 rounded-md transition-all hover:scale-105 active:scale-95 w-full"
//         >
//           Reset Timer
//         </button>
//       </div>
//     </div>
//   );
// }

//  */