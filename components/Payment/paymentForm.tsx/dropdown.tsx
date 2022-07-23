import DataHooks from "../../../hooks/data";

interface monthlyOptions {
  id: string;
  text: string;
}

interface IProps {
  handleChange? : (args0: string) => void;
  setPlan :  React.Dispatch<React.SetStateAction<string>>;
  setShowDropDown :  React.Dispatch<React.SetStateAction<boolean>>;
}
const DropDown= ({setPlan, setShowDropDown }: IProps) => {
  const { MONTHLYOPTIONS } = DataHooks();
  

  return <>
  {MONTHLYOPTIONS.map(({ id, text }:monthlyOptions) => (
    <div
      key={id}
      onClick={() => {
        
        setPlan(text);
        setShowDropDown(false);
        
      }}
    >
      {text}
    </div>
  ))}
  </>
};

export default DropDown;
