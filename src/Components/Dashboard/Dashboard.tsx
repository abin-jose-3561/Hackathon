import { useNavigate } from "react-router-dom";

const resturantList = [
  {
    id: "1",
    name: "TS1",
    vendor: "Mysore food Factory",
  },
  {
    id: "2",
    name: "ModX",
    vendor: "Red Apple",
  },
  {
    id: "3",
    name: "TS3",
    vendor: "Mysore Union",
  },
  {
    id: "4",
    name: "SEZ",
    vendor: "Hungry",
  },
];

export default function Dashboard() {

  const navigate = useNavigate();

  const navigateToShop =()=>{
    navigate('')
  }
  return (
    <div className="grid w-full ">
      {resturantList.map((item: any) => {
        return (
          <div className="col-6 ">
            <div className="text-center border-round-sm bg-primary font-bold cursor-pointer" onClick={navigateToShop}>
              <h2>{item.name}</h2>
              <p>{item.vendor}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
