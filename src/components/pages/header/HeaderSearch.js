import React from 'react'
import { useState } from 'react'
import { category } from '../../../utils/HeaderSearchData'

function HeaderSearch() {

    const [selected, setSelected] = useState(null);
    const toggle = (index) => {
        if (selected === index) {
            return setSelected(null);
        }

        setSelected(index);
    };


    return (
        <div className="block__search ">
            <form action="#" method="POST">
                <input type="text" name="search" className="search__input search__box" placeholder="Entrez votre mot clé ici" />
                <select name="category" className="select__category search__box mobile_select-categorie_view ">
                    <option value="">Chosir une catégorie</option>
                    {category.map((item, index) => (
                        <optgroup label={item.category}>
                            {item.sub_category.map((element, key) => (
                                <option>
                                    {element}
                                </option>
                            ))}
                        </optgroup>
                    ))}
                </select>
                <button type="submit" value="" className="btn__submit_search bg_red">
                    <i className="fa-solid fa-search"></i>
                </button>
            </form>
        </div>
    )
}

export default HeaderSearch