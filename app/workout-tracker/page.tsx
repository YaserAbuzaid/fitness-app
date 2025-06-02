import PushUps from "./PushUpReps";

export default function WorkoutTracker() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-8 text-green-400">Workout Tracker</h1>
      <PushUps />
    </div>
  );
}