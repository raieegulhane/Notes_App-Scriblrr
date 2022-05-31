import "./color-palette.css";
import { colorsArray } from "./colors";
import { useComponent } from "../../../contexts/component-context";

const ColorPalette = () => {

    const { dispatch: componentDispatch } = useComponent();

    return(
        <div className="palette-wrapper flex-row flex_justify-sb flex_align-middle">
            <div className="colors-container flex-row">
                {colorsArray.map(({ id, color }) => {
                    return(
                        <div 
                            key={ id }
                            className="color-item"
                            style={{ backgroundColor: color }}
                        >
                        </div>
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

export { ColorPalette }