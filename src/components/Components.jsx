import React, {useState} from "react";

function Components() {
 const [color, setColor] = useState("#FFFFFF");

 function handleColor(event) {
     setColor(event.target.value)
 }

 return (<div className="colorPicker">
          <h1>Color Picker</h1>
          <div className="colorDisplay" style={{backgroundColor: color}}>
          </div>
          <p>Selected Color: {color}</p><br/>
          <label className="colorLabel">Select Color:</label>
          <input type="color" value={color} onChange={handleColor}></input>
        </div>)
}

export default Components;