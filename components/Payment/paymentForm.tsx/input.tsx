import { InputWrapper } from "./FormStyles";
interface Iprops {
  label: string;
  approve?: string;
  amount?: string;
  name?: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputComponent = ({
  label,
  approve,
  amount,
  handleChange,
  name,
}: Iprops) => {
  return (
    <InputWrapper approve={approve}>
      <div className="text">{label}</div>
      <input
        type="text"
        className="input"
        name={name}
        id="amount"
        pattern="^[1-9]+[0-9]*$"
        placeholder="Amount"
        value={amount}
        onChange={handleChange}
      />
      <div className="valid">✓</div>
      <div className="requirements">Amount should be a number</div>
    </InputWrapper>
  );
};

export default InputComponent;

// (?:[1-9]\d*|0)

// ^[1-9]+[0-9]*$
