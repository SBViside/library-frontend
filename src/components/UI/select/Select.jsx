import Select from "react-select";
import variables from "../../../styles/variables.module.scss";

function CustomSelect(props) {
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

  return <Select {...props} className="select" styles={myStyles} />;
}

export default CustomSelect;
