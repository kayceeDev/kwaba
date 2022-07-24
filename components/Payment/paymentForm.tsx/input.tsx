import { InputWrapper } from "./FormStyles";
interface Iprops {
  label: string;
}

const InputComponent = ({ label }: Iprops) => {
  return (
    <InputWrapper>
      <div className="text">{label}</div>
      <input
        type="text"
        className="input"
        name="amount"
        id="amount"
       pattern="^[1-9]+[0-9]*$"
        placeholder="Amount"
      />
      <div className="valid">✓</div>
      <div className="requirements">Amount should be a number</div>
    </InputWrapper>
  );
};

export default InputComponent;

// (?:[1-9]\d*|0)

// ^[1-9]+[0-9]*$
