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
        <NewsSection />
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

function NewsSection() {
  return (
    <div className="news">
      <h2>All</h2>
      <div className="news-section">
        <ul>
          <li>
            <h3>
              ICC releases revised schedule of ODI World Cup 2023, India-Pak
              match now on October 14
            </h3>
            <p> by name / 11:45am on Wednesday, 9 August, 2023</p>
            <div className="news-inside">
              <div className="image">
                <img
                  src="https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/08_aug/9_wed/img_1691581122778_346.jpg?"
                  alt=""
                />
              </div>
              <p>
                ICC has released revised schedule of ODI World Cup 2023, with
                dates of nine matches being changed. India-Pakistan match will
                now take place on October 14 instead of October 15 in Ahmedabad.
                England-Afghanistan match in Delhi has been moved from October
                14 to October 15. Pakistan-Sri Lanka match in Hyderabad has been
                moved from October 12 to October 10.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
