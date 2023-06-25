import { Box, Button, Drawer } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { restoreUser } from "../store/reducers/user";
import { Link } from "react-router-dom";
import { Routes } from "../constants/Routes";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const NavPanel = () => {
  const user = useSelector((store: any) => store.user);

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const theme = useSelector((state:any) => state.theme.theme);


  return (
    <>
      <Button onClick={() => setIsOpen(true)} className={theme}>
        <MenuIcon className={theme}/>
      </Button>
      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)} >
        <Box className={theme}
          sx={{
            width: 250,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          role="presentation"
        >
          <div></div>
          <div>
            <ThemeSwitcher />
            {user?.id ? (
              <Button
                className={theme}
                type="submit"
                onClick={() => dispatch(restoreUser())}
                sx={{
                  width: "100%",
                  borderRadius: 0,
                  padding: "16px 0",
                  background: "#dadada",
                  color: "#000000",
                }}
              >
                Log out
              </Button>
            ) : (
              <>
                <Link to={Routes.Register}>
                  <Button className={theme}
                    variant="outlined"
                    sx={{
                      width: "100%",
                      borderRadius: 0,
                    }}
                  >
                    Register
                  </Button>
                </Link>
                <Link to={Routes.Login}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100%",
                      borderRadius: 0,
                    }}
                  >
                    Login
                  </Button>
                </Link>
              </>
            )}
          </div>
        </Box>
      </Drawer>
    </>
  );
};
