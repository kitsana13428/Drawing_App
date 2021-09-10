const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 10;
let isPressed = false; /* ให้ค่าปกติเป็น เท็จ */

canvas.addEventListener("mousedown", () => { /* เมื่อกดเมาส์ให้ค่าเป็นจริง */
    isPressed = true;
});

canvas.addEventListener("mouseup", () => { /* ไม่ได้กดเป็น เท็จ */
    isPressed = false;
});

canvas.addEventListener("mousemove", (e) => { 
    if (isPressed){
        const x = e.offsetX;
        const y = e.offsetY;

        drawCircle(x, y);
    }
});

function drawCircle(x, y) { /* ขนาดของพู่กัน เป็นก้อนวงกลม */
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
}

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawCircle(x, y);

//     requestAnimationFrame(draw);

// }

// draw();

//6.51