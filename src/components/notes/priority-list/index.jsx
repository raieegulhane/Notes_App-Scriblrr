import "./priority-list.css";
import { v4 as uuid } from "uuid";


const priorityListValues = [
    {
        id: uuid(),
        priority: "High",
        value: 1
    }, 
    {
        id: uuid(),
        priority: "Medium",
        value: 2
    },
    {
        id: uuid(),
        priority: "Low",
        value: 3
    }
];

const PriorityList = ({ onClick }) => {
    return(
        <div className="priority-list-wrapper">
            <ul className="list-noBullets list-inline">
                {
                    priorityListValues.map(({ id, priority, value }) => {
                        return(
                            <li key={id}>
                                <button 
                                    className="priority-option"
                                    name="notePriority"
                                    value={value}
                                    onClick={onClick}    
                                >
                                    {priority}
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