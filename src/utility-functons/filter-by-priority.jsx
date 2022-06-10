const filterByPriorityFunction = (notesArray, filterByPriority) => {
    return filterByPriority ? 
        [ ...notesArray ].filter((note) => note.notePriority === filterByPriority) :
        [ ...notesArray ];
}

export { filterByPriorityFunction };