import IntroScreen from "./components/IntroScreen";

export default function Home() {
  return (
    <div>
      <IntroScreen />
      <div className="h-screen bg-oxoBackground text-oxoForeground">
        <h1 className="text-center text-4xl mt-10">My projects</h1>
      </div>
    </div>
  );
}
