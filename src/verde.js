import React, { useState } from "react";

const Semaforo = () => {
  const [colorVerde, setColorVerde] = useState("#27A303");
  const [colorAmarillo, setColorAmarillo] = useState("#C6A500");
  const [colorRojo, setColorRojo] = useState("#A30303");

  return (
    <div>
      <div className="aling">
        <button
          className="Verde"
          style={{ backgroundColor: colorVerde }}
          onClick={() => {
            setColorVerde("#3AFF00");
            setColorAmarillo("#C6A500");
            setColorRojo("#B10000");
          }}
        ></button>
      </div>

      <div className="aling">
        <button
          className="Amarillo"
          style={{ backgroundColor: colorAmarillo }}
          onClick={() => {
            setColorRojo("#A30303");
            setColorVerde("#27A303");
            setColorAmarillo("#FFD501");
          }}
        ></button>
      </div>

      <div className="aling">
        <button
          className="Rojo"
          style={{ backgroundColor: colorRojo }}
          onClick={() => {
            setColorVerde("#27A303");
            setColorAmarillo("#C6A500");
            setColorRojo("#FF0202");
          }}
        ></button>
      </div>
    </div>
  );
};

export default Semaforo;
