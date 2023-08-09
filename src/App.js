import { useState } from "react";

const categories = [
  { name: "All news", id: 1 },
  { name: "Top news", id: 2 },
  { name: "Trending news", id: 3 },
  { name: "Science", id: 4 },
  { name: "Entertainment", id: 5 },
  { name: "Sports", id: 6 },
  { name: "Politics", id: 7 },
  { name: "Business", id: 8 },
  { name: "Technology", id: 9 },
  { name: "Health", id: 10 },
  { name: "World", id: 11 },
  { name: "Environment", id: 12 },
  { name: "Education", id: 13 },
  { name: "Travel", id: 14 },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All news");
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <CategoriesList
          selectedCategory={selectedCategory}
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          distinctio nostrum doloribus sit in odit eveniet reprehenderit saepe,
          ipsam animi beatae facilis voluptatem eum officiis, quasi possimus quo
          quisquam! Dolorem maiores sed, inventore quasi esse blanditiis
          adipisci at numquam fugit excepturi eum dignissimos. Voluptate eius
          sunt laboriosam earum natus rem.
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <h1> 📰 NewsWave</h1>
      <button>Follow Me</button>
    </div>
  );
}

function CategoriesList({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="category">
      <h2>Category</h2>
      <ul>
        {categories.map((category) => (
          <Category
            selectedCategory={selectedCategory}
            category={category}
            key={category.id}
            onClick={setSelectedCategory}
          />
        ))}
      </ul>
    </div>
  );
}

function Category({ category, selectedCategory, onClick }) {
  return (
    <li
      className={selectedCategory === category.name ? "active" : ""}
      onClick={() => onClick(category.name)}
    >
      {category.name}
    </li>
  );
}

export default App;
