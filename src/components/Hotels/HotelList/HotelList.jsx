import React, { useEffect } from "react";
import { useServices } from "../../../contexts/ServicesContextProvider";
import "./HotelList.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Container } from "@mui/system";
import HotelCard from "../HotelCard/HotelCard";

const options = ["Option 1", "Option 2"];

const HotelList = () => {
  const { getHotels, hotelList } = useServices();

  useEffect(() => {
    getHotels();
  }, []);

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <>
      <Container>
        <div className="divv">
          <br />
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Controllable" />
            )}
          />

          {hotelList?.map((hotel, index) => (
            <HotelCard hotel={hotel} key={index} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default HotelList;
