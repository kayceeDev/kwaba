/* eslint-disable react/no-unescaped-entities */
import Button from "./Button";
import { RentOptionWrapper } from "./FormStyles";
import DataHooks from "../../../hooks/data";

const AccomodationStatus = () => {
  const { rentOptions } = DataHooks();
  return (
    <RentOptionWrapper>
      <p>What's your accomodation status?</p>
      <div className="rent-option">
        {rentOptions.map((option, index) => (
          <div key={index}>
            <Button option={option} />
          </div>
        ))}
      </div>
    </RentOptionWrapper>
  );
};

export default AccomodationStatus;
