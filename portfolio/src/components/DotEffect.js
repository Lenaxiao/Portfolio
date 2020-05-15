import React, { useEffect, useRef, useState } from "react";

const BACKGROUND_COLOR = "#173040";
const BALL_COLOR = "#CCDCDF";
const LINE_COLOR = "#CCDCDF";

const DotEffect = () => {
  const ref = useRef();
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);

  // adjusting circle ratio to prevent diorder
  const getPixelRatio = context => {
    let backingStore =
      context.backingStorePixelRatio ||
      context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio ||
      1;
    return (window.devicePixelRatio || 1) / backingStore;
  };

  // initialize canvas when component mounted
  useEffect(() => {
    let canvas = ref.current;
    let ctx = canvas.getContext("2d");
    let ratio = getPixelRatio(ctx);
    let width = getComputedStyle(canvas)
      .getPropertyValue("width")
      .slice(0, -2);
    let height = getComputedStyle(canvas)
      .getPropertyValue("height")
      .slice(0, -2);
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Initialize points position
    let me = {
      x: 0,
      y: 0
    };

    let ballList = [];
    let ballN;
    if (canvasWidth <= 500) {
      ballN = 10;
    } else if (canvasWidth <= 1000) {
      ballN = 40;
    } else {
      ballN = 70;
    }
    for (let i = 0; i < ballN; i++) {
      ballList.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.floor(Math.random() * 10 + 5),
        dx: Math.random() - 0.3,
        dy: Math.random() - 0.3
      });
    }

    window.addEventListener("mousemove", e => {
      me.x = e.x;
      me.y = e.y;
    });

    // draw ball
    function draw() {
      for (let i = 0; i < ballList.length; i++) {
        let ball = ballList[i];
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2, false);
        ctx.fillStyle = BALL_COLOR;
        ctx.fill();
      }

      ctx.beginPath();
      for (let i = 0; i < ballList.length; i++) {
        let l1 = ballList[i];
        ctx.moveTo(l1.x, l1.y);
        if (distance(me, l1) < 400) {
          ctx.lineTo(me.x, me.y);
        }
        for (let j = 0; j < ballList.length; j++) {
          let l2 = ballList[j];
          if (distance(l1, l2) < 400) {
            ctx.lineTo(l2.x, l2.y);
          }
        }
        ctx.lineWidth = "0.05";
        ctx.strokeStyle = LINE_COLOR;
        ctx.stroke();
      }
    }

    function distance(point1, point2) {
      let dx = 0;
      let dy = 0;
      dx = Math.abs(point2.x - point1.x);
      dy = Math.abs(point2.y - point1.y);
      return dx + dy;
    }

    // update (for next frame)
    function update() {
      for (let i = 0; i < ballList.length; i++) {
        let s = ballList[i];
        if (s.x < 0 || s.x > canvas.width) {
          s.dx = -s.dx; // bouncing back
        }
        if (s.y < 0 || s.y > canvas.height) {
          s.dy = -s.dy;
        }
        s.x += s.dx;
        s.y += s.dy;
      }
    }

    // add animation
    let requestId;
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // important!
      ctx.fillStyle = BACKGROUND_COLOR;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      update();
      draw();
      requestId = requestAnimationFrame(render);
    }
    render();

    return () => {
      window.removeEventListener("mousemove", e => {
        me.x = e.x;
        me.y = e.y;
      });
      cancelAnimationFrame(requestId);
    };
  });

  useEffect(() => {
    const handleResize = () => {
      setCanvasWidth(window.innerWidth);
      setCanvasHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <canvas
      ref={ref}
      style={{ width: canvasWidth, height: canvasHeight }}
    ></canvas>
  );
};

export default DotEffect;
