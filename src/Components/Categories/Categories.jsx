import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../Store/categories";

function Categories() {
  const cat = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  if (cat.isLoading) {
    return ;
  } else {
    return (
      <ul>
        {console.log(cat)}
        {cat.categories.map((category) => (
          <li key={category.id}> {category.name}</li>
        ))}
      </ul>
    );
  }
}

export default Categories;
