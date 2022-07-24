import DataHooks from "../../../hooks/data";

interface monthlyOptions {
  id: string;
  text: string;
}

interface IProps {
  handleChange: React.MouseEventHandler<HTMLButtonElement>
  setShowDropDown :  React.Dispatch<React.SetStateAction<boolean>>;
}
const DropDown= ({handleChange, setShowDropDown }: IProps) => {
  const { MONTHLYOPTIONS } = DataHooks();
  

  return <>
  {MONTHLYOPTIONS.map(({ id, text }:monthlyOptions) => (
    <button className="drop-down-item"
      key={id}
      name="monthlyPlan"
      value={text}
      onClick={handleChange}>
      { text}
    </button>
  ))}
  </>
};

export default DropDown;
