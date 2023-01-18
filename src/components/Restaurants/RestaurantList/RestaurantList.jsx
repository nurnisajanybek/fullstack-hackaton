import React, { useEffect } from "react";
import { useServices } from "../../../contexts/ServicesContextProvider";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Container } from "@mui/system";
import RestaurantCard from "../RestaurantCard/RestuarantCard";

const options = ["Option 1", "Option 2"];

const RestaurantList = () => {
  const { getRestaurants, restaurantList } = useServices();

  useEffect(() => {
    getRestaurants();
  }, []);

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <>
      <Container>
        <div className="div1">
          <div className="divv">
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

            {restaurantList?.map((place, index) => (
              <RestaurantCard place={place} key={index} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default RestaurantList;
