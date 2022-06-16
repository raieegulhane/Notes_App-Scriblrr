import "./secondary-nav.css";
import { useNote, useComponent } from "../../../contexts";
import { SortDropdown, FilterDropdown } from "../../../components";

const SecondaryNav = () => {
    const { componentState: { showFilterDropdown, showSortDropdown }, componentDispatch } = useComponent();
    const { noteDispatch } = useNote();

    return(
        <div className="sec-nav-wrapper flex-row flex_justify-center">
            <div className="sec-nav-container flex-row flex_justify-center flex_align-middle">
                <div className="search-input-container flex-row flex_justify-sb input-rd">
                    <button className="search-btn btn btn-rd">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>  
                    <input 
                        className="search-input input input-sq" 
                        type="text"
                        placeholder="Search notes..."
                        onChange={(e) => noteDispatch({ type: "SET_SEARCHED_NOTES", payload: e.target.value })}
                    />
                    <button 
                        className="search-btn btn btn-rd"
                        onClick={() => componentDispatch({type: "SHOW_FILTER_DROPDOWN"})}    
                    >
                        <i className="fa-solid fa-filter"></i>
                    </button>
                    <button 
                        className="search-btn btn btn-rd"
                        onClick={() => componentDispatch({type: "SHOW_SORT_DROPDOWN"})}    
                    >
                        <i className="fa-solid fa-arrow-down-wide-short"></i>
                    </button>

                    {
                        showFilterDropdown &&
                        <FilterDropdown />
                    }
                    {
                        showSortDropdown &&
                        <SortDropdown />
                    }
                </div>

                <button 
                    className="btn btn-cr btn-primary flex-row flex_align-middle btn-new-note"
                    onClick={() => componentDispatch({type: "SHOW_TEXT_EDITOR"})}
                >
                    <i className="fa-solid fa-plus"></i>
                    <span>New Note</span>
                </button>
            </div>
        </div>
    );

}

export { SecondaryNav };