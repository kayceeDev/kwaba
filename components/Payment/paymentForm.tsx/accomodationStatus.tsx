/* eslint-disable react/no-unescaped-entities */
import Button from "./Button";
import { RentOptionWrapper } from "./FormStyles";
import DataHooks from "../../../hooks/data";

interface IProps {
  accomodationStatus :string
  handleChange: React.MouseEventHandler<HTMLButtonElement>
}

const AccomodationStatus = ({accomodationStatus, handleChange}: IProps) => {
  const { rentOptions } = DataHooks();

  return (
    <RentOptionWrapper>
      <p className="text">What's your accomodation status?</p>
      <div className="rent-option">
        {rentOptions.map((option, index) => (
          <div key={index}>
            <Button option={option} handleClick={handleChange} />
          </div>
        ))}
      </div>
    </RentOptionWrapper>
  );
};

export default AccomodationStatus;
