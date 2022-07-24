/* eslint-disable react/no-unescaped-entities */
import Button from "./Button";
import { RentOptionWrapper } from "./FormStyles";
import DataHooks from "../../../hooks/data";

const AccomodationStatus = () => {
  const { rentOptions } = DataHooks();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
  }
  return (
    <RentOptionWrapper>
      <p className="text">What's your accomodation status?</p>
      <div className="rent-option">
        {rentOptions.map((option, index) => (
          <div key={index}>
            <Button option={option} handleClick={handleClick} />
          </div>
        ))}
      </div>
    </RentOptionWrapper>
  );
};

export default AccomodationStatus;
