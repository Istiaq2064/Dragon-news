import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavBar = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then((res)=> res.json())
        .then((data) => setCatagories(data.data.news_category))
    },[])
    return (
        <div>
            <h1 className="font-semibold mb-4">All Catagories ({catagories.length})</h1>
            <div className="flex flex-col gap-3">
                {
                    catagories.map((category)=> (
                        <NavLink to={`/category/${category.category_id}`} className="btn bg-base-100 rounded-none" key={category.category_id}> {category.category_name} </NavLink>
                   
                ))}
            </div>
        </div>
    );
};

export default LeftNavBar;