const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let gameOver = false

const div_box = document.getElementsByClassName('input-box')[0]
const btn = document.getElementById('btn')
let next = 0

let chances = 0
let correct = 0
let points = 0

const stack = []



const words = [
'abruptly',
'absurd',
'abyss',
'affix',
'askew',
'avenue',
'awkward',
'axiom',
'azure',
'bagpipes',
'bandwagon',
'banjo',
'bayou',
'beekeeper',
'bikini',
'blitz',
'blizzard',
'boggle',
'bookworm',
'boxcar',
'boxful',
'buckaroo',
'buffalo',
'buffoon',
'buxom',
'buzzard',
'buzzing',
'buzzwords',
'caliph',
'cobweb',
'cockiness',
'croquet',
'crypt',
'curacao',
'cycle',
'daiquiri',
'dirndl',
'disavow',
'dizzying',
'duplex',
'dwarves',
'embezzle',
'equip',
'espionage',
'euouae',
'exodus',
'faking',
'fishhook',
'fixable',
'fjord',
'flapjack',
'flopping',
'fluffiness',
'flyby',
'foxglove',
'frazzled',
'frizzled',
'fuchsia',
'funny',
'gabby',
'galaxy',
'galvanize',
'gazebo',
'giaour',
'gizmo',
'glowworm',
'glyph',
'gnarly',
'gnostic',
'gossip',
'grogginess',
'haiku',
'haphazard',
'hyphen',
'iatrogenic',
'icebox',
'injury',
'ivory',
'ivy',
'jackpot',
'jaundice',
'jawbreaker',
'jaywalk',
'jazziest',
'jazzy',
'jelly',
'jigsaw',
'jinx',
'jiujitsu',
'jockey',
'jogging',
'joking',
'jovial',
'joyful',
'juicy',
'jukebox',
'jumbo',
'kayak',
'kazoo',
'keyhole',
'khaki',
'kilobyte',
'kiosk',
'kitsch',
'kiwifruit',
'klutz',
'knapsack',
'larynx',
'lengths',
'lucky',
'luxury',
'lymph',
'marquis',
'matrix',
'megahertz',
'microwave',
'mnemonic',
'mystify',
'naphtha',
'nightclub',
'nowadays',
'numbskull',
'nymph',
'onyx',
'ovary',
'oxidize',
'oxygen',
'pajama',
'peekaboo',
'phlegm',
'pixel',
'pizazz',
'pneumonia',
'polka',
'pshaw',
'psyche',
'puppy',
'puzzling',
'quartz',
'queue',
'quips',
'quixotic',
'quiz',
'quizzes',
'quorum',
'razzmatazz',
'rhubarb',
'rhythm',
'rickshaw',
'schnapps',
'scratch',
'shiv',
'snazzy',
'sphinx',
'spritz',
'squawk',
'staff',
'strength',
'strengths',
'stretch',
'stronghold',
'stymied',
'subway',
'swivel',
'syndrome',
'thriftless',
'thumbscrew',
'topaz',
'transcript',
'transgress',
'transplant',
'triphthong',
'twelfth',
'twelfths',
'unknown',
'unworthy',
'unzip',
'uptown',
'vaporize',
'vixen',
'vodka',
'voodoo',
'vortex',
'voyeurism',
'walkway',
'waltz',
'wave',
'wavy',
'waxy',
'wellspring',
'wheezy',
'whiskey',
'whizzing',
'whomever',
'wimpy',
'witchcraft',
'wizard',
'woozy',
'wristwatch',
'wyvern',
'xylophone',
'yachtsman',
'yippee',
'yoked',
'youthful',
'yummy',
'zephyr',
'zigzag',
'zigzagging',
'zilch',
'zipper',
'zodiac',
'zombie',]






function drawBody (chance) {

        switch(chance) {
            case 0:
                // The head
                ctx.beginPath();
                ctx.arc(130, 47, 13, 0, 2 * Math.PI);
                ctx.strokeStyle = "white"
                ctx.stroke();
                    

                break
            case 1:
                ctx.moveTo(140, 80);
                ctx.lineTo(130, 60);
                ctx.strokeStyle = "white";
                ctx.stroke();
            
                break
            case 2:
                 // Hands 
        ctx.moveTo(120, 80);
        ctx.lineTo(130, 60);
        ctx.strokeStyle = "white";
        ctx.stroke();
                break
            case 3:
                  // The back 
        ctx.moveTo(130, 100);
        ctx.lineTo(130, 60);
        ctx.strokeStyle = "white";
        ctx.stroke();
                break
            case 4: 
            ctx.moveTo(140, 120);
        ctx.lineTo(130, 100);
        ctx.strokeStyle = "white";
        ctx.stroke();
                break
            case 5:
                  // Legs
        ctx.moveTo(120, 120);
        ctx.lineTo(130, 100);
        ctx.strokeStyle = "white";
        ctx.stroke();

         // The eyes
         ctx.beginPath();
         ctx.arc(125, 45, 2, 0, 1 * Math.PI);
         ctx.strokeStyle = "white"
         ctx.stroke();
     
         ctx.beginPath();
         ctx.arc(135, 45, 2, 0, 1 * Math.PI);
         ctx.strokeStyle = "white"
         ctx.stroke();
     
         ctx.beginPath();
         ctx.arc(130, 55, 3, 9.5, 2 * Math.PI);
         ctx.strokeStyle = "white"
         ctx.stroke();


                break
                
        }




    
       
    
      
    
    
       
    
       
    
      
    
        

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
                ctx.moveTo(50, 145);
                ctx.lineTo(50, 10);
                ctx.strokeStyle = "white";
                ctx.stroke();
                
                break;
            case 1:
                ctx.moveTo(70, 10);
                ctx.lineTo(50, 60);
                ctx.strokeStyle = "white";
                ctx.stroke();

                break;

            case 2:
                ctx.moveTo(130, 10);
                ctx.lineTo(50, 10);
                ctx.strokeStyle = "white";
                ctx.stroke();

                break;
            case 3:
                ctx.moveTo(130, 35);
                ctx.lineTo(130, 10);
                ctx.strokeStyle = "white";
                ctx.stroke();

                break


            default:
                return
        }
    }

}

function nextGuess () {
    next++
}

function divClick(e) {
    if(e.target.id === 'clicked')  return 
    const input_divs = document.getElementsByClassName('input-divs')[0]


    for(let i of input_divs.children)  {
        if(i.id === 'click') i.id = ''
    }

    e.target.id = 'click'

    const index = e.target.value 
    stack.push(input_divs.children[index])
}

function createInput () {
    let len = 0

    const divs = document.createElement('div')
    divs.className = 'input-divs'

    while(len < words[next].length) {

        const div = document.createElement('div')
        div.onclick = divClick

        div.value = `${len}`
        div.className = 'divs'
        divs.append(div)
        len++
    }
    div_box.append(divs)
    hintGenerate()

}

function clearDivs(input_divs) {
    stack.pop()
    chances = 0
    div_box.removeChild(input_divs)
}

function compare(e) {
    if(gameOver)    return

    if(stack.length === 0) return
    const key = e.target.innerText
    const index = stack.pop()
    // console.log(words[next][index])
    if(words[next][index.value] === key.toLowerCase()) {
        index.innerText = key
        index.id = 'clicked'
        correct++
    }  
    else {
        index.innerText = key
        index.id = 'wrong'
        drawBody(chances)
        chances++

    }

    console.log(correct)

    if(correct === words[next].length-2) {
        console.log('You won!')
        points++
        document.querySelector('h1').innerText = points
        correct = 0
        resetGame()
    }

    if(chances > 5) {
        console.log('Game Over')
        resetGame()
        return
    }
}

function resetGame() {
    const input_divs = document.getElementsByClassName('input-divs')[0]
    clearDivs(input_divs)

    btn.style.display = 'block'
}

function createKeyboard () {
    const keyboard = document.getElementsByClassName('keyboard')[0]
    keyboard.style.background = 'black'
    const div = document.createElement('div')
    div.className = 'key-box'
    for(let i = 65; i<90; i++) {
        const button = document.createElement('div')
        button.innerText = String.fromCharCode(i)
        button.id = 'key'
        button.onclick = compare
        div.append(button)
    }
    keyboard.append(div)
}

function start() {
    drawPost()
    createInput()
    createKeyboard()

}


function clearCanvs () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    drawPost()
}

btn.onclick = (e)=>{
    if(e.target.className === 'next') {

        btn.style.display = 'none'
        nextGuess()
        chances = 0
        clearCanvs()
        createInput()
        return

    }
    if(e.target.className === 'start') {
        btn.className = 'next'
        btn.innerText = 'Next'
        btn.style.display = 'none'
    }

    start()
}


function hintGenerate() {
    const input_divs = document.getElementsByClassName('input-divs')[0]

    
    let len = words[next].length
    let hint1,hint2


    while(true) {
         hint1 = Math.floor(Math.random() * len)
         hint2 = Math.floor(Math.random() * len)

        if(hint1 !== hint2) {
            break
        }
    }



    let hint_1 = input_divs.children[hint1]
    let hint_2 = input_divs.children[hint2]

    hint_1.id = 'clicked'
    hint_2.id = 'clicked'

    hint_1.innerText = words[next][hint1]
    hint_2.innerText = words[next][hint2]


}