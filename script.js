const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
const ctx = canvas.getContext("2d");

let size = 10;
let isPressed = false; /* ให้ค่าปกติเป็น เท็จ */
let color ='black';
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (e) => { /* เมื่อกดเมาส์ให้ค่าเป็นจริง */
    isPressed = true;

    x = e.offsetX;
    x = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => { /* ไม่ได้กดเป็น เท็จ */
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (e) => { 
    if (isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

colorEl.addEventListener('click', (e) => { /* เปลี่ยนสี */
    color = e.target.value;
});

function drawCircle(x, y) { /* ขนาดของพู่กัน เป็นก้อนวงกลม */
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}



function drawLine (x1, y1, x2, y2) { /* ทำให้การวาด สมูท ไม่เป็นจุดๆ */
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
    
}



increaseBtn.addEventListener('click', () => { /* ปุ๋มเพิ่ม และ ลดไซส์ */
    size += 5;

    if(size > 50) {
        size = 50;
    }

    updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', () => {
    size -= 5;

    if(size < 5) {
        size = 5;
    }

    updateSizeOnScreen();
});

clearEl.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function updateSizeOnScreen() { /* ตัวเลขขนาดไซส์ */
    sizeEl.innerText = size;
}

