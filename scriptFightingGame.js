
        let player1=document.getElementById("player1")
        let player2=document.getElementById("player2")
        let pa1=document.getElementById("pa1")
        let pa2=document.getElementById("pa2")
        let heal1=document.getElementById("heal1")
        let heal2=document.getElementById("heal2")
        let stats1=document.getElementById("stats1")
        let stats2=document.getElementById("stats2")
        let reset=document.getElementById("reset")
        let simulate=document.getElementById("simulate")
        let result=document.getElementById("result")
        let p1a=document.getElementById("p1a")
        let p2a=document.getElementById("p2a")
        let p1h=document.getElementById("p1h")
        let p2h=document.getElementById("p2h")
        let win=document.getElementById("win")


        // pa1.addEventListener('keydown')
        document.addEventListener('keydown',(e)=>{
            if(e.key=='q'||e.key=='Q'){
                console.log("You pressed Q")
                // p1a.play()
                pa1.click()
            }
        })
        document.addEventListener('keydown',(e)=>{
            if(e.key=='a'||e.key=='A'){
                console.log("You pressed A")
                // p1h.play()
                heal1.click()
            }
        })
        document.addEventListener('keydown',(e)=>{
            if(e.key=='O'||e.key=='o'){
                console.log("You pressed O")
                // p1a.play()
                pa2.click()
            }
        })
        document.addEventListener('keydown',(e)=>{
            if(e.key=='l'||e.key=='L'){
                console.log("You pressed L")
                // p1a.play()
                heal2.click()
            }
        })

        
        pa1.onclick=()=>{
            if(!g1.isOver){
                p1a.play()
                p1.attck(p2,g1)
            }
        }
        pa2.onclick=()=>{
            if(!g1.isOver){
                p2a.play()
                p2.attck(p1,g1)
            }
        }
        heal1.onclick=()=>{
            if(!g1.isOver){
                p1h.play()
                p1.heal()
            }
        }
        heal2.onclick=()=>{
            if(!g1.isOver){
                p2h.play()
                p2.heal()
            }
        }
        reset.onclick=()=>g1.reset(p1,p2)
        simulate.onclick=()=>g1.simulateGame(p1,p2,g1)
        class Player{
            constructor(name,currHealth,attackDamage,healScore){
                this.name=name
                this.currHealth=currHealth
                this.attackDamage=attackDamage
                this.healScore=healScore
            }
            get gethealthStatus(){
                return this.currHealth
            }
            set sethealthStatus(health){
                this.currHealth=health
            }
            attck(enemy,gameState){
                let amt=Math.ceil(Math.random()*this.attackDamage)
                enemy.currHealth-=amt
                updateGame(p1,p2,gameState)
                commentry.innerHTML+=`${this.name} attacks ${enemy.name} for ${amt} --> ${p1.name}: ${p1.currHealth} || ${p2.name}: ${p2.currHealth}<br>`
                return enemy.currHealth
            }
            heal(gameState){
                let amt=Math.ceil(Math.random()*this.healScore)
                this.currHealth+=amt
                if(this.currHealth>=100){
                    this.currHealth=100
                }
                updateGame(p1,p2,gameState)
                commentry.innerHTML+=`${this.name} Heals by ${amt} --> ${p1.name}: ${p1.currHealth} || ${p2.name}: ${p2.currHealth}<br>`
                return this.currHealth
            }
        }
        class Game{
            constructor(){
                this.isOver=false
            }
            declareWinner(p1,p2){
                if(p1.currHealth<=0 && p2.currHealth>=0){
                    result.innerText=`${p2.name} is a Winner`
                }else if(p1.currHealth>=0 && p2.currHealth<=0){
                    result.innerText=`${p1.name} is a Winner`
                }
                
            }
            reset(p1,p2){
                p1.currHealth=100
                p2.currHealth=100
                this.isOver=false
                result.innerText=""
                commentry.innerText=""
                updateGame(p1,p2,g1)
            }
            simulateGame(p1,p2,g1){
                while(!g1.isOver){
                    pa1.click()
                    pa2.click()
                    heal1.click()
                    heal2.click()
                    console.log("1")
                  
                }
            }
        }
        const updateGame=(p1,p2,g1)=>{
            player1.innerText=p1.name
            player2.innerText=p2.name
            stats1.innerText=p1.currHealth
            stats2.innerText=p2.currHealth

            if(p1.currHealth<=0 || p2.currHealth<=0){
                g1.isOver=true
                g1.declareWinner(p1,p2)
                win.play()
            }
        }

        let u1=new Player("Bhagya",100,8,5)
        let u2=new Player("Aariyan",100,7,6)
        let p1=u1
        let p2=u2
        let newGame=new Game()
        let g1=newGame
        updateGame(p1,p2,g1)  
