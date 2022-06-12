const sortByDateFunction = (notesArray, sortByDate) => {
    switch (sortByDate) {
        case false:
            return([ ...notesArray ]);

        case "NEWEST_FIRST": 
            return([ ...notesArray ].sort((note1, note2) => new Date(note2.noteTimestamp) - new Date(note1.noteTimestamp)));

        case "OLDEST_FIRST":
            return([ ...notesArray ].sort((note1, note2) => new Date(note1.noteTimestamp) - new Date(note2.noteTimestamp)));

        default:
            return([ ...notesArray ]);
    }
}

export { sortByDateFunction };