import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import cardData from "../api/articles";

// Example: If you want to reuse the same style as MainContent:
const DetailCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  backgroundColor: theme.palette.background.paper,
  maxWidth: "800px",
  margin: "0 auto",
}));

const DetailCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
});

export default function DetailContent({ articlesData }) {
  // Capture the :id route param from react-router
  const { id } = useParams();
//   console.log('articlesData', articlesData);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);  
  useEffect(() => {
    async function fetchArticle() {
      try {
        const articles = await cardData(); // Fetch articles from API
        const foundArticle = articles.find((article) => article.id === id);
        setArticle(foundArticle);
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h5">Loading...</Typography>
      </Box>
    );
  }




  if (!article) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h5">Article not found.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      <DetailCard variant="outlined">
        <CardMedia
          component="img"
          alt={article.title}
          image={article.img}
          sx={{ aspectRatio: "16 / 9", borderBottom: "1px solid", borderColor: "divider" }}
        />
        <DetailCardContent>
          <Typography variant="caption" color="text.secondary" gutterBottom>
            {article.tags.join(", ")}
          </Typography>
          <Typography variant="h4" gutterBottom>
            {article.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {article.description}
          </Typography>

          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", mt: 3 }}>
            <AvatarGroup max={3} sx={{ mr: 2 }}>
              {article.authors.map((auth, idx) => (
                <Avatar key={idx} alt={auth.name} src={auth.avatar} />
              ))}
            </AvatarGroup>
            <Typography variant="body2" color="text.secondary">
              {article.authors.map((auth) => auth.name).join(", ")}
            </Typography>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary">
              Leave a Comment
            </Button>
          </Box>
        </DetailCardContent>
      </DetailCard>
    </Box>
  );
}