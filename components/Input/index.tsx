type InputType = {
  name: string;
  variant: string;
};

const InputComponent = ({ name, variant }: InputType) => {
  return (
    <input
      placeholder={name}
      className={`p-3 border rounded-md ${variant}`}
    />
  );
};

export default InputComponent;
