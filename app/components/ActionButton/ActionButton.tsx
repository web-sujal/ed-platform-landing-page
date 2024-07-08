import Link from "next/link";

import styles from "./ActionButton.module.css";

interface ActionButtonProps {
  href?: string;
  label?: string;
  icon?: React.ReactNode;
  padding?: string;
  borderRadius?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  href = "#",
  label,
  icon,
  padding = "15px 25px",
  borderRadius = "4px",
}) => {
  return (
    <Link href={href}>
      <button style={{ padding, borderRadius }} className={styles.container}>
        {label && label}
        {icon && icon}
      </button>
    </Link>
  );
};

export default ActionButton;
