import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import "./text-editor.css";
  
const modules = {
    toolbar: [
    [{ 'font': [] }],
    [{ 'header': [1, 2, 3, false] }],
    [{ 'color': [] }],
    ['bold', 'italic', 'underline','strike'],
    ['blockquote', 'code-block'],
    [{'list': 'ordered'}, {'list': 'bullet'}],
    ['link', 'image'],
    ['clean']
    ]
};

const formats = [
    "font",
    'header',
    "color",
    'bold', 'italic', 'underline', 'strike', 
    'blockquote', 'code-block',
    'list', 'bullet',
    'link', 'image'
];

const RichTextEditor = ({ value, onChange }) => {
    return(
        <ReactQuill 
            theme="snow"
            modules={modules}
            formats={formats}
            placeholder="Take a note..."
            value={value}
            onChange={onChange}
        />
    );
}
  
export { RichTextEditor };