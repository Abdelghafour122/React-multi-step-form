import { useEffect } from "react";
import GlobalFormCard from "./components/GlobalFormCard";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <main className="App">
      <GlobalFormCard />
    </main>
  );
}

export default App;
