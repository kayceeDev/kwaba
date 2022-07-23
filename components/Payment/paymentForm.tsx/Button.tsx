import { ButtonWrapper } from "./FormStyles"
interface IOption {
    option: string;
}

const Button = ({ option }:IOption) => {
  
  return (
    <ButtonWrapper value={option}>
        {option}
    </ButtonWrapper>
  )
}

export default Button