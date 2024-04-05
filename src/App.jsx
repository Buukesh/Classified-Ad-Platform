import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AppProvider } from "./context/AppContext.jsx";
import AdView from "./pages/AdView.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import MessagesPage from "./pages/MessagesPage.jsx";
import NewPostPage from "./pages/NewPostPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import MapPage from "./pages/MapPage.jsx"; // Make sure to create this component


const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "/new", element: <NewPostPage /> },
    { path: "/adview/:id", element: <AdView /> },
    { path: "/messages", element: <MessagesPage /> },
    { path: "/map", element: <MapPage /> },
    
]);

function App() {
    return (
        <AppProvider>
            <div className="App">
                <RouterProvider router={router} />
            </div>
        </AppProvider>
    );
}

export default App;
