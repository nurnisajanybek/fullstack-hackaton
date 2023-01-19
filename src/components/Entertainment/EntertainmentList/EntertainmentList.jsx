import React, { useEffect } from "react";
import { useServices } from "../../../contexts/ServicesContextProvider";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Container } from "@mui/system";
import EntertainmentCard from "../EntertainmentCard/EntertainmentCard";

const options = ["Option 1", "Option 2"];

const EntertainmentList = () => {
  const { getEntertainments, entertainmentList } = useServices();

  useEffect(() => {
    getEntertainments();
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

            {entertainmentList?.map((fun, index) => (
              <EntertainmentCard fun={fun} key={index} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default EntertainmentList;
