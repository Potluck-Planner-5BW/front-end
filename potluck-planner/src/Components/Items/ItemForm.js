import React, { useState } from 'react';
import { axiosWithAuth } from '../../helpers/axiosWithAuth';

export default function ItemForm(props) {
    const [ form, setForm ] = useState(props.itemToEdit || {name: "", unit: ""});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handlesave = (e) => {
        e.preventDefault();
        if(props.itemToEdit) {
            axiosWithAuth()
            .put(`/items/${props.itemToEdit.id}, form`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));

        }else {
            axiosWithAuth()
            .post("/items", form)
            .then((res) => {
                props.setItems(res.data);
                props.setAddItem(false);
            })
            .catch((err) => console.log(err));
        }
    };
    return (
        <div>
            <form onSubmit={handlesave}>
                <label>name:</label>
                <input name="name" onChange={handleChange} value={form.name} />
                <label>unit:</label>
                <input name="unit" onChange={handleChange} value={form.unit} />
                <button type="submit">Save</button>
                <button>delete</button>
            </form>
        </div>
    )
};

//this this componnent needs to integrate with other components and also I need to handle the props either context api or the old fashion way
//also I need to customize my form to fit my food list items characterstics.