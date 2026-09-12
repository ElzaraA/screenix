import './Button.css'
function Button({children, variant = 'primary', type = 'button', onClick, className }){
    return(
        <button type={type}
        onClick = {onClick}
        className={`button button--${variant} ${className || ''}`}
        >
            {children}
        </button>
    )
}
export default Button