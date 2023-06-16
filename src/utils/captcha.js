// var code = '';
class Verification {
  constructor() {
    // 获取需要的dom元素
    this.input = document.querySelector("#input");
    this.submitBtn = document.querySelector(".submitBtn");
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    // 获取画布的宽高
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    // 存验证码
    this.code = ''
    this.charArr = this.getCharArr(); // 将0-9 a-Z放进数组
    this.canvas.addEventListener("click", () => this.init()); // 绑定对应的事件
  }
  // 初始化验证码功能
  init() {
    this.clear();
    this.drawText();
    this.drawLine();
    this.drawDot();
  }
  // 检测验证码是否符合???
  // 获取0-9和a-Z所有的字符
  getCharArr() {
    let charArr = [];
    for (let i = 0; i < 10; i++) {
      charArr.push(i);
    }
    for (let i = 65; i < 123; i++) {
      // ascall码91到96是其他符号，去掉
      if (i < 91 || i > 96) {
        charArr.push(String.fromCharCode(i));
      }
    }
    return charArr;
  }
  // 清空画布
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  // 画验证码
  drawText() {
    const length = this.charArr.length;
    this.ctx.font = "bold 25px 宋体";
    // code = "";
    for (let i = 0; i < 4; i++) {
      this.ctx.beginPath();
      let index = Math.floor(Math.random() * length);
      this.code += this.charArr[index].toString().toLowerCase();
      let x = i * 20 + 15; // 设置x的坐标 
      let y = 24 + Math.random() * 5; // 设置y的坐标
      let angle = Math.random() * -0.5; // 设置旋转的角度，pi是3.14。这里取-0.5到0.5
      this.ctx.translate(x, y); // 更换中心，即旋转的中心，也是画布的原点
      this.ctx.rotate(angle); // 旋转画布
      this.ctx.fillStyle = this.getRandomColor();
      this.ctx.fillText(this.charArr[index], 0, 0);
      this.ctx.rotate(-angle); // 把画布旋转回去
      this.ctx.translate(-x, -y); // 把原点移回去
    }
  }
  // 画干扰线
  drawLine() {
    for (let i = 0; i < 4; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(Math.random() * this.width, Math.random() * this.height);
      this.ctx.lineTo(Math.random() * this.width, Math.random() * this.height);
      this.ctx.strokeStyle = this.getRandomColor();
      this.ctx.stroke();
    }
  }
  // 画干扰点
  drawDot() {
    for (let i = 0; i < 20; i++) {
      this.ctx.beginPath();
      this.ctx.arc(
        Math.random() * this.width,
        Math.random() * this.height,
        1,
        0,
        2 * Math.PI
      );
      this.ctx.fillStyle = this.getRandomColor();
      this.ctx.fill();
    }
  }
  // 获取随机颜色
  getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }
}

// new Verification();

export default Verification

