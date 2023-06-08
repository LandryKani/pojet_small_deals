import React, {useState} from 'react';
import { Link } from "react-router-dom";

function CategoryFilter(category, setCat) {
  console.log("adverts category filter nouv", category.id_category);


  return (
    <div key={category.id_category} onClick={() => setCat(category.id_category) }><Link to="#" className="">
      <img src={category.image.small.url} />
      <h5>{category.name}</h5>
    </Link>
    </div>)

}


function AdvertsMenuFilter({advertscat, setCat}) {
  return (
    <>
      <div className="filter-annonce-menu display-grid">
        {advertscat.map((category)=>{
          return CategoryFilter(category, setCat)
        })}
      </div>

    </>
  )
}

export default AdvertsMenuFilter