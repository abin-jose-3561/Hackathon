import chapati from "../../../assets/chapati.jpg";
import styles from "./FoodList.module.scss";

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
  // return <div>FoodList</div>;
  return (
    <div className="grid w-full">
      {foodItems.map((items: any) => {
        return (
          <div className="col-3">
            <div className="col-12 cursor-pointer">
              <div className="text-center p-3 border-round-sm bg-primary font-bold">
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
    </div>
  );
}
