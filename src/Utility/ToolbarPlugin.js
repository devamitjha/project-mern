import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND, FORMAT_ELEMENT_COMMAND, INSERT_LINK_COMMAND } from "lexical";
import { $createParagraphNode, $createTextNode } from "lexical";
import { useState } from "react";

export function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [linkUrl, setLinkUrl] = useState("");

  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "10px", borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>
      <button onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "h1")}>H1</button>
      <button onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "h2")}>H2</button>
      <button onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}>Bold</button>
      <button onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}>Italic</button>
      <button onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")}>Underline</button>
      <input
        type="text"
        placeholder="Enter link..."
        value={linkUrl}
        onChange={(e) => setLinkUrl(e.target.value)}
        style={{ width: "120px" }}
      />
      <button
        onClick={() => {
          editor.dispatchCommand(INSERT_LINK_COMMAND, linkUrl);
          setLinkUrl("");
        }}
      >
        Add Link
      </button>
    </div>
  );
}
