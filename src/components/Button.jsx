const Button = ({
  label,
  backgroundColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-10 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor}`
          : "bg-black text-white"
      } rounded-md ${fullWidth && "w-full"}`}
    >
      {label}

    
    </button>
  );
};

export default Button;
