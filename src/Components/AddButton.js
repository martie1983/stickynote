
function AddButton({add}) {

    return (
        <div className="add-sticky-notes" onClick = {() => add()}>
        <img alt = "Add Sticky Notes" src="./icons/add.png" />
      </div>
    );
}

export default AddButton;