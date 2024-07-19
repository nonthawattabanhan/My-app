// src/View/home/index.js
import React, { useState } from 'react';

const Homepage = () => {
    const colors = ['Red', 'Yellow', 'green'];
    const [clickedColors, setClickedColors] = useState([]);

    const handleColorClick = (color) => {
        setClickedColors ([...clickedColors, color]);
    };

  return (
    <div>
        <div class="color-buttons">
            {colors.map((color, index) => (
                <div 
                key={index}
                className="color-button"
                style={{backgroundColor : color}}
                onClick={() => handleColorClick(color)}
                 >
                    {color}
                 </div>
            ))}
        </div>
        <table>
            <thead>
                
                <th>ลำดับ</th>  
                <th>สีที่กด</th>   
                
                
            </thead>
            <tbody>
                {clickedColors.map((color, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{color}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default Homepage;
