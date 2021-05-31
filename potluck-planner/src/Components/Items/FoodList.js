import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { fetchFoods } from "../../helpers/getFoods";
import FoodForm from "./FoodForm";


export default function FoodList(){
  const [foods, setFoods] = useState([]);
  const [addFood,setAddFood] = useState(false);
  const [foodToEdit,setFoodToEdit] = useState();
  
  useEffect(() => {
 fetchFoods()
 .then((res) => {
   console.log(res);
   setFoods(res.data);
 })
 .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Choose one of these popular dishes </h2>
      <h3>To bring with you to the Party</h3>
      {addFood && <FoodForm setAddFood={setAddFood} setFoods={setFoods} />}
      {foodToEdit? (
        <FoodForm foodToEdit={foodToEdit} setFoodToEdit={setFoodToEdit} foods={foods} setFoods={setFoods} />
      ) : (
        <button onClick={() => setAddFood(true)}>Add a Dish</button>
      )}
      {foods.map((food) =>(
    <FoodCard food={food} key={food.id} setFoodToEdit={setFoodToEdit} />
      ))}
    </div>
  )


}