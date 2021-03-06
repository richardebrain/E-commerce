import React from "react";
import CategoryItem from "../category-item/category-item.component";
import './categoryPreview.style.scss';

const CategoryPreview = ({ items, title }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CategoryItem key={item.id} item={item} />
          ))}
      </div> 
    </div>
  );
};

export default CategoryPreview;
