import { EditorState } from "@codemirror/state";
import {
  EditorView,
  keymap,
  lineNumbers,
  placeholder,
  highlightActiveLineGutter,
  drawSelection,
} from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { useCallback, useEffect, useRef, useState } from "react";
import { updateNodeData } from "../../workflowsSlice";
import { useDispatch } from "react-redux";

const InputConfig = ({ data, workflowId, nodeId }) => {
  const dispatch = useDispatch();
  const parentRef = useRef(null);
  const viewRef = useRef(null);
  const [error, setError] = useState(false);
  const [valid, setValid] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (!parentRef.current) return;

    const myTheme = EditorView.theme(
      {
        ".cm-gutters": {
          color: "gray",
          backgroundColor: "transparent",
          border: "none",
        },
        "&": {
          height: "100%",
        },
        ".cm-scroller": {
          overflow: "auto",
        },
        ".cm-content": {
          minHeight: "100%",
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: "#FF2400",
          borderLeftWidth: "2px",
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":
          {
            backgroundColor: "purple",
          },
        ".cm-selectionBackground": {
          backgroundColor: "purple",
        },
      },
      { dark: true },
    );

    const startState = EditorState.create({
      doc: JSON.stringify(data),
      extensions: [
        keymap.of(defaultKeymap),
        lineNumbers(),
        highlightActiveLineGutter(),
        drawSelection(),
        myTheme,
        EditorView.lineWrapping,
        placeholder("Enter JSON Input"),
      ],
    });

    const view = new EditorView({
      state: startState,
      parent: parentRef.current,
    });

    viewRef.current = view;

    return () => {
      view.destroy();
    };
  }, [data]);

  const handleSave = useCallback(() => {
    const userInput = viewRef.current.state.doc.toString().trim();
  
    if (!userInput) {
      setIsEmpty(true);
      return;
    }

    setIsEmpty(false);

    try {
      const jsonFormated = JSON.parse(userInput);
      if (!jsonFormated) return;
      dispatch(updateNodeData({ id: workflowId, nodeId, data: jsonFormated }));
      setError(false);
      setValid(true);
    } catch {
      setError(true);
      setValid(false);
    }
  }, [workflowId, nodeId, dispatch]);

   const handleReset = useCallback(() => {
    const currentInput = viewRef.current.state.update({changes: {from: 0, to: viewRef.current.state.doc.toString().length, insert: ""}});
    viewRef.current.dispatch(currentInput);

    setError(false);
    setValid(false);
    setIsEmpty(false);
  }, [])

  return (
    <div className="flex flex-col h-full">
      <div className="bg-gray-700 p-1 flex gap-3">
        <button className="py-0.5 px-2 cursor-pointer bg-gray-600 ml-auto"
        onClick={handleSave}>
          Save
        </button>
        <button className="py-0.5 px-2 cursor-pointer bg-gray-600"
        onClick={handleReset}>
          Reset
        </button>
      </div>
       {error && <span className="text-sm text-red-500">Invalid JSON data!</span>}
       {valid && <span className="text-sm  text-green-500">Saved</span>}
       {isEmpty && <span className="text-sm  text-red-500">Data is Empty!</span>}
      <div className="flex-1 min-h-0" ref={parentRef}>
     
      </div>
    </div>
  );
};

export default InputConfig;
