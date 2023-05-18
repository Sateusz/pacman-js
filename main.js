const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

function drawWalls()
{
    //srodek 500,350

    ctx.strokeStyle = "#0000FF";
    ctx.fillStyle = "#0000AA";
    //Zewnetrzna sciana

    ctx.moveTo(100,100);
    ctx.lineTo(900,100);
    ctx.lineTo(900,600);
    ctx.lineTo(100,600);
    ctx.lineTo(100,100);

    //Spawn duchow
    ctx.moveTo(450,300);
    ctx.lineTo(475,300);
    ctx.moveTo(525,300);
    ctx.lineTo(550,300);
    ctx.lineTo(550,400);
    ctx.lineTo(450,400);
    ctx.lineTo(450,300);
    ctx.stroke();

    //Wewnetrzne sciany
    ctx.fillRect(100,150,100,50);
    ctx.fillRect(150,200,50,50);
    
    ctx.fillRect(150,300,50,100);

    ctx.fillRect(150,450,50,100);
    ctx.fillRect(200,500,50,50);

    ctx.fillRect(250,150,100,100);
    ctx.fillRect(250,250,50,50);

    ctx.fillRect(250,350,150,50);
    ctx.fillRect(350,300,50,50);
    ctx.fillRect(250,400,50,50);

    ctx.fillRect(300,500,100,50);

    ctx.fillRect(400,100,200,150);
    ctx.fillRect(400,450,200,150);

    ctx.fillRect(650,150,100,100);
    ctx.fillRect(700,250,50,50);

    ctx.fillRect(600,350,150,50);
    ctx.fillRect(600,300,50,50);
    ctx.fillRect(700,400,50,50);

    ctx.fillRect(600,500,100,50);

    ctx.fillRect(800,150,100,50);
    ctx.fillRect(800,200,50,50);

    ctx.fillRect(800,300,50,100);

    ctx.fillRect(750,500,100,50);
    ctx.fillRect(800,450,50,50);
}

drawWalls();