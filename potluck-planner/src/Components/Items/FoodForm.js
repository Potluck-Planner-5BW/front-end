import React, { useState } from 'react';
import { axiosWithAuth } from '../../helpers/axiosWithAuth';

export default function FoodForm(props) {
    const [ form, setForm ] = useState(props.foodToEdit || {dish_name: "", food_type: "", servings: ""});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handlesave = (e) => {
        e.preventDefault();
        if(props.foodToEdit) {
            axiosWithAuth()
            .put(`/potluck/:id/food/${props.foodToEdit.id}`, form)
            .then((res) => {
                console.log(res);
                props.setfoods(
                    props.foods.map((food) => {
                        if(food.id===Number(res.data.id)) {
                            return res.data;
                        }else {
                            return food;
                        }
                    })
                );
            })
            .catch((err) => console.log(err));

        }else {
            axiosWithAuth()
            .post("/potluck/:id/food", form)
            .then((res) => {
                props.setfoods(res.data);
                props.setAddfood(false);
            })
            .catch((err) => console.log(err));
        }
    };
     
    const handleDelete = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .delete(`/potluck/:id/food/${props.foodToEdit.id}`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err));
    }
    return (
        <div>
            <form onSubmit={handlesave}>
                <label>dish_name:</label>
                <input name="dish_name" onChange={handleChange} value={form.dish_name} />
                <label>food_type:</label>
                <input name="food_type" onChange={handleChange} value={form.food_type} />
                <label>servings:</label>
                <input name="servings" onChange={handleChange} value={form.servings} />
                <button type="submit">Save dish</button>
                <button onClick={handleDelete}>delete dish</button>
            </form>
        </div>
    )
};

//this this componnent needs to integrate with other components and also I need to handle the props either context api or the old fashion way
//also I need to customize my form to fit my food list foods characterstics.