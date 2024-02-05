import { ButtonHTMLAttributes, FC } from "react"
import styles from "./index.module.scss"
import classNames from "classnames"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg"
  visual?: "primary" | "secondary" | "tertiary"
}

const Button: FC<ButtonProps> = ({
  size = "medium",
  visual = "primary",
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(styles.button, styles[size], styles[visual], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
