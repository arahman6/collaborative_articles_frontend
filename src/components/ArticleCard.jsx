import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const ArticleCard = ({ article }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="180"
        image="https://source.unsplash.com/random/400x300"
        alt="Article"
      />
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.content.substring(0, 100)}...
        </Typography>
        <Button href={`/article/${article._id}`} sx={{ mt: 1 }}>
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
