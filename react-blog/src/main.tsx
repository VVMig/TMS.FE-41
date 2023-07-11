import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./layout";
import { Routes } from "./constants/Routes";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Verify from "./pages/Verify";
import Login from "./pages/Login";
import Post from "./pages/Post";
import AddPost from "./pages/AppPost";
import { ThemeProvider, useTheme } from "./hooks/useTheme";
import SearchPage from "./pages/SearchPage/SearchPage";

// sass installation: npm install node-sass

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: Routes.Home,
        element: <Home />,
      },
      {
        path: Routes.Register,
        element: <Register />,
      },
      {
        path: Routes.Login,
        element: <Login />,
      },
      {
        path: Routes.Verify,
        element: <Verify />,
      },
      {
        path: Routes.Post,
        element: <Post />,
      },
      {
        path: Routes.AddPost,
        element: <AddPost />,
      },
      {
        path: Routes.SearchPost,
        element: <SearchPage />,
      },
    ],
  },
]);

const Base = () => {
  const themeValues = useTheme();

  return (
    <Provider store={store}>
      <ThemeProvider value={themeValues}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};

root.render(<Base />);

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <h1>Hello world</h1>
//   </React.StrictMode>,
// )
