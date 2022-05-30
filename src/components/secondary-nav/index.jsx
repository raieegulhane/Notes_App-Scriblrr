import "./secondary-nav.css";

const SecondaryNav = () => {
    return(
        <div className="sec-nav-wrapper flex-row flex_align-middle">
            <div className="search-input-container flex-row flex_justify-sb input-rd">
                <button className="search-btn btn btn-rd">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>  
                <input 
                    className="search-input input input-sq" 
                    placeholder="Search notes..."
                />
                <button className="search-btn btn btn-rd">
                    <i class="fa-solid fa-filter"></i>
                </button>
                <button className="search-btn btn btn-rd">
                    <i class="fa-solid fa-arrow-down-wide-short"></i>
                </button>
            </div>

            <button className="btn btn-cr btn-primary flex-row flex_align-middle btn-new-note">
                <i class="fa-solid fa-plus"></i>
                New Note
            </button>
        </div>
    );

}

export { SecondaryNav };