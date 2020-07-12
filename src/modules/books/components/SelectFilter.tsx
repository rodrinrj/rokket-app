import React from "react";
import { Radio } from "antd";
import { Filter } from "../models/Filter";
import { BookFilters } from "../../../redux-store/filter/Filter.actions";
import { RadioChangeEvent } from "antd/lib/radio";

interface SelectFilterProps {
  filter: Filter;
  onChange: (event: RadioChangeEvent) => void;
}

const SelectFilter: React.FC<SelectFilterProps> = ({ filter, onChange }) => {
  const allBooks: Filter = {
    title: "Todos",
    value: BookFilters.ALL_BOOKS_FILTER,
  };
  const readingBooks: Filter = {
    title: "Leyendo",
    value: BookFilters.READING_FILTER,
  };
  const wishingBooks: Filter = {
    title: "Por leer",
    value: BookFilters.WISHING_FILTER,
  };
  const finishedBooks: Filter = {
    title: "Finalizados",
    value: BookFilters.FINISHED_FILTER,
  };

  return (
    <Radio.Group value={filter} onChange={onChange}>
      <Radio.Button value={allBooks}>Todos</Radio.Button>
      <Radio.Button value={readingBooks}>Leyendo</Radio.Button>
      <Radio.Button value={wishingBooks}>Por leer</Radio.Button>
      <Radio.Button value={finishedBooks}>Finalizados</Radio.Button>
    </Radio.Group>
  );
};

export default SelectFilter;
