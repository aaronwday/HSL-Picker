import './App.css';

function App() {
  return (
    <div className="App">
        <p>
          Edit <code>My HSL Picker</code> and save to reload.
          H<input type="range" min="0" max="350"/>
          S<input type="range" min="0" max="100"/>
          L<input type="range" min="0" max="100"/>
        </p>
        </div>
  );
}

export default App;
