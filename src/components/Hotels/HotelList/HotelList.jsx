import React, { useEffect, useState } from "react";
import { useServices } from "../../../contexts/ServicesContextProvider";
import "./HotelList.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Container } from "@mui/system";
import HotelCard from "../HotelCard/HotelCard";
import { MenuItem, Pagination, Select } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const options = [1, 2];

const HotelList = () => {
  const { getHotels, hotelList, itemCount, fetchByParams } = useServices();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('')
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
      q: search,
      page: page,
    });
  }, [page, search]);

  const handlePage = (p) => {
    setPage(p);
  };

  const [value, setValue] = React.useState(options[0]);

  return (
    <>
      <Container>
        <div className="div1">
          <div className="divv">
            <div className="search_inps">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              label="category"
              onChange={(e) => fetchByParams('category', e.target.value)}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>

              <TextField sx={{ml: 5}} type="text" placeholder="search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            {hotelList?.map((hotel, index) => (
              <HotelCard hotel={hotel} key={index} />
            ))}
          </div>
        </div>
        {hotelList?.length > 0 ? (
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
