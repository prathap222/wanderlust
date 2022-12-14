import React, { useState } from "react";
import Button from "@material-ui/core/Button";


const Form = props => {
  let addOrSubtract = "";
  const [inputValue, setInputValue] = useState("");

  console.log(`Form page: budget: ${props.budget}`)

  return (
    <form
      autoComplete="off"
      className="budget-input-form"
      onSubmit={e => {
        e.preventDefault();
        if (isNaN(inputValue)) return;
        if (addOrSubtract === "add") {
          props.setBudget(Number(props.budget) + Number(inputValue || 0));
          setInputValue("");
          return;
        }
        if (addOrSubtract === "subtract") {
          props.setBudget(Number(props.budget) - Number(inputValue || 0));
          setInputValue("");
          return;
        }
      }}
    >
      <label htmlFor="budget-input">
        {" "}
        {!addOrSubtract && !props.budget ? "Budget?" : "Change Budget?"}
      </label>

      <input
        className="input-budget"
        type="text"
        name="input-budget"
        value={inputValue}
        id="budget-input"
        onChange={e => {
          setInputValue(e.target.value);
        }}
      />
      {!addOrSubtract && !props.budget ? (
        <Button
          style={{ width: "5vw", background:"#E2F516" }}
          variant="contained"
          type="submit"
          onClick={() => {
            if (isNaN(inputValue)) return;
            props.setBudget(Number(inputValue) || 0);
            setInputValue("");
            addOrSubtract = "submitted";
          }}
        >
          Submit
        </Button>
      ) : (
        <div className="plus-minus">
          <Button
            style={{ width: "1vw", background:"#00FF00" }}
            variant="contained"
            type="submit"
            onClick={() => {
              addOrSubtract = "add";
            }}
          >
            +
          </Button>
          <Button
            style={{ background:"#C34A2C" }}
            variant="contained"
            type="submit"
            onClick={() => {
              addOrSubtract = "subtract";
            }}
          >
            -
          </Button>
        </div>
      )}
    </form>
  );
};

export default Form;
