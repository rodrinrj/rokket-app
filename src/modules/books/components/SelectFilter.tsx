import React from "react";
import { Radio } from "antd";
import { Filter } from "../models/Filter";
import { RadioChangeEvent } from "antd/lib/radio";
import filters from "../services/selectFilter.service";

interface SelectFilterProps {
  filter: Filter;
  onChange: (event: RadioChangeEvent) => void;
}

const SelectFilter: React.FC<SelectFilterProps> = ({ filter, onChange }) => {
  return (
    <Radio.Group value={filter} onChange={onChange}>
      <Radio.Button value={filters.allBooks}>Todos</Radio.Button>
      <Radio.Button value={filters.readingBooks}>Leyendo</Radio.Button>
      <Radio.Button value={filters.wishingBooks}>Por leer</Radio.Button>
      <Radio.Button value={filters.finishedBooks}>Finalizados</Radio.Button>
    </Radio.Group>
  );
};

export default SelectFilter;
