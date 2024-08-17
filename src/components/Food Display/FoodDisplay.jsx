import React, { useContext, useState } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../Food Item/FoodItem'
import PulseLoader from "react-spinners/ClipLoader";

const FoodDisplay = ({ category }) => {
  const { food_list, loading, setLoading } = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>

      <div className="food-display-list">

        {
          loading ? <PulseLoader color="tomato" />
            : food_list.map((item, index) => {
              if (category === "All" || category === item.category) {
                return (<FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />)
              }
            })
        }

      </div>
    </div>
  )
}

export default FoodDisplay
