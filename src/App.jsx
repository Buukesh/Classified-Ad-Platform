import "./App.css";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import { AppProvider } from "./context/AppContext.jsx";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <LoginPage />
        {/* <HomePage /> */}
      </div>
    </AppProvider>
  );
}

export default App;
