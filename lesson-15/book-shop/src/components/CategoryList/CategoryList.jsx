import {useState, useEffect} from "react";
import axios from "axios";
import styles from "./CategoryList.module.css";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(async ()=> {
        try {
            const {data} = await axios.get("http://localhost:4000/api/v1/categories", {
                params: {
                    page,
                    perPage: 2
                }
            });
            const {result} = data.data;
            setCategories(result);
        }
        catch(error){

        }
    }, [page]);
    
    const categoryElements = categories.map(({_id, name, description}) => 
        (<li key={_id}>
            <h4>{name}</h4>
            <p>{description}</p>
        </li>));

    return (
        <>
        <ul>
            {categoryElements}
        </ul>
        <ul className={styles.pagination}>
            <li onClick={()=>setPage(1)} className={styles.paginationItemActive}>1</li>
            <li onClick={()=>setPage(2)} className={styles.paginationItem}>2</li>
        </ul>
        </>
    )
};

export default CategoryList;