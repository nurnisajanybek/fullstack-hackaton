import { Button, TextField } from "@mui/material";
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
        <h3 className="add-hotel">Add hotel</h3>

        <TextField
          defaultValue="Small"
          size="small"
          className="input"
          id="outlined-password-input"
          label=" Name"
          type="name"
          value={newHotel.name}
          autoComplete="current-password"
          onChange={(e) => setNewHotel({ ...newHotel, name: e.target.value })}
        />
        <TextField
          defaultValue="Small"
          size="small"
          className="input"
          id="outlined-password-input"
          label="Info"
          type="info"
          autoComplete="current-password"
          value={newHotel.info}
          onChange={(e) => setNewHotel({ ...newHotel, info: e.target.value })}
        />
        <TextField
          defaultValue="Small"
          size="small"
          className="input"
          id="outlined-password-input"
          label="address"
          type="address"
          autoComplete="current-password"
          value={newHotel.address}
          onChange={(e) =>
            setNewHotel({ ...newHotel, address: e.target.value })
          }
        />
        <TextField
          defaultValue="Small"
          size="small"
          className="input"
          id="outlined-password-input"
          label="Hours"
          type="hours"
          autoComplete="current-password"
          value={newHotel.hours}
          onChange={(e) => setNewHotel({ ...newHotel, hours: e.target.value })}
        />
        <TextField
          defaultValue="Small"
          size="small"
          className="input"
          id="outlined-password-input"
          label="Map link"
          type="map link"
          autoComplete="current-password"
          value={newHotel.map_link}
          onChange={(e) =>
            setNewHotel({ ...newHotel, map_link: e.target.value })
          }
        />

        <TextField
          defaultValue="Small"
          size="small"
          className="input"
          id="outlined-password-input"
          label="Price"
          type="price"
          autoComplete="current-password"
          value={newHotel.price}
          onChange={(e) => setNewHotel({ ...newHotel, price: e.target.value })}
        />

        {/* <TextField id="standard-basic" label="Image" variant="standard" /> */}
        <input
          className="input"
          type="file"
          // value={newHotel.image}
          placeholder={"image"}
          accept="image/*"
          onChange={(e) =>
            setNewHotel({ ...newHotel, image: e.target.files[0] })
          }
        />

        <TextField
          sx={{ marginTop: "10px" }}
          defaultValue="Small"
          size="small"
          className="inputt"
          id="outlined-number"
          label="Category"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={newHotel.category}
          onChange={(e) =>
            setNewHotel({ ...newHotel, category: e.target.value })
          }
        />

        <Button
          type="submit"
          variant="contained"
          onClick={(e) => handleAddHotel(e)}
        >
          {" "}
          Add
        </Button>
      </form>

      {/* restaurants */}
      <form action="">
        <h3 className="add-rest">Add restaurant</h3>
        <TextField
          defaultValue="Small"
          size="small"
          className="input"
          id="outlined-password-input"
          label=" Name"
          type="name"
          value={newRestaurant.name}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, name: e.target.value })
          }
        />

        <TextField
          defaultValue="Small"
          size="small"
          className="input"
          id="outlined-password-input"
          label=" Info"
          type="info"
          value={newRestaurant.info}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, info: e.target.value })
          }
        />
        <TextField
          defaultValue="Small"
          size="small"
          className="input"
          id="outlined-password-input"
          label="Address "
          type="address"
          value={newRestaurant.address}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, address: e.target.value })
          }
        />
        <TextField
          defaultValue="Small"
          size="small"
          className="input"
          id="outlined-password-input"
          label="Hours"
          type="hours"
          value={newRestaurant.hours}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, hours: e.target.value })
          }
        />

        <TextField
          defaultValue="Small"
          size="small"
          className="input"
          id="outlined-password-input"
          label=" Map link"
          type="map link"
          value={newRestaurant.map_link}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, map_link: e.target.value })
          }
        />

        <TextField
          defaultValue="Small"
          size="small"
          className="input"
          id="outlined-password-input"
          label="Place link"
          type="place link"
          value={newRestaurant.place_link}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, place_link: e.target.value })
          }
        />
        <TextField
          defaultValue="Small"
          size="small"
          className="input"
          id="outlined-password-input"
          label="Place"
          type="place"
          value={newRestaurant.avg_price}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, avg_price: e.target.value })
          }
        />

        {/*   */}

        {/* <TextField id="standard-basic" label="Image" variant="standard" /> */}
        <input
          className="input"
          type="file"
          // value={newRestaurant.image}
          placeholder={"image"}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, image: e.target.files[0] })
          }
        />
        <TextField
          sx={{ marginTop: "10px" }}
          defaultValue="Small"
          size="small"
          className="inputt"
          id="outlined-number"
          label="Category"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={newRestaurant.category}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, category: e.target.value })
          }
        />
        <TextField
          sx={{ marginTop: "10px" }}
          defaultValue="Small"
          size="small"
          className="input"
          id="outlined-number"
          label="Category"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={newRestaurant.sub_category}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, sub_category: e.target.value })
          }
        />

        <Button
          type="submit"
          variant="contained"
          onClick={(e) => handleAddRestaurant(e)}
        >
          {" "}
          Add
        </Button>
      </form>

      {/* entertainment */}
      <form action="">
        <h3 className="add-enter">Add entertainment</h3>
        <TextField
          defaultValue="Small"
          size="small"
          className="input"
          id="outlined-password-input"
          label="Name"
          type="name"
          value={newEntertainment.name}
          onChange={(e) =>
            setNewEntertainment({ ...newEntertainment, name: e.target.value })
          }
        />

        <TextField
          defaultValue="Small"
          size="small"
          className="input"
          id="outlined-password-input"
          label="Info"
          type="info"
          value={newEntertainment.info}
          onChange={(e) =>
            setNewEntertainment({ ...newEntertainment, info: e.target.value })
          }
        />

        <TextField
          defaultValue="Small"
          size="small"
          className="input"
          id="outlined-password-input"
          label="Address"
          type="address"
          value={newEntertainment.address}
          onChange={(e) =>
            setNewEntertainment({
              ...newEntertainment,
              address: e.target.value,
            })
          }
        />

        <TextField
          defaultValue="Small"
          size="small"
          className="input"
          id="outlined-password-input"
          label="Hours"
          type="hours"
          value={newEntertainment.hours}
          onChange={(e) =>
            setNewEntertainment({ ...newEntertainment, hours: e.target.value })
          }
        />

        <TextField
          defaultValue="Small"
          size="small"
          className="input"
          id="outlined-password-input"
          label="Map link"
          type="map link"
          value={newEntertainment.map_link}
          onChange={(e) =>
            setNewEntertainment({
              ...newEntertainment,
              map_link: e.target.value,
            })
          }
        />

        {/* <TextField id="standard-basic" label="Image" variant="standard" /> */}
        <input
          className="input"
          type="file"
          // value={newEntertainment.image}
          placeholder={"image"}
          onChange={(e) =>
            setNewEntertainment({
              ...newEntertainment,
              image: e.target.files[0],
            })
          }
        />

        <TextField
          sx={{ marginTop: "10px" }}
          defaultValue="Small"
          size="small"
          className="inputt"
          id="outlined-number"
          label="Category"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={newEntertainment.category}
          onChange={(e) =>
            setNewEntertainment({
              ...newEntertainment,
              category: e.target.value,
            })
          }
        />

        <Button
          type="submit"
          variant="contained"
          onClick={(e) => handleAddEntertainment(e)}
        >
          {" "}
          Add
        </Button>
      </form>
    </div>
  );
};

export default AdminPage;
