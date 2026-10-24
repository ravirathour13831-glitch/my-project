// import React from "react";
function Key() {
  const arr = ["mouse", "keyboard", "printer", "monitor"];

  return (
    <div>
      {arr.map((s, index) => (
        <p key={index}>{s}</p>
      ))}
      <button onClick={(index)=>arr.slice(1,3)}>button</button>
    </div>
  );
}

export default Key;
