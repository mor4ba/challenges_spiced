import "./styles.css";

export default function App() {
  return <Greeting name="Moritz" />;
}

function Greeting({ name }) {
  return <div>Hello {name == "Sven" ? "Coach!" : name}</div>;
}
