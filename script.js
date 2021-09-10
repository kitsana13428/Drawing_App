const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const ctx = canvas.getContext("2d");

let size = 10;
let isPressed = false; /* ให้ค่าปกติเป็น เท็จ */
let color ='black';

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

colorEl.addEventListener('click', (e) => { /* เปลี่ยนสี */
    color = e.target.value;
});

function drawCircle(x, y) { /* ขนาดของพู่กัน เป็นก้อนวงกลม */
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
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

function updateSizeOnScreen() { /* ตัวเลขขนาดไซส์ */
    sizeEl.innerText = size;
}

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawCircle(x, y);

//     requestAnimationFrame(draw);

// }

// draw();

//7.5