import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", p: 3, mt: 5, bgcolor: "primary.main", color: "white" }}>
      <Typography variant="body2">© {new Date().getFullYear()} Collaborative Articles. All Rights Reserved.</Typography>
    </Box>
  );
};

export default Footer;
