import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Container } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN, isAdmin } from "../../helpers/consts";
import { Hidden, Menu, MenuItem } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import AccountCircle from "@mui/icons-material/AccountCircle";
const drawerWidth = 240;
const navItem = [
  <DriveFileRenameOutlineIcon sx={{ marginLeft: "100%" }} />,
  "Отзывы",
];
const navItems = [
  <FavoriteBorderIcon sx={{ marginLeft: "100%" }} />,
  "Избранное",
];

function Navbar(props) {
  const { window } = props;
  const { user, checkAuth, logout } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  const buttonStyle = {
    color: "black  ",
    display: "block",
    textTransform: "capitalize",
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {isAdmin() ? (
          <Button
            sx={{ color: "black", fontWeight: "bold" }}
            hidden="false"
            onClick={() => navigate("/admin")}
          >
            {" "}
            <AdminPanelSettingsOutlinedIcon />
            Admin
          </Button>
        ) : (
          <></>
        )}
        {user ? (
          <Box sx={{ width: "15%", marginLeft: "15%" }}>
            <Typography sx={{ alignSelf: "center", color: "black" }}>
              {user}
            </Typography>
            <Button sx={buttonStyle} onClick={logout}>
              Logout
            </Button>

            <Button
              className="button"
              sx={buttonStyle}
              onClick={() => navigate("/admin")}
            >
              Admin
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: "flex" }}>
            <Button sx={buttonStyle} onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button sx={buttonStyle} onClick={() => navigate("/register")}>
              Register
            </Button>
          </Box>
        )}

        {/* {user ? <Box>{user.email}</Box> : <Box sx={{color:"black",}}>Автор</Box>} */}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        {navItem.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                onClick={() => navigate("/reviews")}
                primary={item}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
              <img className="icon" src="/icons/LOGO.png" alt="" />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <div className="birie">
                <img
                  onClick={() => navigate("/")}
                  className="birdie1"
                  src="/icons/LOGO.png"
                />
              </div>
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItem.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "black", fontWeight: "bold" }}
                  onClick={() => navigate("/reviews")}
                >
                  {item}
                </Button>
              ))}
              {navItems.map((item) => (
                <Button
                  onClick={() => navigate("/favorites")}
                  key={item}
                  sx={{ color: "black", fontWeight: "bold" }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <IconButton
              className="iconbutton"
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle className="iconbutton" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                {isAdmin() ? (
                  <Button
                    className="button"
                    sx={{ color: "black", fontWeight: "bold" }}
                    hidden="false"
                    onClick={() => navigate("/admin")}
                  >
                    {" "}
                    <AdminPanelSettingsOutlinedIcon />
                    Admin
                  </Button>
                ) : (
                  <></>
                )}
              </MenuItem>

              {user ? (
                <Box className="logout2" sx={{ display: "flex" }}>
                  <MenuItem onClick={handleClose}>
                    <Typography
                      className="button"
                      sx={{ alignSelf: "center", color: "black" }}
                    >
                      {user}
                    </Typography>
                    <Button
                      className="button2"
                      sx={buttonStyle}
                      onClick={logout}
                    >
                      Logout
                    </Button>
                  </MenuItem>
                </Box>
              ) : (
                <Box sx={{ display: "flex" }}>
                  <MenuItem onClick={handleClose}>
                    <Button
                      sx={buttonStyle}
                      className="button"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </Button>
                    <Button
                      sx={buttonStyle}
                      className="button"
                      onClick={() => navigate("/register")}
                    >
                      Register
                    </Button>
                  </MenuItem>
                </Box>
              )}
            </Menu>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </Container>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
