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
import ReactMarkdown from "react-markdown";
import cardData from "../api/articles";

// Styled components for Material UI
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

// Markdown styling for better readability
const markdownStyle = {  
    textAlign: "justify",
    lineHeight: 1.8, 
    wordBreak: "break-word",
  "& h1": { fontSize: "1.8rem", fontWeight: "bold", marginBottom: "10px" },
  "& h2": { fontSize: "1.6rem", fontWeight: "bold", marginBottom: "8px" },
  "& h3": { fontSize: "1.4rem", fontWeight: "bold", marginBottom: "6px" },
  "& p": { fontSize: "1rem", marginBottom: "8px", lineHeight: "1.6" },
  "& ul": { paddingLeft: "20px" },
  "& li": { marginBottom: "4px" },
  "& strong": { fontWeight: "bold" },
  "& em": { fontStyle: "italic" },
  "& blockquote": {
    borderLeft: "4px solid #ccc",
    paddingLeft: "10px",
    fontStyle: "italic",
    margin: "10px 0",
  },
  "& code": {
    fontFamily: "monospace",
    backgroundColor: "#f4f4f4",
    padding: "2px 6px",
    borderRadius: "4px",
  },
};

export default function DetailContent({ articlesData }) {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const articles = await cardData(); 
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

          {/* Render Title as Markdown */}
          <Box sx={markdownStyle}>
            <ReactMarkdown>{article.title}</ReactMarkdown>
          </Box>

          {/* Render Content as Markdown */}
          <Box sx={markdownStyle }>
            <ReactMarkdown>{article.description}</ReactMarkdown>
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
