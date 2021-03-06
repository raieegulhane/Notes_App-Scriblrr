import "./color-palette.css";
import { colorsArray } from "./colors";
import { useComponent } from "../../../contexts";

const ColorPalette = ({ onClick}) => {

    const { componentDispatch } = useComponent();

    return(
        <div className="palette-wrapper flex-row flex_justify-sb flex_align-middle">
            <div className="colors-container flex-row">
                {colorsArray.map(({ id, color }) => {
                    return(
                        <button
                            key={id}
                            className="color-item"
                            style={{ backgroundColor: color }}
                            name="noteColor"
                            value={color}
                            onClick={onClick}
                        >
                        </button>
                    );
                })}
            </div>

            <button 
                className="btn-icon btn"
                onClick={() => componentDispatch({type: "SHOW_COLOR_PALETTE"})}    
            >
                <i className="fa-solid fa-xmark"></i>
            </button>
        </div>
    );
}

export { ColorPalette };