import axios from "axios";
import styled from "styled-components";
import usePromise from "../../hook/usePromise";
import NewsItem from "./NewsItem";

const NewsList = ({ category }) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === "all" ? "" : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=8e4a6101174e464794f1214934038e93`
        );
    }, [category]);

    // usePromise 를 사용함으로 아래 useEffect가 필요없어짐
    // useEffect(() => {
    //   const fetchData = async () => {
    //     setLoading(true);
    //     try {
    //       const query = category === "all" ? "" : `&category=${category}`;
    //       const response = await axios.get(
    //         `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=8e4a6101174e464794f1214934038e93`
    //       );
    //       setArticles(response.data.articles);
    //     } catch (e) {
    //       console.log(e);
    //     }
    //     setLoading(false);
    //   };
    //   fetchData();
    // }, [category]);

    if (loading) {
        return <NewsListBlock>대기 중..</NewsListBlock>;
    }
    // 아직 articles 값이 설정되지 않았을 때
    if (!response) {
        return null;
    }
    if (error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>;
    }
    // response 값이 유효 할 때
    // {}로 감싼 이유는 object인 response.data안의 articles 의 value를 가져오기 위함
    const { articles } = response.data;
    console.log(articles);
    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
      width: 100%;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  `;