import React, { useEffect, useState } from "react";
import { useServices } from "../../../contexts/ServicesContextProvider";
import "./RestaurantList.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Container } from "@mui/system";
import { MenuItem, Pagination, Select } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import RestaurantCard from "../RestaurantCard/RestuarantCard";

const options = [1, 2];

const RestaurantList = () => {
  const { getRestaurants, restaurantList, itemCount, fetchByParams } =
    useServices();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const count = Math.ceil(itemCount / itemsPerPage);

  useEffect(() => {
    getRestaurants();
  }, []);

  useEffect(() => {
    getRestaurants();
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
                onChange={(e) => fetchByParams("category", e.target.value)}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>

              <TextField
                sx={{ ml: 5 }}
                type="text"
                placeholder="search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {restaurantList?.map((place, index) => (
              <RestaurantCard place={place} key={index} />
            ))}
          </div>
        </div>
        {restaurantList?.length > 0 ? (
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

export default RestaurantList;
