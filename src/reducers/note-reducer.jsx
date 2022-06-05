const initialNotesData = {
    allNotes: [],
    archive: [],
    trash: [],
    pinned: [],
    labels: [],
};

const noteReducer = () => {
    

    // default:
        return({ ...initialNotesData });

}

export { initialNotesData, noteReducer };