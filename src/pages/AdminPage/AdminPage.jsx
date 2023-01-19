import React, { useState } from "react";
import { useServices } from "../../contexts/ServicesContextProvider";
import "./AdminPage.css";

const AdminPage = () => {
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
    group: "restaurant",
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
    group: "entertainment",
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
  };
  const handleAddRestaurant = (e) => {
    e.preventDefault();
    addRestaurant(newRestaurant);
  };
  const handleAddEntertainment = (e) => {
    e.preventDefault();
    addEntertainment(newEntertainment);
  };
  return (
    <div>
      {/* hotel */}
      <form action="">
        <select
          value={newHotel.group}
          onChange={(e) => setNewHotel({ ...newHotel, group: e.target.value })}
        >
          <option value="hotel">hotel</option>
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

        <button type="submit" onClick={(e) => handleAddHotel(e)}>
          Add
        </button>
      </form>

      {/* restaurants */}
      <form action="">
        <select
          value={newRestaurant.group}
          onChange={(e) =>
            setNewHotel({ ...newRestaurant, group: e.target.value })
          }
        >
          <option value="hotel">hotel</option>
        </select>

        <input
          type="text"
          value={newRestaurant.name}
          placeholder={"name"}
          onChange={(e) =>
            setNewHotel({ ...newRestaurant, name: e.target.value })
          }
        />
        <input
          type="text"
          value={newRestaurant.info}
          placeholder={"info"}
          onChange={(e) =>
            setNewHotel({ ...newRestaurant, info: e.target.value })
          }
        />
        <input
          type="text"
          value={newRestaurant.address}
          placeholder={"address"}
          onChange={(e) =>
            setNewHotel({ ...newRestaurant, address: e.target.value })
          }
        />
        <input
          type="text"
          value={newRestaurant.hours}
          placeholder={"hours"}
          onChange={(e) =>
            setNewHotel({ ...newRestaurant, name: e.target.value })
          }
        />

        <input
          type="text"
          value={newRestaurant.map_link}
          placeholder={"map link"}
          onChange={(e) =>
            setNewHotel({ ...newRestaurant, address: e.target.value })
          }
        />
        <input
          type="text"
          value={newRestaurant.place_link}
          placeholder={"map link"}
          onChange={(e) =>
            setNewHotel({ ...newRestaurant, address: e.target.value })
          }
        />
        <input
          type="number"
          value={newRestaurant.avg_price}
          placeholder={"price"}
          onChange={(e) =>
            setNewHotel({ ...newRestaurant, category: e.target.value })
          }
        />
        <span> image </span>
        <input
          type="file"
          value={newRestaurant.image}
          placeholder={"image"}
          onChange={(e) =>
            setNewHotel({ ...newRestaurant, info: e.target.value })
          }
        />
        <input
          type="number"
          value={newRestaurant.category}
          placeholder={"category"}
          onChange={(e) =>
            setNewHotel({ ...newRestaurant, category: e.target.value })
          }
        />
        <input
          type="number"
          value={newRestaurant.sub_category}
          placeholder={"category"}
          onChange={(e) =>
            setNewHotel({ ...newRestaurant, category: e.target.value })
          }
        />

        <button type="submit" onClick={(e) => handleAddRestaurant(e)}>
          Add
        </button>
      </form>
      {/* entertainment */}
      <form action="">
        <select
          value={newEntertainment.group}
          onChange={(e) =>
            setNewHotel({ ...newEntertainment, group: e.target.value })
          }
        >
          <option value="hotel">hotel</option>
        </select>

        <input
          type="text"
          value={newEntertainment.name}
          placeholder={"name"}
          onChange={(e) =>
            setNewHotel({ ...newEntertainment, name: e.target.value })
          }
        />
        <input
          type="text"
          value={newEntertainment.info}
          placeholder={"info"}
          onChange={(e) =>
            setNewHotel({ ...newEntertainment, info: e.target.value })
          }
        />
        <input
          type="text"
          value={newEntertainment.address}
          placeholder={"address"}
          onChange={(e) =>
            setNewHotel({ ...newEntertainment, address: e.target.value })
          }
        />
        <input
          type="text"
          value={newEntertainment.hours}
          placeholder={"hours"}
          onChange={(e) =>
            setNewHotel({ ...newEntertainment, name: e.target.value })
          }
        />

        <input
          type="text"
          value={newEntertainment.map_link}
          placeholder={"map link"}
          onChange={(e) =>
            setNewHotel({ ...newEntertainment, address: e.target.value })
          }
        />

        <span> image </span>
        <input
          type="file"
          value={newEntertainment.image}
          placeholder={"image"}
          onChange={(e) =>
            setNewHotel({ ...newEntertainment, info: e.target.value })
          }
        />
        <input
          type="number"
          value={newEntertainment.category}
          placeholder={"category"}
          onChange={(e) =>
            setNewHotel({ ...newEntertainment, category: e.target.value })
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
