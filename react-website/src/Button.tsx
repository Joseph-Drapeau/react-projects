interface ButtonProps {
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }): JSX.Element => {
  return (
    <button className='' type='submit'>
      {children}
    </button>
  );
};

export default Button;
