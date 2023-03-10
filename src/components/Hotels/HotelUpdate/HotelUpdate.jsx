import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useServices } from "../../../contexts/ServicesContextProvider";

import "./HotelUpdate.css";

const HotelUpdate = ({ hotel, setShowInps }) => {
  const { updateHotel, getHotel } = useServices();
  const [editedHotel, setEditedHotel] = useState({
    ...hotel,
  });

  function handleSave() {
    if (typeof editedHotel.image == "string") {
      delete editedHotel.image;
    }
    updateHotel(editedHotel);
    // setShowInps(false);
  }

  return (
    <div className="update-inps">
      <TextField
        type="text"
        value={editedHotel.name}
        label="name"
        onChange={(e) =>
          setEditedHotel({ ...editedHotel, name: e.target.value })
        }
      />
      <TextField
        sx={{ marginTop: "10px" }}
        type="text"
        value={editedHotel.info}
        label="info"
        onChange={(e) =>
          setEditedHotel({ ...editedHotel, info: e.target.value })
        }
      />

      <TextField
        sx={{ marginTop: "10px" }}
        type="text"
        value={editedHotel.address}
        label="address:"
        onChange={(e) =>
          setEditedHotel({ ...editedHotel, address: e.target.value })
        }
      />
      <TextField
        sx={{ marginTop: "10px" }}
        type="text"
        value={editedHotel.hours}
        label="hours"
        onChange={(e) =>
          setEditedHotel({ ...editedHotel, hours: e.target.value })
        }
      />
      <input
        style={{ marginTop: "10px" }}
        type="file"
        label="image"
        onChange={(e) =>
          setEditedHotel({ ...editedHotel, image: e.target.files[0] })
        }
      />
      <TextField
        sx={{ marginTop: "10px" }}
        type="text"
        value={editedHotel.map_link}
        label="map link"
        onChange={(e) =>
          setEditedHotel({ ...editedHotel, map_link: e.target.value })
        }
      />

     
      

      <TextField
        sx={{ marginTop: "10px" }}
        type="text"
        value={editedHotel.hotel_link}
        label="hotel link"
        onChange={(e) =>
          setEditedHotel({ ...editedHotel, hotel_link: e.target.value })
        }
      />
      <TextField
        sx={{ marginTop: "10px" }}
        type="text"
        value={editedHotel.price}
        label="price"
        onChange={(e) =>
          setEditedHotel({ ...editedHotel, price: e.target.value })
        }
      />

      <TextField
        sx={{ marginTop: "10px" }}
        type="text"
        value={editedHotel.category}
        label=" category"
        onChange={(e) =>
          setEditedHotel({ ...editedHotel, category: e.target.value })
        }
      />

      <button onClick={handleSave}>SAVE</button>
    </div>
  );
};

export default HotelUpdate;
