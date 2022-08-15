import "./App.scss"; 
import Employees from "./components/Employees/Employess";
import team from "./data/team";

function App() {

  const mappedTeam = team.map((item) => {
        
    return <Employees employee = {item} />

  })

  return (

    <div className="App">
      <header className="App-header">
        <h1>Ticket Tracker</h1>
      </header>
      <section className="App-tickets">
      {mappedTeam}
      </section>
    </div>
  );
}

export default App;
