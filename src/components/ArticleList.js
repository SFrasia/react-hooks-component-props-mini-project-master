import Article from "./Article";

export default function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => {
        const { date, id, title, preview, minutes } = posts;
        return (
          <Article>
            key={id}
            title={title}
            date={date}
            preview={preview}
            minutes={minutes}
          </Article>
        );
      })}
    </main>
  );
}
