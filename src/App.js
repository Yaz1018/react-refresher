import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master react" />
      <Todo text="Explore entire React course" />
    </div>
  );
}

export default App;
