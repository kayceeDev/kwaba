import { InputWrapper } from "./FormStyles";
interface Iprops {
  label: string;
}

const InputComponent = ({ label }: Iprops) => {
  return (
    <InputWrapper>
      <div>{label}</div>
      <input
        type="number"
        className="input"
        name="amount"
        id="amount"
        min="0"
        step="1"
        placeholder="Amount"
      />
      <div className="valid">✓</div>
      <div className="requirements">amount should be a number</div>
    </InputWrapper>
  );
};

export default InputComponent;

// (?:[1-9]\d*|0)

// ^[1-9]+[0-9]*$
