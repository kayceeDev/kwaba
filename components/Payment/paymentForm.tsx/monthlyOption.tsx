import { useEffect, useRef, useState } from "react";
import DropDown from "./dropdown";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { DropDownWrapper } from "./FormStyles";

interface Iprops {
  monthlyPlan?:string;
  handleChange: React.MouseEventHandler<HTMLButtonElement>
}

const MonthlyOption = ({monthlyPlan, handleChange}:Iprops) => {
  const [plan, setPlan] = useState("Select-plan");
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement| null>(null);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropDown(false);
      }
    };

    document.addEventListener("mousedown", (e) => handleClickOutside(e));
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);



  return (
    <DropDownWrapper>
      <p className="text">Choose a monthly plan</p>
      <div
        className="current-plan"
        onClick={() => setShowDropDown(!showDropDown)}
        ref={dropdownRef}
      >
       
      {monthlyPlan && monthlyPlan?.length > 0 ? monthlyPlan : plan}
        {showDropDown ? (
          <span>
            <MdKeyboardArrowUp />
          </span>
        ) : (
          <span>
            <MdKeyboardArrowDown />
          </span>
        )}
      {showDropDown && (
        <div className="drop-down">
          <DropDown handleChange={handleChange} setShowDropDown={setShowDropDown} />
        </div>
      )}
      </div>
    </DropDownWrapper>
  );
};

export default MonthlyOption;
