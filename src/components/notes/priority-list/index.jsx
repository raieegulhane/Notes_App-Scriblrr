import { v4 as uuid } from "uuid";
import "./priority-list.css";

const priorityListValues = [
    {
        id: uuid(),
        priorityValue: "High"
    }, 
    {
        id: uuid(),
        priorityValue: "Medium"
    },
    {
        id: uuid(),
        priorityValue: "Low"
    }
];

const PriorityList = ({ onClick }) => {
    return(
        <div className="priority-list-wrapper">
            <ul className="list-noBullets list-inline">
                {
                    priorityListValues.map(({ id, priorityValue }) => {
                        return(
                            <li key={id}>
                                <button 
                                    className="priority-option"
                                    name="notePriority"
                                    value={priorityValue}
                                    onClick={onClick}    
                                >
                                    {priorityValue}
                                </button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export { PriorityList };