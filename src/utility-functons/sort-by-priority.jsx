const sortByPriorityFunction = (notesArray, sortByPriority) => {
    if (!sortByPriority) {
        return([ ...notesArray ]);
    }

    if (sortByPriority === "HIGH_TO_LOW") {
        return([ ...notesArray].sort((note1, note2) => note1.notePriority - note2.notePriority));
    }

    if (sortByPriority === "LOW_TO_HIGH") {
        return([ ...notesArray].sort((note1, note2) => note2.notePriority - note1.notePriority));
    }
}

export { sortByPriorityFunction };