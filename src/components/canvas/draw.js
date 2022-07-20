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

  const [color, setColor] = useState("black");

  return (
    <>
      <canvas
        id="canvas-draw"
        width={size.width}
        height={size.height}
        className={draw ? "show" : "hide"}
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
              if (window.confirm("Clear canvas?")) {
                ctx.clearRect(0, 0, size.width, size.height);
              }
            }}
          >
            <i className="material-icons-round">delete</i>
          </button>

          <button
            className={color == "black" && "selected-canvas-tool"}
            onClick={() => {
              tool.tip = 3;
              tool.color = "black";
              setColor(tool.color);
            }}
          >
            <i className="material-icons-round">edit</i>
          </button>

          <button
            className={color == "white" && "selected-canvas-tool"}
            onClick={() => {
              tool.tip = 30;
              tool.color = "white";
              setColor(tool.color);
            }}
          >
            <i className="material-icons-round">auto_fix_normal</i>
          </button>

          <button
            onClick={() => {
              setDraw(false);
            }}
          >
            <i className="material-icons-round">arrow_forward</i>
          </button>
        </div>
      )}
    </>
  );
};
