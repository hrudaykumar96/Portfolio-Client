"use client";

const InputField = ({
  type,
  name,
  value,
  error,
  placeholder,
  required,
  disable,
  onChangeTextarea,
  onChangeInputarea,
  onBlurTextarea,
  onBlurInput,
}: {
  type: string;
  name: string;
  value: string;
  error: string;
  placeholder: string;
  required: boolean;
  disable: boolean;
  onChangeTextarea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlurTextarea?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChangeInputarea?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurInput?: (e: React.FocusEvent<HTMLInputElement>) => void;
}) => {
  if (type === "textfield") {
    return (
      <>
        <textarea
          name={name}
          value={value}
          onChange={onChangeTextarea}
          placeholder={placeholder}
          onBlur={onBlurTextarea}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        ></textarea>
        {error && <p className="text-red-500 text-sm capitalize">{error}</p>}
      </>
    );
  }
  return (
    <>
      <input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        disabled={disable}
        onChange={onChangeInputarea}
        onBlur={onBlurInput}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm capitalize">{error}</p>}
    </>
  );
};

export default InputField;
