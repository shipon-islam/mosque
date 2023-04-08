import { EditorState } from "draft-js"
import { useState } from "react"

const Editor=()=>{
    const [editorState,setEditorState]=useState(
        EditorState.createEmpty()
    )

    const handleChange=(EditorState)=>{
        setEditorState(EditorState)
    }
    return <div><Editor editorState=(editorState) onChange={handleChange}/></div>
}
export default Editor
