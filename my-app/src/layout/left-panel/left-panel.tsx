import "./left-panel.css"
import React from "react"

function LeftPanel({ children }) {
    return (
        <div className="left-panel">
            { children }
        </div>
    )
}

export default LeftPanel 