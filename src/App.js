import { useEffect, useState } from "react";

const categories = [
  {
    name: "All news",
    id: 1,
    apiName: "all",
    icon: "fa-solid fa-fire",
    iconHover: "fa-solid fa-fire fa-beat",
  },
  // { name: "Top news", id: 2 },
  // { name: "Trending news", id: 3 },
  {
    name: "Science",
    id: 4,
    apiName: "science",
    icon: "fa-regular fa-newspaper",
    iconHover: "fa-regular fa-newspaper fa-beat",
  },
  {
    name: "Entertainment",
    id: 5,
    apiName: "entertainment",
    icon: "fa-regular fa-newspaper",
    iconHover: "fa-regular fa-newspaper fa-beat",
  },
  {
    name: "Sports",
    id: 6,
    apiName: "sports",
    icon: "fa-solid fa-baseball-bat-ball",
    iconHover: "fa-solid fa-baseball-bat-ball fa-beat",
  },
  {
    name: "Politics",
    id: 7,
    apiName: "politics",
    icon: "fa-solid fa-landmark",
    iconHover: "fa-solid fa-landmark fa-beat",
  },
  {
    name: "Business",
    id: 8,
    apiName: "business",
    icon: "fa-solid fa-business-time",
    iconHover: "fa-solid fa-business-time fa-beat",
  },
  {
    name: "Technology",
    id: 9,
    apiName: "technology",
    icon: "fa-solid fa-globe",
    iconHover: "fa-solid fa-globe fa-beat",
  },
  {
    name: "Health",
    id: 10,
    apiName: "health",
    icon: "fa-solid fa-user-doctor",
    iconHover: "fa-solid fa-user-doctor fa-beat",
  },
  {
    name: "World",
    id: 11,
    apiName: "world",
    icon: "fa-solid fa-globe",
    iconHover: "fa-solid fa-globe fa-beat",
  },
  {
    name: "Environment",
    id: 12,
    apiName: "environment",
    icon: "fa-solid fa-seedling",
    iconHover: "fa-solid fa-seedling fa-beat",
  },
  {
    name: "Education",
    id: 13,
    apiName: "education",
    icon: "fa-solid fa-school",
    iconHover: "fa-solid fa-school fa-beat",
  },
  {
    name: "Travel",
    id: 14,
    apiName: "travel",
    icon: "fa-solid fa-route",
    iconHover: "fa-solid fa-route fa-beat",
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [mydata, setMyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiget = (category) => {
    setLoading(true);
    fetch("https://inshortsapi.vercel.app/news?category=" + selectedCategory)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setMyData(json.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    apiget(selectedCategory);
    const interval = setInterval(() => {
      apiget(selectedCategory);
    }, 500000);
    return () => clearInterval(interval);
  }, [selectedCategory]);

  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <CategoriesList
          selectedCategory={selectedCategory}
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          setMyData={setMyData}
        />
        <NewsSection mydata={mydata} loading={loading} />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <h1> 📰 NewsWave</h1>
      <a
        href={"https://github.com/Harrshhpattell"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Follow Me</button>
      </a>
    </div>
  );
}

function CategoriesList({
  categories,
  selectedCategory,
  setSelectedCategory,
  setMyData,
}) {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setMyData([]);
  };
  return (
    <div className="category">
      <h2>Category</h2>
      <ul>
        {categories.map((category) => (
          <Category
            selectedCategory={selectedCategory}
            category={category}
            key={category.id}
            onClick={handleCategoryClick}
          />
        ))}
      </ul>
    </div>
  );
}

function Category({ category, selectedCategory, onClick }) {
  return (
    <li
      className={selectedCategory === category.apiName ? "active" : ""}
      onClick={() => onClick(category.apiName)}
    >
      <i
        className={
          selectedCategory === category.apiName
            ? category.iconHover
            : category.icon
        }
        style={{ color: "#007bff" }}
      ></i>{" "}
      {category.name}
    </li>
  );
}

function NewsSection({ mydata, loading }) {
  return (
    <div className="news">
      <div className="news-section">
        <ul>
          {loading ? (
            <p
              style={{
                fontWeight: 600,
                textAlign: "center",
                marginTop: "20rem",
                fontSize: "2rem",
              }}
            >
              Loading...
            </p>
          ) : (
            mydata.map((news) => <News news={news} key={news.id} />)
          )}
        </ul>
      </div>
    </div>
  );
}

function News({ news }) {
  return (
    <>
      <li>
        <button className="news-button">
          <i class="fa-regular fa-newspaper fa-beat"></i> Latest
        </button>
        <h3>{news.title}</h3>
        <p className="author">
          by {news.author} / {news.time} on {news.date}
        </p>
        <div className="news-inside">
          <div className="image">
            <img src={news.imageUrl} alt="" />
          </div>
          <p>{news.content}</p>
        </div>
      </li>
    </>
  );
}

export default App;
