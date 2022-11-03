import Select from "react-select";
import { forwardRef } from "react";
import variables from "../../../styles/variables.module.scss";

const myStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "black",
    backgroundColor: state.isSelected ? variables.orange : variables.white,
    padding: "5px 10px",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: state.isSelected
        ? variables.orange
        : variables.lightgray,
    },
  }),
  control: (provides, state) => ({
    ...provides,
    borderRadius: "0",
    borderWidth: 1,
    borderColor: state.isFocused ? variables.orange : variables.gray,
    borderRadius: "5px",
    boxShadow: null,
    "&:hover": {
      borderColor: variables.orange,
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontWeight: "700",
    fontSize: "14px",
  }),
};

const CustomSelect = forwardRef((props, ref) => {
  return (
    <Select
      ref={ref}
      className="select"
      styles={myStyles}
      noOptionsMessage={() => "Доступных жанров нет"}
      //   isSearchable={false}
      maxMenuHeight={210}
      {...props}
    />
  );
});

export default CustomSelect;
