import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { NavPanel } from ".";
import { ThemeProvider } from "../../hooks/useTheme";
import { Theme } from "../../constants/Theme";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("NavPanel component", () => {
  test("Check NavPanel component toggle", async () => {
    render(
      <Provider store={store}>
        <ThemeProvider
          value={{
            theme: Theme.light,
            onChangeTheme: () => () => {},
          }}
        >
          <RouterProvider
            router={createBrowserRouter([
              {
                path: "/",
                element: <NavPanel />,
              },
            ])}
          />
        </ThemeProvider>
      </Provider>
    );

    const btnElement = screen.getByTestId("menu-btn");

    expect(btnElement).toBeInTheDocument();

    fireEvent.click(btnElement);

    const sideMenu = screen.getByTestId("side-menu");

    const backdrop = sideMenu.firstChild as ChildNode;

    expect(sideMenu).toBeInTheDocument();
    expect(backdrop).toBeInTheDocument();

    fireEvent.click(backdrop);

    await waitFor(() => {
      expect(sideMenu).not.toBeInTheDocument();
    });
  });
});
