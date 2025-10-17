import React, { useState, useRef } from "react";
import styles from "./Added.module.css";
import InputCard from "../InputCard/InputCard";

function Added({ initial = [], placeholder, label, bgColor, textColor }) {
  const [items, setItems] = useState(initial);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  //Adding new item
  const addItem = function (text) {
    const trim = String(text).trim();
    if (!trim) return;
    if (items.includes(trim)) return setValue("");
    setItems((s) => [...s, trim]);
    setValue("");
  };

  //removing item
  const removeItem = function (index) {
    setItems((s) => s.filter((_, i) => i !== index));
    inputRef.current?.focus();
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addItem(value);
    } else if (e.key === "Backspace" && value === "") {
      setItems((s) => s.slice(0, -1));
    }
  };

  return (
    <div className={styles.container}>
      <label className={styles.section}>{label}</label>
      {/* ===========*/}
      <div className={styles.answers}>
        {items.map((it, i) => (
          <div
            key={it + i}
            className={styles.chip}
            style={{ backgroundColor: bgColor, color: textColor }}
          >
            <span className={styles.chipText}>{it}</span>
            <button
              type="button"
              aria-label={`Remove ${it}`}
              className={styles.chipRemove}
              onClick={() => removeItem(i)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      {/* ===== */}
      <div className={styles.inputs}>
        <div className={styles.input}>
          <InputCard
            type={"text"}
            placeholder={placeholder}
            value={value}
            name={"email"}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            ref={inputRef}
          />
        </div>
        <button
          type="button"
          className={styles.addBtn}
          onClick={() => addItem(value)}
          aria-label="Add language"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Added;
