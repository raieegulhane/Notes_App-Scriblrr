import "./dropdowns.css";
import { useComponent } from "../../contexts";

const FilterDropdown = () => {

    const { componentDispatch } = useComponent();

    return(
        <div className="dropdown-container flex-col flex_justify-start">
            <button 
                className="btn btn-icon btn-close"
                onClick={() => componentDispatch({type: "SHOW_FILTER_DROPDOWN"})}
            >
                <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="dropdown-section flex-col flex_justify-start">
                <h4>Date:</h4>
                <label 
                    className="dropdown-label"
                    htmlFor="oldest-first"
                >
                    <input
                        className="dropdown-input" 
                        type="checkbox"
                        id="oldest-first"
                        name="sort_by_date"  
                    />
                    Oldest first
                </label>
                <label 
                    className="dropdown-label"
                    htmlFor="newest-first"
                >
                    <input
                        className="dropdown-input" 
                        type="checkbox"
                        id="newest-first"
                        name="sort_by_date"  
                    />
                    Newest first
                </label>
            </div>
        </div>
    );
}

const SortDropdown = () => {

    const { componentDispatch } = useComponent();

    return(
        <div className="dropdown-container flex-col flex_justify-start">
            <button 
                className="btn btn-icon btn-close"
                onClick={() => componentDispatch({type: "SHOW_SORT_DROPDOWN"})}
            >
                <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="dropdown-section flex-col flex_justify-start">
                <h4>Date:</h4>
                <label 
                    className="dropdown-label"
                    htmlFor="oldest-first"
                >
                    <input
                        className="dropdown-input" 
                        type="radio"
                        id="oldest-first"
                        name="sort_by_date"  
                    />
                    Oldest first
                </label>
                <label 
                    className="dropdown-label"
                    htmlFor="newest-first"
                >
                    <input
                        className="dropdown-input" 
                        type="radio"
                        id="newest-first"
                        name="sort_by_date"  
                    />
                    Newest first
                </label>
            </div>
            <div className="dropdown-section flex-col flex_justify-start">
                <h4>Priority:</h4>
                <label 
                    className="dropdown-label"
                    htmlFor="oldest-first"
                >
                    <input
                        className="dropdown-input" 
                        type="radio"
                        id="oldest-first"
                        name="sort_by_priority"  
                    />
                    High to low
                </label>
                <label 
                    className="dropdown-label"
                    htmlFor="newest-first"
                >
                    <input
                        className="dropdown-input" 
                        type="radio"
                        id="newest-first"
                        name="sort_by_priority"  
                    />
                    Low to high
                </label>
            </div>
        </div>
    );
}


export { FilterDropdown, SortDropdown };