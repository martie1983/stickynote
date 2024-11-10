
import { useState } from "react";

function NoteItem({note, onDelete}) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
      };
    return (
    <div className="note-item">
       <div className="pin">📌</div>
       <div onClick={toggleMenu} className="item-menu">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
        </svg>
{isMenuOpen && (
        <div className="menu-options">
          <p onClick={() => onDelete(note.id)}>Delete!</p>
          <p onClick={() => alert("Option 2 clicked")}>Urgent!</p>          
        </div>
      )}
       </div>
       <p>{note.note}</p>
    </div>
    );
}

export default NoteItem;