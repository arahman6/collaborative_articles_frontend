import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Collaborative Articles
        </Typography>
        <Button color="inherit" href="/">Home</Button>
        <Button color="inherit" href="/login">Login</Button>
        <Button color="inherit" href="/signup">Signup</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
