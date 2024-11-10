
import { useState } from "react";

function UserInputForm({submit,close}) {
    return (
        <div className="center-wrapper">
      <section>
      <StickyNoteForm submit={submit} close={close}/>
     </section>
     </div>
    );
}

function StickyNoteForm({submit,close}) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Submitted:", text);
        submit(text);
        setText(""); // Clear input after submission
      };
    return (
        <form className="sticky-note-form" >
            <span onClick={() => close()} className="close-text" >❌</span>    
          <label>
                    
            <input
              type="text"
              placeholder="Write your Reminder..."
              value={text}
              onChange={(e) => setText(e.target.value)}              
            />
          </label>
          <button type="submit" onClick={handleSubmit}>Add Note</button>
        </form>
      );
}



export default UserInputForm;