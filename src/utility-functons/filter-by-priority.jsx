const filterByPriorityFunction = (notesArray, filterByPriority) => {
    const { HIGH, MEDIUM, LOW } = filterByPriority;

    if (!HIGH && !MEDIUM && !LOW) {
        return([ ...notesArray ]);
    }

    const filteredByPriorityNotes = [];

    if (HIGH) {
        const highPriorityNotes = [...notesArray].filter((note) => note.notePriority === "1");
        filteredByPriorityNotes.push(...highPriorityNotes);
    }

    if (MEDIUM) {
        const mediumPriorityNotes = [...notesArray].filter((note) => note.notePriority === "2");
        filteredByPriorityNotes.push(...mediumPriorityNotes);
    }

    if (LOW) {
        const lowPriorityNotes = [...notesArray].filter((note) => note.notePriority === "3");
        filteredByPriorityNotes.push(...lowPriorityNotes);
    }

    return [ ...filteredByPriorityNotes ];
}

export { filterByPriorityFunction };