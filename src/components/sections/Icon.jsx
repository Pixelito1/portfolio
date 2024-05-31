function Icon({ children, text }) {
  return (
    <li className="flex items-center  gap-1">
      {children}
      <p className="font-lora text-sm md:text-2xl">{text}</p>
    </li>
  );
}
export default Icon;
