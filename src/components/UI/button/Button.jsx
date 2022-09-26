function Button({ children, ...props }) {
  return (
    <button className="styledButton" {...props}>
      {children}
    </button>
  );
}

export default Button;
