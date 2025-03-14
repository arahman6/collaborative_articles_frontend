import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MuiMarkdown } from 'mui-markdown';
import {
  Box,
  Typography,
  Link,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Alert
} from '@mui/material';
import { codeBlockStyles } from './styles'; // Optional custom styles

const API_URL = import.meta.env.VITE_API_URL;

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/articles/${id}`)
      .then(response => {
        setArticle(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching article:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const components = {
    h1: ({ children }) => <Typography variant="h1" gutterBottom>{children}</Typography>,
    h2: ({ children }) => <Typography variant="h2" gutterBottom>{children}</Typography>,
    h3: ({ children }) => <Typography variant="h3" gutterBottom>{children}</Typography>,
    p: ({ children }) => <Typography variant="body1" paragraph>{children}</Typography>,
    a: ({ href, children }) => <Link href={href} target="_blank" rel="noopener">{children}</Link>,
    ul: ({ children }) => <List dense>{children}</List>,
    ol: ({ children }) => <List component="ol" dense>{children}</List>,
    li: ({ children }) => (
      <ListItem>
        <ListItemText primary={children} />
      </ListItem>
    ),
    code: ({ inline, children }) => inline ? (
      <Box component="span" sx={codeBlockStyles}>
        {children}
      </Box>
    ) : (
      <Paper elevation={0} sx={{ p: 2, my: 2, bgcolor: 'background.default' }}>
        <Box component="pre" sx={codeBlockStyles}>
          <code>{children}</code>
        </Box>
      </Paper>
    ),
    hr: () => <Divider sx={{ my: 3 }} />,
    // Add more components as needed
  };

  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box>;
  if (error) return <Alert severity="error" sx={{ m: 2 }}>{error}</Alert>;
  if (!article) return null;

  return (
    <MuiMarkdown>{`# Hello markdown!`}</MuiMarkdown>
    // <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
        
    //   <Typography variant="h3" component="h1" gutterBottom>
    //     {article.title}
    //   </Typography>
    //   <ReactMarkdown
    //     remarkPlugins={[remarkGfm]}
    //     components={components}
    //   >
    //     {article.content}
    //   </ReactMarkdown>
    // </Box>
  );
}

export default Article;