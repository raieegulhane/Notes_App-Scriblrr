import "./priority-display.css";

const PriorityDisplay = ({ notePriority }) => {
    return(
        <div className="priority-display-wrapper">
            {
                notePriority === "3" &&
                <div className="flex-row">

                    <i className="fa-solid fa-exclamation priority-icon"></i>
                </div>
            }
            {
                notePriority === "2" &&
                <div className="flex-row">
                    <i className="fa-solid fa-exclamation priority-icon"></i>
                    <i className="fa-solid fa-exclamation priority-icon"></i>
                </div>
            }
            {
                notePriority === "1" &&
                <div className="flex-row">
                    <i className="fa-solid fa-exclamation priority-icon"></i>
                    <i className="fa-solid fa-exclamation priority-icon"></i>
                    <i className="fa-solid fa-exclamation priority-icon"></i>
                </div>
            }
        </div>
    );
}

export { PriorityDisplay };