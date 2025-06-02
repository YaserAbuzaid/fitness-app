
"use client"
import { useState } from "react";


export default function PushUps() {

    let [reps, setReps] = useState (0)
    let [time, setTime] = useState (0)

    const decrement = () => {
  if (reps === 0) {
    alert("bruh");
    return;
  }
  setReps(prev => prev - 1);
};
  return (
    <>
    <button onClick={()=>setReps(reps+1)}>Add Rep </button><br />
    <button onClick={decrement}>remove Rep</button><br />
    <button onClick={()=>setReps(0)}>Reset</button><br />


    <button> Start Timer</button>

    <p>PushUps: {reps}</p>
    </>
  );
}
