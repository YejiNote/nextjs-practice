export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <h1>Welcome to my blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

//ssr 서버사이드렌더링 방식 - 서버에서 만든 html파일을 그때그때 보여줌
//serversideprops는 이렇게 바로바로 바뀐거를 보여즘 (빈번한 변화 )
// export const getServerSideProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_start=0&_end=10"
//   );
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };

//SSG static generation
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_end=10");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    //처음 접속이 일어난 후에 20초 뒤에는 새롭게 데이터를 받아서 리제너레이션시킴
    revalidate: 20,
  };
};
