import React, { useEffect, useContext } from "react";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";
import ItemCard from "./ItemCard";
import AddItem from "./AddItem";
import { ItemContext } from "../Contexts/ItemContext";

export default function ItemList() {
  const { itemList, setItemList } = useContext(ItemContext);
  const userId = localStorage.getItem("id");

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${userId}/items`)
      .then((res) => {
        console.log("item res data", res);
        setItemList(res.data.itemCollection);//need to collaborate with backend
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="container-wrap">
      <div class="item-card-container container mt-2">
        <div className="row">
          <AddItem />
          {itemList.map((item, index) => (
            <ItemCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
