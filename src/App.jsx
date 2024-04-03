import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AppProvider } from "./context/AppContext.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import NewPostPage from "./pages/NewPostPage.jsx";
import MessagesPage from "./pages/MessagesPage.jsx";
import AdView from "./pages/AdView.jsx";

const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "/new", element: <NewPostPage /> },
    { path: "/adview", element: <AdView /> },
    { path: "/messages", element: <MessagesPage /> },
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
