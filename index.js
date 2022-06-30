const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


let gameOver = false


function drawBody () {


        // The head
        ctx.beginPath();
        ctx.arc(150, 47, 13, 0, 2 * Math.PI);
        ctx.strokeStyle = "white"
        ctx.stroke();
    
        // The eyes
        ctx.beginPath();
        ctx.arc(145, 45, 2, 0, 1 * Math.PI);
        ctx.strokeStyle = "white"
        ctx.stroke();
    
        ctx.beginPath();
        ctx.arc(155, 45, 2, 0, 1 * Math.PI);
        ctx.strokeStyle = "white"
        ctx.stroke();
    
        ctx.beginPath();
        ctx.arc(150, 55, 3, 9.5, 2 * Math.PI);
        ctx.strokeStyle = "white"
        ctx.stroke();
    
        // The back 
        ctx.moveTo(150, 100);
        ctx.lineTo(150, 60);
        ctx.strokeStyle = "white";
        ctx.stroke();
    
    
        // Hands 
        ctx.moveTo(140, 80);
        ctx.lineTo(150, 60);
        ctx.strokeStyle = "white";
        ctx.stroke();
    
        ctx.moveTo(160, 80);
        ctx.lineTo(150, 60);
        ctx.strokeStyle = "white";
        ctx.stroke();
    
    
        // Legs
        ctx.moveTo(140, 120);
        ctx.lineTo(150, 100);
        ctx.strokeStyle = "white";
        ctx.stroke();
    
        ctx.moveTo(160, 120);
        ctx.lineTo(150, 100);
        ctx.strokeStyle = "white";
        ctx.stroke();

}



function drawPost () {
   
    let post = 0
    const postTimer = setInterval(() => {
        if(post > 4)    clearInterval(postTimer)
        
        postCases(post)
        post++


    }, 1000);







    function postCases (post) {
        switch(post) {
            case 0:
                ctx.moveTo(100, 145);
                ctx.lineTo(100, 10);
                ctx.strokeStyle = "white";
                ctx.stroke();
                
                break;
            case 1:
                ctx.moveTo(120, 10);
                ctx.lineTo(100, 60);
                ctx.strokeStyle = "white";
                ctx.stroke();

                break;

            case 2:
                ctx.moveTo(151, 10);
                ctx.lineTo(99, 10);
                ctx.strokeStyle = "white";
                ctx.stroke();

                break;
            case 3:
                ctx.moveTo(150, 35);
                ctx.lineTo(150, 10);
                ctx.strokeStyle = "white";
                ctx.stroke();

                break


            default:
                return
        }
    }

}



drawPost()
drawBody()