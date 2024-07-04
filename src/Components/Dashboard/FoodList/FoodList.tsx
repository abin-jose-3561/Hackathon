import { useState } from "react";
import chapati from "../../../Assets/chapati.jpg";
import styles from "./FoodList.module.scss";
import DialogPopUp from "../DialogPopUp/DialogPopup";

const foodItems = [
  {
    name: "Chapati",
    id: 1,
    description: "good Food good Mood",
    statusAvailability: "available",
    imageUrl: "",
    restaurantId: 1,
    rating: 3,
    price: 20,
  },
  {
    name: "Rice",
    id: 2,
    description: "good Food good Mood",
    statusAvailability: "available",
    imageUrl: "",
    restaurantId: 1,
    rating: 2,
    price: 30,
  },
  {
    name: "Chicken",
    id: 3,
    description: "good Food good Mood",
    statusAvailability: "out of stock",
    imageUrl: "",
    restaurantId: 1,
    rating: 4,
    price: 50,
  },
  {
    name: "Fish",
    id: 4,
    description: "good Food good Mood",
    statusAvailability: "available",
    imageUrl: "",
    restaurantId: 1,
    rating: 5,
    price: 40,
  },
];

export default function FoodList() {
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  console.log(visible);
  const handleClick = (item: any) => {
    setSelectedItem(item);
    setVisible(true);
  };
  return (
    <div className="grid w-full">
      {foodItems.map((items: any) => {
        return (
          <div className="col-3" key={items.id}>
            <div className="col-12">
              <div
                className="text-center p-3 border-round-sm bg-primary font-bold"
                onClick={() => handleClick(items)}
              >
                <div className="images ">
                  <img
                    src={chapati}
                    alt={items.name}
                    className={`${styles["responsiveImg"]}`}
                  />
                </div>
                <div className="itemDetails">
                  <p>{items.name}</p>
                  <p>{items.description}</p>
                  <p>{items.statusAvailability}</p>
                  <p>{items.price} Rs</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <DialogPopUp
        visible={visible}
        selectedItem={selectedItem}
        onHide={() => setVisible(false)}
      />
    </div>
  );
}
