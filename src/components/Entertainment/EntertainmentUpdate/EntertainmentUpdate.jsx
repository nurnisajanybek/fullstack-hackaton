import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useServices } from "../../../contexts/ServicesContextProvider";

import "./EntertainmentUpdate.css";

const EntertainmentUpdate = ({ entertainment, setShowInps }) => {
  const { updateEntertainment, getEntertainment } = useServices();
  const [editedEntertainment, setEditedEntertainment] = useState({
    ...entertainment,
  });

  function handleSave() {
    if (typeof editedEntertainment.image == "string") {
      delete editedEntertainment.image;
    }
    updateEntertainment(editedEntertainment);
    // setShowInps(false);
  }

  return (
    <div className="update-inps">
      <TextField
        type="text"
        value={editedEntertainment.name}
        label="name"
        onChange={(e) =>
          setEditedEntertainment({
            ...editedEntertainment,
            name: e.target.value,
          })
        }
      />
      <TextField
        sx={{ marginTop: "10px" }}
        type="text"
        value={editedEntertainment.info}
        label="info"
        onChange={(e) =>
          setEditedEntertainment({
            ...editedEntertainment,
            info: e.target.value,
          })
        }
      />
      <TextField
        sx={{ marginTop: "10px" }}
        type="text"
        value={editedEntertainment.address}
        label="address:"
        onChange={(e) =>
          setEditedEntertainment({
            ...editedEntertainment,
            address: e.target.value,
          })
        }
      />
      <TextField
        sx={{ marginTop: "10px" }}
        type="text"
        value={editedEntertainment.hours}
        label="hours"
        onChange={(e) =>
          setEditedEntertainment({
            ...editedEntertainment,
            hours: e.target.value,
          })
        }
      />
      <input
        style={{ marginTop: "10px" }}
        type="file"
        label="image"
        onChange={(e) =>
          setEditedEntertainment({
            ...editedEntertainment,
            image: e.target.files[0],
          })
        }
      />
      <TextField
        sx={{ marginTop: "10px" }}
        type="text"
        value={editedEntertainment.map_link}
        label="map link"
        onChange={(e) =>
          setEditedEntertainment({
            ...editedEntertainment,
            map_link: e.target.value,
          })
        }
      />

      <TextField
        sx={{ marginTop: "10px" }}
        type="text"
        value={editedEntertainment.category}
        label=" category"
        onChange={(e) =>
          setEditedEntertainment({
            ...editedEntertainment,
            category: e.target.value,
          })
        }
      />

      <button onClick={handleSave}>SAVE</button>
    </div>
  );
};

export default EntertainmentUpdate;
