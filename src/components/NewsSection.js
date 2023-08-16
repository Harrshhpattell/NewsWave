export default function NewsSection({ mydata, loading }) {
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
