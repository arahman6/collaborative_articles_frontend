import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}${id}`)
      .then(response => setArticle(response.data))
      .catch(error => console.error("Error fetching article:", error));
  }, [id]);

  if (!article) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}

export default Article;
