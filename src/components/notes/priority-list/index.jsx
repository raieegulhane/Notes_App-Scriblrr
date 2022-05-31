import "./priority-list.css";

const PriorityList = () => {
    return(
        <div className="priority-list-wrapper">
            <ul className="list-noBullets list-inline">
                <li>
                    <button 
                        className="priority-option"
                    >
                        High
                    </button>
                </li>
                <li>
                    <button 
                        className="priority-option"
                    >
                        Medium
                    </button>
                </li>
                <li>
                    <button 
                        className="priority-option"
                    >
                        Low
                    </button>
                </li>
            </ul>
        </div>
    );
}

export { PriorityList };
