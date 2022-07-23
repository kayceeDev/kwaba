import React, { useId } from "react";

const DataHooks = () => {
  const rentOptions: string[] = [
    "Looking to renew my rent",
    "Want to pay for a new place",
    "I'm still searching",
  ];

  const MONTHLYOPTIONS = [
    {
      id: useId(),
      text: "1 Month",
    },
    {
      id: useId(),
      text: "2 Months",
    },
    {
      id: useId(),
      text: "3 Months",
    },
    {
      id: useId(),
      text: "4 Months",
    },
    {
      id: useId(),
      text: "5 Months",
    },
    {
      id: useId(),
      text: "6 Months",
    },
    {
      id: useId(),
      text: "7 Months",
    },
    {
      id: useId(),
      text: "8 Months",
    },
    {
      id: useId(),
      text: "9 Months",
    },
    {
      id: useId(),
      text: "10 Months",
    },
    {
      id: useId(),
      text: "11 Months",
    },
    {
      id: useId(),
      text: "12 Months",
    },
  ];

  return {
    rentOptions,
    MONTHLYOPTIONS,
  };
};

export default DataHooks;
