const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "rgb(196,221,252)";
const gravity = 1;
let droplets = [];
const num = Math.floor((Math.random() * 25) + 10);

function createDroplet(){
  let x = Math.floor((Math.random() * 2000));
  let y = Math.floor((Math.random() * -50));
  let z = Math.floor((Math.random() * 1.25)+ 1); //distance from screen (falls slower/ is smaller)

  droplets.push([x,y,z]);

}
i = 0;
function rain(){
  while (droplets.length > 7500){
    droplets.shift();
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  i = 0;
  while(i<num){
    createDroplet();
    i++;
  }
  i = 0;
  while(i<droplets.length){
    ctx.lineWidth = 1;
    cc = droplets[i][2]* 75;
    ctx.strokeStyle = "rgb("+ String(196 - cc) + "," + String(221 - cc) + "," + String(252 - cc) + ")";
    droplets[i][1] += 20 * gravity/droplets[i][2];
    ctx.beginPath();
    ctx.moveTo(droplets[i][0],droplets[i][1]);
    ctx.lineTo(droplets[i][0],droplets[i][1]+30);
    ctx.stroke();
    i++;
  }
}

setInterval(rain, 15);
rain();
rain();
