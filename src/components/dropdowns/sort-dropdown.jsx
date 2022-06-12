import "./dropdowns.css";
import { useFilter, useComponent } from "../../contexts";


const SortDropdown = () => {

    const { filterState: { sortByPriority, sortByDate }, filterDispatch } = useFilter();
    const { componentDispatch } = useComponent();

    return(
        <div className="dropdown-container flex-col flex_justify-start">
            <button 
                className="btn btn-icon btn-close"
                onClick={() => componentDispatch({type: "SHOW_SORT_DROPDOWN"})}
            >
                <i className="fa-solid fa-xmark"></i>
            </button>
            
            {/* fiter by priority */}
            <div className="dropdown-section flex-col flex_justify-start">
                <h4>Priority:</h4>
                <label 
                    className="dropdown-label"
                    htmlFor="high-to-low"
                >
                    <input
                        id="high-to-low"
                        className="dropdown-input" 
                        type="radio"
                        name="sort"  
                        value="high-to-low"
                        checked={ sortByPriority === "HIGH_TO_LOW" }
                        onChange={() => filterDispatch({ type: "SORT_BY_PRIORITY", payload: "HIGH_TO_LOW"})}
                    />
                    High to low
                </label>
                <label 
                    className="dropdown-label"
                    htmlFor="low-to-high"
                >
                    <input
                        id="low-to-high"
                        className="dropdown-input" 
                        type="radio"
                        name="sort"  
                        value="low-to-high"
                        checked={ sortByPriority === "LOW_TO_HIGH" }
                        onChange={() => filterDispatch({ type: "SORT_BY_PRIORITY", payload: "LOW_TO_HIGH"})}
                    />
                    Low to high
                </label>
            </div>

            {/* filter by date */}
            <div className="dropdown-section flex-col flex_justify-start">
                <h4>Date:</h4>
                <label 
                    className="dropdown-label"
                    htmlFor="newest-first"
                >
                    <input
                        id="newest-first"
                        className="dropdown-input" 
                        type="radio"
                        name="sort"
                        value="newest-first" 
                        checked={ sortByDate === "NEWEST_FIRST" }
                        onChange={() => filterDispatch({ type: "SORT_BY_DATE", payload: "NEWEST_FIRST"})}
                    />
                    Newest first
                </label>
                <label 
                    className="dropdown-label"
                    htmlFor="oldest-first"
                >
                    <input
                        id="oldest-first"
                        className="dropdown-input" 
                        type="radio"
                        name="sort"  
                        value="oldest-first"
                        checked={ sortByDate === "OLDEST_FIRST" }
                        onChange={() => filterDispatch({ type: "SORT_BY_DATE", payload: "OLDEST_FIRST"})}
                    />
                    Oldest first
                </label>
            </div>

            <div className="clear-btn-container flex-col ">
                <button 
                    className="clear-btn"
                    onClick={() => filterDispatch({ type: "CLEAR_SORT" })}    
                >
                    Clear Sort Options
                </button>
                <button 
                    className="clear-btn"
                    onClick={() => filterDispatch({ type: "CLEAR_ALL" })}    
                >
                    Clear All
                </button>
            </div>
        </div>
    );
}

export { SortDropdown };