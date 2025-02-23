// import axios from "axios";


// const API_URL = import.meta.env.VITE_API_URL;
// console.log(`${API_URL}/articles/`);

// export const articlesData = async () => {
//     const response = await axios.get(`${API_URL}/articles/`);
//     return response.data;
// };

// const cardData = [
//     {
//       id: 1,
//       img: "https://picsum.photos/800/450?random=1",
//       tag: "Engineering",
//       title: "Revolutionizing software development with cutting-edge tools",
//       description: "Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.",
//       authors: [
//         { name: "Remy Sharp", avatar: "/static/images/avatar/1.jpg" },
//         { name: "Travis Howard", avatar: "/static/images/avatar/2.jpg" },
//       ],
//     },
//     {
//         id: 2,
//       img: "https://picsum.photos/800/450?random=2",
//       tag: "Product",
//       title: "Innovative product features that drive success",
//       description:
//         "Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.",
//       authors: [{ name: "Erica Johns", avatar: "/static/images/avatar/6.jpg" }],
//     },
//     {
//         id: 3,
//       img: "https://picsum.photos/800/450?random=3",
//       tag: "Design",
//       title: "Designing for the future: trends and insights",
//       description: "Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences.",
//       authors: [{ name: "Kate Morrison", avatar: "/static/images/avatar/7.jpg" }],
//     },
//     {
//         id: 4,
//       img: "https://picsum.photos/800/450?random=4",
//       tag: "Company",
//       title: "Our company's journey: milestones and achievements",
//       description: "Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leader, discover our story of growth and success.",
//       authors: [{ name: "Cindy Baker", avatar: "/static/images/avatar/3.jpg" }],
//     },
//     {
//         id: 5,
//       img: "https://picsum.photos/800/450?random=45",
//       tag: "Engineering",
//       title: "Pioneering sustainable engineering solutions",
//       description:
//         "Learn about our commitment to sustainability and the innovative engineering solutions we're implementing to create a greener future. Discover the impact of our eco-friendly initiatives.",
//       authors: [
//         { name: "Agnes Walker", avatar: "/static/images/avatar/4.jpg" },
//         { name: "Trevor Henderson", avatar: "/static/images/avatar/5.jpg" },
//       ],
//     },
//     {
//         id: 6,
//       img: "https://picsum.photos/800/450?random=6",
//       tag: "Product",
//       title: "Maximizing efficiency with our latest product updates",
//       description:
//         "Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.",
//       authors: [{ name: "Travis Howard", avatar: "/static/images/avatar/2.jpg" }],
//     },
//     ];



//     console.log(cardData[0]);
// export default cardData;



import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
// console.log(`${API_URL}/articles/`);

// Fetch articles dynamically from backend
export const cardData = async () => {
  try {
    const response = await axios.get(`${API_URL}/articles/`);
    return response.data.map((article) => ({
      id: article._id,  // MongoDB stores `_id`, so we map it to `id`
      img: article.img || "https://picsum.photos/800/450", // Default image if none provided
      tags: article.tags, // Backend has `tags` as an array
      title: article.title,
      description: article.description,
      authors: article.authors.map((name) => ({
        name,
        avatar: "/static/images/avatar/placeholder.jpg", // You may update this dynamically
      })),
    }));
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
};

// **Example usage**: Fetch and log articles
// cardData().then((data) => console.log("Fetched Articles:", data));

export default cardData;
