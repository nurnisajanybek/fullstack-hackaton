import React, { useState } from "react";
import { useServices } from "../../contexts/ServicesContextProvider";

const AdminPage = () => {
  const { addHotel, addRestaurant } = useServices();
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

  const handleAdd = (e) => {
    e.preventDefault();
    addHotel(newHotel);
  };
  return (
    <div>
      <form action="">
        <select
          value={newHotel.group}
          onChange={(e) => setNewHotel({ ...newHotel, group: e.target.value })}
        >
          <option value="hotel">hotel</option>
          <option value="fun">fun</option>
          <option value="place">place</option>
        </select>

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
          onChange={(e) => setNewHotel({ ...newHotel, name: e.target.value })}
        />

        <input
          type="text"
          value={newHotel.map_link}
          placeholder={"map link"}
          onChange={(e) =>
            setNewHotel({ ...newHotel, address: e.target.value })
          }
        />
        <input
          type="number"
          value={newHotel.price}
          placeholder={"price"}
          onChange={(e) =>
            setNewHotel({ ...newHotel, category: e.target.value })
          }
        />
        <span> image </span>
        <input
          type="file"
          value={newHotel.image}
          placeholder={"image"}
          onChange={(e) => setNewHotel({ ...newHotel, info: e.target.value })}
        />
        <input
          type="number"
          value={newHotel.category}
          placeholder={"category"}
          onChange={(e) =>
            setNewHotel({ ...newHotel, category: e.target.value })
          }
        />

        <button type="submit" onClick={(e) => handleAdd(e)}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
