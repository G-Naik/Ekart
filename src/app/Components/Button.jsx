
const Button = ({type,classname,children,id,onclick}) => {
  return (
    <button
        type={type}
        id={id}
        className={classname?`${classname}`:""}
        onClick={onclick}
    >
        {children}
    </button>
  )
}
export default Button