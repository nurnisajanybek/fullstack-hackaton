import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
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

import "./Navbar.css";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { isAdmin } from "../../helpers/consts";

const drawerWidth = 240;
const navItems = [
  <DriveFileRenameOutlineIcon sx={{ marginLeft: "100%" }} />,
  "Отзывы",
  <FavoriteBorderIcon sx={{ marginLeft: "100%" }} />,
  "Избранная",
];

function Navbar(props) {
  const { window } = props;

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
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Container maxWidth="sm">
      <Box>
        <CssBaseline />
        <AppBar component="nav">
          {/* <Toolbar> */}
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
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
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
                className="birdie1"
                src="./components/Navbar/LOGO.png"
                alt=""
              />
            </div>
          </Typography>
          {isAdmin ? <p style={{ color: "black" }}>admin</p> : <></>}
          {/* <Toolbar/> */}
        </AppBar>
      </Box>
    </Container>
  );
}

export default Navbar;
