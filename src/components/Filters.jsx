import { useState } from "react";
import "../components/Filters.css"

export const Filters = ({onChange}) => {
const [minPrice, setminPrice] = useState(0)    

const handleChangePrice = (event)=>{
        setminPrice(event.target.value)

        onChange(eventPrev => ({
            ...eventPrev, minPrice: event.target.value
        }))
      }
 
const handleChangeCategory = (event) =>{
    onChange(eventPrev => ({
        ...eventPrev, category: event.target.value
    }))
}      

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">precio</label>
        <input type="range" id="price" min="0" max="2000" onChange={handleChangePrice} />
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Categorias</label>
        <select id="category" onChange={handleChangeCategory}>
            <option value="all">Todas</option>
            <option value="fragrances">Perfumes</option>
            <option value="groceries">Comestibles</option>
            <option value="furniture">Muebles</option>
        </select>
      </div>
    </section>
  );
};
