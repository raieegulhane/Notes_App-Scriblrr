const filterByColorFunction = (notesArray, filterByColor) => {
    return filterByColor ?
        [...notesArray].filter((note) => note.noteColor === filterByColor) :
        [ ...notesArray ];
}

export { filterByColorFunction };