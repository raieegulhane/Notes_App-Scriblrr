import "./dropdowns.css";
import { useFilter, useComponent } from "../../contexts";
import { colorsArray } from "../notes/color-palette/colors";


const FilterDropdown = () => {

    const { filterState, filterDispatch } = useFilter();
    const { filterByPriority: {HIGH, MEDIUM, LOW} } = filterState;

    const { componentDispatch } = useComponent();

    return(
        <div className="dropdown-container flex-col flex_justify-start">
            <button 
                className="btn btn-icon btn-close"
                onClick={() => componentDispatch({type: "SHOW_FILTER_DROPDOWN"})}
            >
                <i className="fa-solid fa-xmark"></i>
            </button>

            {/* filter by priority */}
            <div className="dropdown-section flex-col flex_justify-start">
                <h4 className="dropdown-label-heading">Priority:</h4>
                <label 
                    className="dropdown-label"
                    htmlFor="priority_high"
                >
                    <input
                        id="priority_high"
                        className="dropdown-input" 
                        type="checkbox"
                        name="filter-by-priority"  
                        value="1"
                        checked={HIGH}
                        onChange={() => filterDispatch({ type: "PRIORITY_HIGH" })}
                    />
                    High
                </label>
                <label 
                    className="dropdown-label"
                    htmlFor="priority_medium"
                >
                    <input
                        id="priority_medium"
                        className="dropdown-input" 
                        type="checkbox"
                        name="filter-by-priority"  
                        value="2"
                        checked={MEDIUM}
                        onChange={() => filterDispatch({ type: "PRIORITY_MEDIUM" })}
                    />
                    Medium
                </label>
                <label 
                    className="dropdown-label"
                    htmlFor="priority_low"
                >
                    <input
                        id="priority_low"
                        className="dropdown-input" 
                        type="checkbox"
                        name="filter-by-priority"  
                        value="3"
                        checked={LOW}
                        onChange={() => filterDispatch({ type: "PRIORITY_LOW" })}
                    />
                    Low
                </label>
            </div>

            {/* filter by colors */}
            <div className="dropdown-section flex-col flex_justify-start">
                <h4 className="dropdown-label-heading">Colors:</h4>
                <div className="filter-colors-options flex-row">
                {
                    colorsArray.map(({ id, color }) => {
                        return(
                            <button 
                                key={id}
                                className="color-option"
                                value={color}
                                style={{ backgroundColor: color }}
                                onClick={() => filterDispatch({ type: "FILTER_BY_COLOR", payload: color})}
                            ></button>
                        );
                    })
                }
                </div>
            </div>

            <div className="clear-btn-container flex-col ">
                <button 
                    className="clear-btn"
                    onClick={() => filterDispatch({ type: "CLEAR_COLOR_FILTER" })}    
                >
                    Show All Colors
                </button>
                <button 
                    className="clear-btn"
                    onClick={() => filterDispatch({ type: "CLEAR_FILTERS" })}    
                >
                    Clear Filters
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

export { FilterDropdown };