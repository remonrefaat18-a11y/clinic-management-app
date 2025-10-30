import styles from "./InputCard.module.css";

function InputCard({
  label,
  type,
  placeholder,
  value,
  onChange,
  name,
  onKeyDown,
  ref,
}) {
  return (
    <div className={styles.Input_container}>
      <label> {label}</label>
      <input
        ref={ref}
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

export default InputCard;
