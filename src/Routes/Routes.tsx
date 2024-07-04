import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import MostOrderedFood from "../Components/Analytics/MostOrderedFood/MostOrderedFood";
import Dashboard from "../Components/Dashboard/Dashboard";
import FoodList from "../Components/Dashboard/FoodList/FoodList";
import Cart from "../Components/Dashboard/Cart/Cart";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/restaurant/:name" element={<FoodList />} />
          <Route path="/dashboard/cart" element={<Cart />}/>
          <Route path="/analytics" element={<MostOrderedFood />} />
          <Route
            path="/*"
            element={
              <div className="flex align-items-center justify-content-between text-xl">
                Page Not Fount
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}
