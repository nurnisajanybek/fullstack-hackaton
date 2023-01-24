import React, { useEffect, useState } from "react";
import { useServices } from "../../../contexts/ServicesContextProvider";
import "./EntertainmentList.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Container } from "@mui/system";
import { MenuItem, Pagination, Select } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import EntertainmentCard from "../EntertainmentCard/EntertainmentCard";

const options = [1, 2];

const EntertainmentList = () => {
  const { getEntertainments, entertainmentList, itemCount, fetchByParams } =
    useServices();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const count = Math.ceil(itemCount / itemsPerPage);

  useEffect(() => {
    getEntertainments();
  }, []);

  useEffect(() => {
    getEntertainments();
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
            {entertainmentList?.map((fun, index) => (
              <EntertainmentCard fun={fun} key={index} />
            ))}
          </div>
        </div>
        {entertainmentList?.length > 0 ? (
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

export default EntertainmentList;
