export default function CategoriesList({
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
