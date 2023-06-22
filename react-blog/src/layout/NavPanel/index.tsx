import { Box, Button, Drawer } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { restoreUser } from "../../store/actions/user";
import { Routes } from "../../constants/Routes";

export const NavPanel = () => {
  const user = useSelector((store: any) => store.user);

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <MenuIcon
          sx={{
            color: "#ffffff",
          }}
        />
      </Button>
      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box
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
                variant="contained"
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
                  <Button
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
