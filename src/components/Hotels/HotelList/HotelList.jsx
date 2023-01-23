import React, { useEffect, useState } from "react";
import { useServices } from "../../../contexts/ServicesContextProvider";
import "./HotelList.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Container } from "@mui/system";
import HotelCard from "../HotelCard/HotelCard";
import { Pagination } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const options = ["Option 1", "Option 2"];

const HotelList = () => {
  const { getHotels, hotelList, itemCount } = useServices();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const count = Math.ceil(itemCount / itemsPerPage);

  useEffect(() => {
    getHotels();
  }, []);

  useEffect(() => {
    getHotels();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      page: page,
    });
  }, [page]);

  const handlePage = (p) => {
    setPage(p);
  };

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

            {hotelList?.map((hotel, index) => (
              <HotelCard hotel={hotel} key={index} />
            ))}
          </div>
        </div>
        {hotelList.length > 0 ? (
          <Pagination
            variant="outlined"
            shape="rounded"
            sx={{ m: "0 auto", my: 4 }}
            count={count}
            page={page}
            onChange={(e, p) => handlePage(p)}
          />
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

export default HotelList;
