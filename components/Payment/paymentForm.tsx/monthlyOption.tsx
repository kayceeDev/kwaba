import { createRef, useEffect, useRef, useState } from "react";
import DropDown from "./dropdown";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from "react-icons/md";

const MonthlyOption = () => {
  const [plan, setPlan] = useState("Select Plan");
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropDown(false);
      }
    };

    document.addEventListener("mousedown", (e) => handleClickOutside(e));
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  useEffect(() => {
    if (dropdownRef.current !== null) {
      // dropdownRef.current.textContent = plan;
      console.log(plan);
    }
  }, [plan, dropdownRef]);

  return (
    <div>
      <div
        className="current-plan"
        onClick={() => setShowDropDown(!showDropDown)}
        ref={dropdownRef}
      >
        {plan}
        {showDropDown ? (
          <span>
            <MdKeyboardArrowUp />
          </span>
        ) : (
          <span>
            <MdKeyboardArrowDown />
          </span>
        )}
      </div>
      {showDropDown && (
        <div className="drop-down">
          <DropDown setPlan={setPlan} setShowDropDown={setShowDropDown} />
        </div>
      )}
    </div>
  );
};

export default MonthlyOption;
