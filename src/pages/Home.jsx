import { useEffect, useState } from "react";
import { Container, Grid, CircularProgress } from "@mui/material";
import ArticleCard from "../components/ArticleCard";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_URL}/articles`)
      .then(response => {
        setArticles(response.data);
        setLoading(false);
      })
      .catch(error => console.error("Error fetching articles:", error));
  }, []);

  return (
    <Container>
      {loading ? (
        <CircularProgress sx={{ display: "block", margin: "auto", mt: 5 }} />
      ) : (
        <Grid container spacing={3} mt={3}>
          {articles.map(article => (
            <Grid item xs={12} sm={6} md={4} key={article._id}>
              <ArticleCard article={article} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Home;
