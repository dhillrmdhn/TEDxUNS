import React from "react";

const InputText = ({
  children,
  id,
  placeholder = "Fill Here",
  onChange,
  value,
  name,
  type = "text",
  error,
}) => {
  return (
    <div className="text-white-Normal w-full">
      <p className="text-[14px] md:text-p mb-1">{children}</p>
      <input
        className="w-full h-10 border rounded-xl text-[14px] md:text-p text-[#000000] outline-none font-Amiko pl-4"
        id={id}
        placeholder={placeholder}
        type={type}
        style={{ color: "black" }}
        onChange={onChange}
        name={name}
        value={value}
        required
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
};

export default InputText;
