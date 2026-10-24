
import { useState } from "react";
import Counter from "./componans/counter";
import Navbar from "./componans/Navbar";
import AddUser from "./componans/addUser";
import Setuser from "./componans/setuser";

function App() {
  const [value, setValue] = useState(0);
   const [user , setuser] = useState("")


  return (
    <div>
      <Navbar value={value} />

      <Counter value={value} setValue={setValue} />
      <Counter value={value} setValue={setValue} />
      <AddUser user={user}/>
      <Setuser user={user} setuser={setuser}/>
    </div>
  );
}

export default App;
