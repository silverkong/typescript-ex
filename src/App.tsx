import Example from "./pages/Example";

function App() {
  const onClick = (name: string) => {
    alert(`${name} says Hello!`);
  };
  return (
    <div>
      <Example name="Silverkong" onClick={onClick} />
    </div>
  );
}

export default App;
