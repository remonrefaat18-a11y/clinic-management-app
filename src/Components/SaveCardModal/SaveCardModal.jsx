import React, { useEffect } from "react";
import styles from "./SaveCardModal.module.css";
import { BiX } from "react-icons/bi";

function SaveCardModal({ open, onClose, children }) {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        if (onClose) onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={`${styles.card} ${styles.fadeIn}`}>
        <button className={styles.closeBtn} onClick={onClose}>
          <BiX />
        </button>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default SaveCardModal;
