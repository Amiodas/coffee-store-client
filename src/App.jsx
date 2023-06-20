import { useLoaderData } from "react-router-dom";
import "./App.css";

function App() {
  const coffee = useLoaderData();
  console.log(coffee);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Coffee!</h1>
    </div>
  );
}

export default App;
