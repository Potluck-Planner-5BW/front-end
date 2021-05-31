import React from "react";
import "./FoodCard.styles.css";

export default function FoodCard(props){
const { dish_name, food_type, servings } = props.food;
return (
  <div onClick={() => props.setFoodToEdit(props.food)}>
    <h2>dish_name: {dish_name}</h2>
    <h3>food_type: {food_type} </h3>
    <p>servings: {servings}</p>
  </div>
)
}
