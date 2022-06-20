import {
    filterByPriorityFunction,
    filterByColorFunction,
    sortByPriorityFunction,
    sortByDateFunction
} from ".";


const getFilteredAndSortedNotes = (allNotesArray, filterState) => {
    const { filterByPriority, filterByColor, sortByPriority, sortByDate } = filterState;

    const notesFilteredByPriority = filterByPriorityFunction(allNotesArray, filterByPriority);
    const notesFilteredByColor = filterByColorFunction(notesFilteredByPriority, filterByColor);
    const notesSortedByPriority = sortByPriorityFunction(notesFilteredByColor, sortByPriority);
    const notesSortedByDate = sortByDateFunction(notesSortedByPriority, sortByDate);

    return notesSortedByDate;
}

export { getFilteredAndSortedNotes };