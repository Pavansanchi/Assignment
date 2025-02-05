import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = () => {
    const [text, setText] = useState("Rich Text Editor");
  const modules = {
    toolbar: [
      [{ header: [1, 2,3,4,5,6, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block"],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ["clean"],
    ],
  };
// console.log(text)
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <ReactQuill value={text} onChange={setText} modules={modules} theme="snow" />
    </div>
  );
};

export default RichTextEditor;
