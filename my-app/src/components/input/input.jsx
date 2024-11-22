import styles from "./input.module.css"
import cn from "classnames"
import { forwardRef } from "react"

// eslint-disable-next-line react/display-name, react/prop-types
const Input = forwardRef(({className, isValid, variant, ...props}, ref) => {
    return(
        <input 
        ref={ref}
        {...props}
        className={cn(styles.input, className ?? "", {
            [styles.invalid]: !isValid,
            [styles[variant]]: variant,
        })}
        />
    )
});

export default Input