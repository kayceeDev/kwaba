import { ButtonWrapper } from "./FormStyles"
interface IOption {
    option: string;
    handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ option, handleClick }:IOption) => {
  
  return (
    <ButtonWrapper value={option} name="accomodationStatus" onClick={handleClick}>
        {option}
    </ButtonWrapper>
  )
}

export default Button