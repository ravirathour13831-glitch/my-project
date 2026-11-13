
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import Useref from "./components/Useref";
import Carousel from "./components/Carousel";
import StarRating from "./components/StarRating";

// Notification functions
function showSuccess() {
  toast.success("Event Created Successfully!");
}

function showError() {
  toast.error("Something went wrong!");
}

function showInfo() {
  toast.info("Welcome to EventSphere!");
}

// Event data
const event = {
  title: "Lucknow Music Festival",
  slug: "lucknow-music-festival"
};

// Main App Component
function App() {

  const [showMessage, setShowMessage] = useState(false);

  const [name, setname] = useState([
    "ravi",
    "mushkan",
    "alok"
  ]);

  // Delete function using splice
  function deleteName(index) {

    const updatedNames = [...name];

    updatedNames.splice(index, 1);
    setname(updatedNames);

    

    toast.success("Name Deleted Successfully!");
  }

  return (
    <>
      {/* Notification */}
      <Toaster position="top-right" richColors />

      <div style={{ padding: "30px" }}>

        <h1>EventSphere Notifications</h1>

        <button onClick={showSuccess}>
          Success
        </button>

        <button onClick={showError}>
          Error
        </button>

        <button onClick={showInfo}>
          Info
        </button>

      </div>

      {/* Event Toggle */}
      <a
        href={`/events/${event.slug}`}
        onClick={(e) => {
          e.preventDefault();
          setShowMessage(prev => !prev);
        }}
      >
        {event.title}
      </a>

      {showMessage && (
        <h2>Abhi nahi hai event, pareshan mat ho!</h2>
      )}

      {/* Name List */}
      <h2>Users List</h2>

      {name.map((item, i) => (
        <div key={i}>

          <p>
            {item}

            <button  onClick={() => deleteName(i)}>
              Delete
            </button>
          </p>

        </div>
      ))}
      <Useref/>
      <Carousel/>
      <StarRating/>

    </>
  );
}

export default App;
