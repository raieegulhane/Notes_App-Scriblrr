import "./secondary-nav.css";
import { useComponent } from "../../contexts/component-context";
import { SortDropdown, FilterDropdown } from "../dropdowns";

const SecondaryNav = () => {

    const { state: componentState, dispatch: componentDispatch } = useComponent();
    const { showFilterDropdown, showSortDropdown, showTextEditor } = componentState;

    return(
        <div className="sec-nav-wrapper">
            <div className="sec-nav-container flex-row flex_justify-center flex_align-middle">
                <div className="search-input-container flex-row flex_justify-sb input-rd">
                    <button className="search-btn btn btn-rd">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>  
                    <input 
                        className="search-input input input-sq" 
                        placeholder="Search notes..."
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
                    New Note
                </button>
            </div>
        </div>
    );

}

export { SecondaryNav };