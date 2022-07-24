
import {UtilityButtonWrapper} from "./utilityStyles"

interface IButton {
  green : "green",
  purple : "purple",
}

interface ButtonProps  {
  color: keyof IButton;
  text: string;
  onclick?: () => void;
};

const UtilityButton = ({color, text, onclick}: ButtonProps) => {
  return (
    <UtilityButtonWrapper
    className={`'button' ${color}`}
    type="submit"
    onClick={onclick}
    >
        {text}
    </UtilityButtonWrapper>
  )
}

export default UtilityButton