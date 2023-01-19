import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useServices } from "../../contexts/ServicesContextProvider";
import "./AdminPage.css";

const AdminPage = () => {
  const navigate = useNavigate();
  const { addHotel, addRestaurant, addEntertainment } = useServices();
  const [newHotel, setNewHotel] = useState({
    group: "hotel",
    name: "",
    info: "",
    address: "",
    hours: "",
    image: "",
    map_link: "",
    hotel_link: "",
    price: "",
    category: 1,
  });
  const [newRestaurant, setNewRestaurant] = useState({
    group: "food",
    name: "",
    info: "",
    address: "",
    hours: "",
    image: "",
    map_link: "",
    place_link: "",
    avg_price: "",
    category: 1,
    sub_category: 1,
  });
  const [newEntertainment, setNewEntertainment] = useState({
    group: "fun",
    name: "",
    info: "",
    address: "",
    hours: "",
    image: "",
    map_link: "",
    category: 1,
  });

  const handleAddHotel = (e) => {
    e.preventDefault();
    addHotel(newHotel);
    navigate("/hotels");
  };
  const handleAddRestaurant = (e) => {
    e.preventDefault();
    addRestaurant(newRestaurant);
    navigate("/place");
  };
  const handleAddEntertainment = (e) => {
    e.preventDefault();
    addEntertainment(newEntertainment);
    navigate("/fun");
  };
  return (
    <div className="admin-page">
      {/* hotel */}
      <form action="">
        <h3>add hotel</h3>
        <input
          type="text"
          value={newHotel.name}
          placeholder={"name"}
          onChange={(e) => setNewHotel({ ...newHotel, name: e.target.value })}
        />
        <input
          type="text"
          value={newHotel.info}
          placeholder={"info"}
          onChange={(e) => setNewHotel({ ...newHotel, info: e.target.value })}
        />
        <input
          type="text"
          value={newHotel.address}
          placeholder={"address"}
          onChange={(e) =>
            setNewHotel({ ...newHotel, address: e.target.value })
          }
        />
        <input
          type="text"
          value={newHotel.hours}
          placeholder={"hours"}
          onChange={(e) => setNewHotel({ ...newHotel, hours: e.target.value })}
        />

        <input
          type="text"
          value={newHotel.map_link}
          placeholder={"map link"}
          onChange={(e) =>
            setNewHotel({ ...newHotel, map_link: e.target.value })
          }
        />
        <input
          type="text"
          value={newHotel.price}
          placeholder={"price"}
          onChange={(e) => setNewHotel({ ...newHotel, price: e.target.value })}
        />
        <span> image </span>
        <input
          type="file"
          value={newHotel.image}
          placeholder={"image"}
          onChange={(e) => setNewHotel({ ...newHotel, image: e.target.value })}
        />
        <input
          type="number"
          value={newHotel.category}
          placeholder={"category"}
          onChange={(e) =>
            setNewHotel({ ...newHotel, category: e.target.value })
          }
        />

        <button type="submit" onClick={(e) => handleAddHotel(e)}>
          Add
        </button>
      </form>

      {/* restaurants */}
      <form action="">
        <h3>add restaurant</h3>
        <input
          type="text"
          value={newRestaurant.name}
          placeholder={"name"}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, name: e.target.value })
          }
        />
        <input
          type="text"
          value={newRestaurant.info}
          placeholder={"info"}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, info: e.target.value })
          }
        />
        <input
          type="text"
          value={newRestaurant.address}
          placeholder={"address"}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, address: e.target.value })
          }
        />
        <input
          type="text"
          value={newRestaurant.hours}
          placeholder={"hours"}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, hours: e.target.value })
          }
        />

        <input
          type="text"
          value={newRestaurant.map_link}
          placeholder={"map link"}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, map_link: e.target.value })
          }
        />
        <input
          type="text"
          value={newRestaurant.place_link}
          placeholder={"place link"}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, place_link: e.target.value })
          }
        />
        <input
          type="text"
          value={newRestaurant.avg_price}
          placeholder={"price"}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, avg_price: e.target.value })
          }
        />
        <span> image </span>
        <input
          type="file"
          value={newRestaurant.image}
          placeholder={"image"}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, image: e.target.value })
          }
        />
        <input
          type="number"
          value={newRestaurant.category}
          placeholder={"category"}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, category: e.target.value })
          }
        />
        <input
          type="number"
          value={newRestaurant.sub_category}
          placeholder={"category"}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, sub_category: e.target.value })
          }
        />

        <button type="submit" onClick={(e) => handleAddRestaurant(e)}>
          Add
        </button>
      </form>
      {/* entertainment */}
      <form action="">
        <h3>add entertainment</h3>
        <input
          type="text"
          value={newEntertainment.name}
          placeholder={"name"}
          onChange={(e) =>
            setNewEntertainment({ ...newEntertainment, name: e.target.value })
          }
        />
        <input
          type="text"
          value={newEntertainment.info}
          placeholder={"info"}
          onChange={(e) =>
            setNewEntertainment({ ...newEntertainment, info: e.target.value })
          }
        />
        <input
          type="text"
          value={newEntertainment.address}
          placeholder={"address"}
          onChange={(e) =>
            setNewEntertainment({
              ...newEntertainment,
              address: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={newEntertainment.hours}
          placeholder={"hours"}
          onChange={(e) =>
            setNewEntertainment({ ...newEntertainment, hours: e.target.value })
          }
        />

        <input
          type="text"
          value={newEntertainment.map_link}
          placeholder={"map link"}
          onChange={(e) =>
            setNewEntertainment({
              ...newEntertainment,
              map_link: e.target.value,
            })
          }
        />

        <span> image </span>
        <input
          type="file"
          value={newEntertainment.image}
          placeholder={"image"}
          onChange={(e) =>
            setNewEntertainment({ ...newEntertainment, image: e.target.value })
          }
        />
        <input
          type="number"
          value={newEntertainment.category}
          placeholder={"category"}
          onChange={(e) =>
            setNewEntertainment({
              ...newEntertainment,
              category: e.target.value,
            })
          }
        />

        <button type="submit" onClick={(e) => handleAddEntertainment(e)}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
