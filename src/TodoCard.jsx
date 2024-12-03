export default function TodoCard(props) {
  return (
    <div>
      <li>
        <div>{props.children}</div>
      </li>
    </div>
  );
}
