function Button({ name, increment }) {
  return (
    <button type="button" onClick={increment}>
      {name}
    </button>
  );
}
export default Button;
