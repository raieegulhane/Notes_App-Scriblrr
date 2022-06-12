const sortByPriorityFunction = (notesArray, sortByPriority) => {
    switch (sortByPriority) {
        case false: 
            return([ ...notesArray ]);

        case "HIGH_TO_LOW":
            return([ ...notesArray].sort((note1, note2) => note1.notePriority - note2.notePriority));

        case "LOW_TO_HIGH":
            return([ ...notesArray].sort((note1, note2) => note2.notePriority - note1.notePriority));

        default:
            return([ ...notesArray ]);
    }
}

export { sortByPriorityFunction };