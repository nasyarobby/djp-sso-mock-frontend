import React from "react";

function DebugBox({ show, data }) {
  if (show)
    return (
      <div className="p-4 rounded border bg-gray-100 m-2">
        Debug:
        <br />
        {localStorage.getItem("redirect_uri")}
        <br /> {JSON.stringify(data)}
      </div>
    );
  else return null;
}

export default DebugBox;
