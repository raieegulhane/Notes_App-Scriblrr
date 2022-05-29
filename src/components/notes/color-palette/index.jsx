import "./color-palette.css";
import { colorsArray } from "./colors";

const ColorPalette = () => {
    return(
        <div className="palette-wrapper flex-row flex_justify-sb flex_align-middle">
            <div className="colors-container flex-row">
                {
                    colorsArray.map(
                        ({ id, color }) => {
                            return(
                                <div 
                                    key={ id }
                                    className="color-item"
                                    style={{ backgroundColor: color }}
                                >
                                </div>
                            );
                        }
                    )
                }
            </div>

            <button className="btn-icon btn">
                <i className="fa-solid fa-xmark"></i>
            </button>
        </div>
    );
}

export { ColorPalette }