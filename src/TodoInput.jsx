export default function TodoInput(props) {
  return (
    <header>
      <input
        className="inputField"
        placeholder="Enter todo..."
        onChange={props.onChange}
      />
      <button onClick={props.onSelect}>Add</button>
    </header>
  );
}
