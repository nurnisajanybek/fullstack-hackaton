import React, { useState } from "react";
import { useServices } from "../../contexts/ServicesContextProvider";

const AdminPage = () => {
  const { addHotel } = useServices();
  const [newHotel, setNewHotel] = useState({
    group: "hotel",
    name: "",
    info: "",
    address: "",
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
          onChange={(e) => setNewHotel({ ...newHotel, name: e.target.value })}
        />
        <input
          type="text"
          value={newHotel.info}
          onChange={(e) => setNewHotel({ ...newHotel, info: e.target.value })}
        />
        <input
          type="text"
          value={newHotel.address}
          onChange={(e) =>
            setNewHotel({ ...newHotel, address: e.target.value })
          }
        />
        <input
          type="number"
          value={newHotel.category}
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
