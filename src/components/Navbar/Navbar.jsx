import * as React from "react";
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
import { ADMIN } from "../../helpers/consts";
const drawerWidth = 240;
const navItem = [
  <DriveFileRenameOutlineIcon sx={{ marginLeft: "100%" }} />,
  "Отзывы",
 
];
const navItems = [ <FavoriteBorderIcon sx={{ marginLeft: "100%" }} />,
 "Избранная",]

function Navbar(props) {
  const { window } = props;
  const { user} = useAuth();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Button
          sx={{
            color: "white",
            backgroundColor: "black",
            borderRadius: "30%",
            fontWeight: "bold",
            height: "100%",
          }}
        >
          {" "}
          Войти
        </Button>
        
        {user ? <Box>{user.email}</Box> : <Box sx={{color:"black",}}>Автор</Box>}
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
              <ListItemText   onClick={() => navigate("/reviews")} primary={item} />
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
              <img
                className="icon"
                src="/icons/LOGO.png"
                alt=""
              />
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

                <Button key={item} sx={{ color: "black", fontWeight: "bold" }}   onClick={() => navigate("/reviews")}>
                  {item}
                </Button>
              ))}
              {navItems.map((item) => (

                <Button key={item} sx={{ color: "black", fontWeight: "bold" }}   >
                  {item}
                </Button>
              ))}
            </Box>
            <Button
              className="button"
              sx={{
                color: "white",
                backgroundColor: "black",
                borderRadius: "30%",
                fontWeight: "bold",
                height: "100%",
              }}
              onClick={() => navigate("/register")}
            >
              Войти
            </Button>
            {user.email == ADMIN ? ( 
            <Link 
              style={{ 
                color: "white", 
                margin: "0 10px", 
              
              }} 
              to="/admin" 
            > 
              Admin 
            </Link> 
          ) : null} 
            {user ? <Box>{user.email}</Box> : <Box sx={{color:"black",}}>Авторизация</Box>}
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
