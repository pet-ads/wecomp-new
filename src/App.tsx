// Component
import Home from "./pages/Home";

// Context
import SectionReferences from "./context/SectionReferences/index.tsx";

function App() {
  return (
    <SectionReferences>
      <Home />
    </SectionReferences>
  );
}

export default App;
