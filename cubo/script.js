const $cubito = document.getElementById('cubito');

// $cubo.animate(keyframes =[], option={})
const animation = $cubito.animate([
    //from
    {
    transform: 'rotateY(-360deg) rotateX(-360deg)'
    },
    //to
     {
     transform: 'rotateY(360deg) rotateX(360deg)'
     }
],{
      duration: 5000,
      direction: 'alternate',
      easing: 'ease-in-out',
      iterations: Infinity,
      fill: 'forwards',
      
    })

    // const $playButton = document.getElementById('play');
    const $pauseButton = document.getElementById('pause');
    const $stopButton = document.getElementById('stop');
    const $reverseButton = document.getElementById('reverse');
    const $speedButton =document.getElementById('speed');
    const $slowButton =document.getElementById('slow');
    const $solveButton =document.getElementById('solve');
    const $scrambleButton = document.getElementById('scramble');

    // $playButton.addEventListener('click', (event) =>{

    //  });
    $pauseButton.addEventListener('click',(event) =>{
        if(animation.playState==="running"){
            animation.pause();
            $pauseButton.textContent = "Play";
            $pauseButton.style.backgroundColor = "#00FF00";
        }
        else{
            animation.play();
            $pauseButton.textContent = "Pause";
            $pauseButton.style.backgroundColor = "#FF6600";
        }
    });
    $scrambleButton.addEventListener('click',(event) =>{
    document.getElementById('white-1').classList.add('white-a');
    document.getElementById('white-2').classList.add('white-a');
    document.getElementById('white-3').classList.add('white-a');
    document.getElementById('white-4').classList.add('white-a');
    document.getElementById('white-5').classList.add('white-a');
    document.getElementById('white-6').classList.add('white-a');
    document.getElementById('white-7').classList.add('white-a');
    document.getElementById('white-8').classList.add('white-a');
    document.getElementById('white-9').classList.add('white-a');

    document.getElementById('red-1').classList.add('red-a');
    document.getElementById('red-2').classList.add('red-a');
    document.getElementById('red-3').classList.add('red-a');
    document.getElementById('red-4').classList.add('red-a');
    document.getElementById('red-5').classList.add('red-a');
    document.getElementById('red-6').classList.add('red-a');
    document.getElementById('red-7').classList.add('red-a');
    document.getElementById('red-8').classList.add('red-a');
    document.getElementById('red-9').classList.add('red-a');

    document.getElementById('blue-1').classList.add('blue-a');
    document.getElementById('blue-2').classList.add('blue-a');
    document.getElementById('blue-3').classList.add('blue-a');
    document.getElementById('blue-4').classList.add('blue-a');
    document.getElementById('blue-5').classList.add('blue-a');
    document.getElementById('blue-6').classList.add('blue-a');
    document.getElementById('blue-7').classList.add('blue-a');
    document.getElementById('blue-8').classList.add('blue-a');
    document.getElementById('blue-9').classList.add('blue-a');

    document.getElementById('orange-1').classList.add('orange-a');
    document.getElementById('orange-2').classList.add('orange-a');
    document.getElementById('orange-3').classList.add('orange-a');
    document.getElementById('orange-4').classList.add('orange-a');
    document.getElementById('orange-5').classList.add('orange-a');
    document.getElementById('orange-6').classList.add('orange-a');
    document.getElementById('orange-7').classList.add('orange-a');
    document.getElementById('orange-8').classList.add('orange-a');
    document.getElementById('orange-9').classList.add('orange-a');

    document.getElementById('yellow-1').classList.add('yellow-a');
    document.getElementById('yellow-2').classList.add('yellow-a');
    document.getElementById('yellow-3').classList.add('yellow-a');
    document.getElementById('yellow-4').classList.add('yellow-a');
    document.getElementById('yellow-5').classList.add('yellow-a');
    document.getElementById('yellow-6').classList.add('yellow-a');
    document.getElementById('yellow-7').classList.add('yellow-a');
    document.getElementById('yellow-8').classList.add('yellow-a');
    document.getElementById('yellow-9').classList.add('yellow-a');

    document.getElementById('green-1').classList.add('green-a');
    document.getElementById('green-2').classList.add('green-a');
    document.getElementById('green-3').classList.add('green-a');
    document.getElementById('green-4').classList.add('green-a');
    document.getElementById('green-5').classList.add('green-a');
    document.getElementById('green-6').classList.add('green-a');
    document.getElementById('green-7').classList.add('green-a');
    document.getElementById('green-8').classList.add('green-a');
    document.getElementById('green-9').classList.add('green-a');
})

    $solveButton.addEventListener('click',(event)=>{
    document.getElementById('white-1').classList.remove('white-a');
    document.getElementById('white-2').classList.remove('white-a');
    document.getElementById('white-3').classList.remove('white-a');
    document.getElementById('white-4').classList.remove('white-a');
    document.getElementById('white-5').classList.remove('white-a');
    document.getElementById('white-6').classList.remove('white-a');
    document.getElementById('white-7').classList.remove('white-a');
    document.getElementById('white-8').classList.remove('white-a');
    document.getElementById('white-9').classList.remove('white-a');

    document.getElementById('red-1').classList.remove('red-a');
    document.getElementById('red-2').classList.remove('red-a');
    document.getElementById('red-3').classList.remove('red-a');
    document.getElementById('red-4').classList.remove('red-a');
    document.getElementById('red-5').classList.remove('red-a');
    document.getElementById('red-6').classList.remove('red-a');
    document.getElementById('red-7').classList.remove('red-a');
    document.getElementById('red-8').classList.remove('red-a');
    document.getElementById('red-9').classList.remove('red-a');

    document.getElementById('blue-1').classList.remove('blue-a');
    document.getElementById('blue-2').classList.remove('blue-a');
    document.getElementById('blue-3').classList.remove('blue-a');
    document.getElementById('blue-4').classList.remove('blue-a');
    document.getElementById('blue-5').classList.remove('blue-a');
    document.getElementById('blue-6').classList.remove('blue-a');
    document.getElementById('blue-7').classList.remove('blue-a');
    document.getElementById('blue-8').classList.remove('blue-a');
    document.getElementById('blue-9').classList.remove('blue-a');

    document.getElementById('orange-1').classList.remove('orange-a');
    document.getElementById('orange-2').classList.remove('orange-a');
    document.getElementById('orange-3').classList.remove('orange-a');
    document.getElementById('orange-4').classList.remove('orange-a');
    document.getElementById('orange-5').classList.remove('orange-a');
    document.getElementById('orange-6').classList.remove('orange-a');
    document.getElementById('orange-7').classList.remove('orange-a');
    document.getElementById('orange-8').classList.remove('orange-a');
    document.getElementById('orange-9').classList.remove('orange-a');

    document.getElementById('yellow-1').classList.remove('yellow-a');
    document.getElementById('yellow-2').classList.remove('yellow-a');
    document.getElementById('yellow-3').classList.remove('yellow-a');
    document.getElementById('yellow-4').classList.remove('yellow-a');
    document.getElementById('yellow-5').classList.remove('yellow-a');
    document.getElementById('yellow-6').classList.remove('yellow-a');
    document.getElementById('yellow-7').classList.remove('yellow-a');
    document.getElementById('yellow-8').classList.remove('yellow-a');
    document.getElementById('yellow-9').classList.remove('yellow-a');

    document.getElementById('green-1').classList.remove('green-a');
    document.getElementById('green-2').classList.remove('green-a');
    document.getElementById('green-3').classList.remove('green-a');
    document.getElementById('green-4').classList.remove('green-a');
    document.getElementById('green-5').classList.remove('green-a');
    document.getElementById('green-6').classList.remove('green-a');
    document.getElementById('green-7').classList.remove('green-a');
    document.getElementById('green-8').classList.remove('green-a');
    document.getElementById('green-9').classList.remove('green-a');
    })
    $stopButton.addEventListener('click',(event) =>{
        animation.cancel();
    });
    $reverseButton.addEventListener('click',(event) =>{
        animation.reverse();
    });
    $speedButton.addEventListener('click', (event) =>{
        animation.playbackRate = animation.playbackRate + .2
    });
    $slowButton.addEventListener('click', (event) =>{
        animation.playbackRate = animation.playbackRate - .2
    });