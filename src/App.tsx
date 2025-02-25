import "./App.css";
import { Person, Countries } from "./Person";
// import { User } from "./User";
import { UserProvider } from "./UserContextProvider";

function App() {
  return (
    <UserProvider>
      <Person name={"Lahiru"} age={27} isMarried={false} country={Countries.SL} />
      {/* <User name={"Lahiru"} age={27} isMarried={false} /> */}
    </UserProvider>
  );
}

export default App;
