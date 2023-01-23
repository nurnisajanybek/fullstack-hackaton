import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useServices } from "../../../contexts/ServicesContextProvider";

import "./RestaurantUpdate.css";

const RestaurantUpdate = ({ restaurant, setShowInps }) => {
  const { updateRestaurant, getRestaurant } = useServices();
  const [editedRestaurant, setEditedRestaurant] = useState({
    ...restaurant,
  });

  function handleSave() {
    if (typeof editedRestaurant.image == "string") {
      delete editedRestaurant.image;
    }
    updateRestaurant(editedRestaurant);
    // setShowInps(false);
  }

  return (
    <div className="update-inps">
      <TextField
        type="text"
        value={editedRestaurant.name}
        label="name"
        onChange={(e) =>
          setEditedRestaurant({ ...editedRestaurant, name: e.target.value })
        }
      />
      <TextField
        sx={{ marginTop: "10px" }}
        type="text"
        value={editedRestaurant.info}
        label="info"
        onChange={(e) =>
          setEditedRestaurant({ ...editedRestaurant, info: e.target.value })
        }
      />
      <TextField
        sx={{ marginTop: "10px" }}
        type="text"
        value={editedRestaurant.address}
        label="address:"
        onChange={(e) =>
          setEditedRestaurant({ ...editedRestaurant, address: e.target.value })
        }
      />
      <TextField
        sx={{ marginTop: "10px" }}
        type="text"
        value={editedRestaurant.hours}
        label="hours"
        onChange={(e) =>
          setEditedRestaurant({ ...editedRestaurant, hours: e.target.value })
        }
      />
      <input
        style={{ marginTop: "10px" }}
        type="file"
        label="image"
        onChange={(e) =>
          setEditedRestaurant({ ...editedRestaurant, image: e.target.files[0] })
        }
      />
      <TextField
        sx={{ marginTop: "10px" }}
        type="text"
        value={editedRestaurant.map_link}
        label="map link"
        onChange={(e) =>
          setEditedRestaurant({ ...editedRestaurant, map_link: e.target.value })
        }
      />
      <TextField
        sx={{ marginTop: "10px" }}
        type="text"
        value={editedRestaurant.place_link}
        label="restaurant link"
        onChange={(e) =>
          setEditedRestaurant({
            ...editedRestaurant,
            place_link: e.target.value,
          })
        }
      />
      <TextField
        sx={{ marginTop: "10px" }}
        type="text"
        value={editedRestaurant.avg_price}
        label="price"
        onChange={(e) =>
          setEditedRestaurant({
            ...editedRestaurant,
            avg_price: e.target.value,
          })
        }
      />
      <TextField
        sx={{ marginTop: "10px" }}
        type="text"
        value={editedRestaurant.category}
        label=" category"
        onChange={(e) =>
          setEditedRestaurant({ ...editedRestaurant, category: e.target.value })
        }
      />
      <TextField
        sx={{ marginTop: "10px" }}
        type="text"
        value={editedRestaurant.sub_category}
        label=" category"
        onChange={(e) =>
          setEditedRestaurant({
            ...editedRestaurant,
            sub_category: e.target.value,
          })
        }
      />

      <button onClick={handleSave}>SAVE</button>
    </div>
  );
};

export default RestaurantUpdate;
