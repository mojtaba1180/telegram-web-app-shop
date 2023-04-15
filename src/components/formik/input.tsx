import { Field, FieldAttributes } from "formik";

type InputStyleProps = {
  e: boolean | undefined | string;
};

interface InputProps extends FieldAttributes<any> {
  name: string;
  error: string | boolean | undefined;
  errorText: string | undefined;
}

// eslint-disable-next-line object-curly-newline
function Input({ name, error, errorText, ...props }: InputProps) {
  const inputStyle = ({ e }: InputStyleProps) => {
    // eslint-disable-next-line operator-linebreak
    const style =
      "w-full h-10 bg-gray-500/20 focus:bg-gray-500/70 border-0 rounded-md text-gray-100 outline-none p-2";

    return `${style} ${e && "border-[1px] border-red-600 text-red-600  "}`;
  };

  return (
    <div className="flex h-14 flex-col text-right">
      <label
        className={`w-full text-left ${error && "text-red-600"} `}
        htmlFor={`${name}-id`}>
        {name}
      </label>
      <Field
        id={`${name}-id`}
        className={inputStyle({
          e: error
        })}
        name={name}
        {...props}
      />
      {error ? <div className="text-red-600">{errorText}</div> : null}
    </div>
  );
}

export default Input;
