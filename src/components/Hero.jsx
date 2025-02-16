import { Box, Typography, Button, Container } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "60vh",
        backgroundImage: "url('https://source.unsplash.com/random/1600x900')",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="h3" fontWeight="bold">
          Welcome to Collaborative Articles
        </Typography>
        <Typography variant="h6" mt={2}>
          Read, Contribute, and Discuss AI-Generated Articles!
        </Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 3 }}>
          Explore Articles
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
