import { useParams } from "react-router-dom"
import Categories from "./Categories";
import NewsList from "./NewsList";

const News = () => {
    const params = useParams();
    const category = params.category || "all";
    return (
        <div style={{height:700, overflow:'auto'}}>
            <Categories />
            <NewsList category={category} />
        </div>
    )
}

export default News