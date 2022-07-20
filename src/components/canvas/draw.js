import { useEffect, useState } from "react";

let tool = {
  color: "black",
  tip: 3
};

let ctx;

let pointer = { x: 0, y: 0 };

let onPaint = function () {
  ctx.lineTo(pointer.x, pointer.y);

  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = tool.tip;
  ctx.strokeStyle = tool.color;
  ctx.stroke();
};

export const CanvasDraw = ({ draw, setDraw }) => {
  const [size, setSize] = useState({});

  useEffect(() => {
    let size = document
      .getElementById("canvas-reservations")
      .getBoundingClientRect();
    setSize(size);
  }, []);

  useEffect(() => {
    let canvas = document.getElementById("canvas-draw");
    ctx = canvas.getContext("2d");

    canvas.addEventListener(
      "pointermove",
      function (e) {
        pointer.x = e.pageX - this.offsetLeft - size.x + 20;
        pointer.y = e.pageY - this.offsetTop;
      },
      false
    );

    canvas.addEventListener(
      "pointerdown",
      function (e) {
        console.log(this.offsetLeft);
        pointer.x = e.pageX - this.offsetLeft - size.x + 20;
        pointer.y = e.pageY - this.offsetTop;
        ctx.beginPath();
        ctx.moveTo(pointer.x, pointer.y);
        canvas.addEventListener("pointermove", onPaint, false);
      },
      false
    );

    canvas.addEventListener(
      "pointerup",
      function () {
        canvas.removeEventListener("pointermove", onPaint, false);
      },
      false
    );

    canvas.addEventListener(
      "pointerleave",
      function () {
        canvas.removeEventListener("pointermove", onPaint, false);
      },
      false
    );
  }, [size]);

  return (
    <>
      <canvas
        id="canvas-draw"
        width={size.width}
        height={size.height}
        style={{ zIndex: draw ? 100 : 0 }}
      ></canvas>

      {!draw && (
        <div id="canvas-draw-buttons">
          <button
            onClick={() => {
              setDraw(true);
            }}
          >
            <i className="material-icons-round">edit</i>
          </button>
        </div>
      )}

      {draw && (
        <div id="canvas-draw-buttons">
          <button
            onClick={() => {
              console.log(size);
              ctx.clearRect(0, 0, size.width, size.height);
            }}
          >
            <i className="material-icons-round">delete</i>
          </button>

          <button
            onClick={() => {
              tool.tip = 3;
              tool.color = "black";
            }}
          >
            <i className="material-icons-round">edit</i>
          </button>

          <button
            onClick={() => {
              tool.tip = 30;
              tool.color = "white";
            }}
          >
            <i className="material-icons-round">auto_fix_normal</i>
          </button>

          <button
            onClick={() => {
              setDraw(false);
            }}
          >
            <i className="material-icons-round">close</i>
          </button>
        </div>
      )}
    </>
  );
};
