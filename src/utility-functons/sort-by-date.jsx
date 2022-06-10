const sortByDateFunction = (notesArray, sortByDate) => {
    if (!sortByDate) {
        return([ ...notesArray ]);
    }

    if (sortByDate === "NEWEST_FIRST") {
        return([ ...notesArray ].sort((note1, note2) => note2.noteTimestamp - note1.noteTimestamp));
    }

    if (sortByDate === "OLDEST_FIRST") {
        return([ ...notesArray ].sort((note1, note2) => note1.noteTimestamp - note2.noteTimestamp));
    }
}

export { sortByDateFunction };