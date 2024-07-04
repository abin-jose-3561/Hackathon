import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.scss";
import TS1 from "../../Assets/BgImages/TS1.jpg";
import ModX from "../../Assets/BgImages/ModX.jpg";
import TS3 from "../../Assets/BgImages/TS3.jpg";
import SEZ from "../../Assets/BgImages/Hungry.jpg";

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

// const imageMapping: any = {
//   TS1: ts1Image,
//   ModX: modxImage,
//   TS3: ts3Image,
//   SEZ: sezImage,
// };
export default function Dashboard() {
  const navigate = useNavigate();

  const handleNavigation = (name: any) => {
    navigate(`/dahboard/restaurant/${name}`);
  };
  function imageMapping(name: string) {
    switch (name) {
      case "TS1":
        return TS1;
      case "ModX":
        return ModX;
      case "SEZ":
        return SEZ;
      case "TS3":
        return TS3;
    }
  }
  return (
    <div className="grid w-full ">
      {resturantList.map((item: any) => {
        const bgImage = imageMapping(item.name);
        return (
          <div className="col-6">
            <div
              className={`flex flex-column justify-content-center align-items-center  h-15rem border-round-sm font-bold transition-duration-150 transition-colors ${styles.gridItem}`}
              onClick={() => handleNavigation(item.name)}
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
              }}
            >
              {/* <img src={ts1Image} alt="" width="100px" height="100px" /> */}
              <h1 className="text-0 bg-cyan-400 border-round px-3">
                {item.name}
              </h1>
              <p className="bg-white text-cyan-400 border-round px-3 py-1">
                {item.vendor}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
