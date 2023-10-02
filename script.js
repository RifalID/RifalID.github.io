const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0

const botSay = (data) => {
    return [
        "Perkenalkan nama saya Rbot. siapa nama kamu?",
        `Hallo ${data?.nama}, berapa usia kamu?`,
        `ouhhh ${data?.usia}, hobi kamu apa?`,
        `woow sama dong aku juga hobi ${data?.hobi} btw, punya pacar ga?`,
        `hmmm ${data?.pacar}, ya udah klo gtu, udahan yah?`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart(){
    init++
    if(init === 1){
      botDelay ({nama: jawaban.value}) 
    } else if (init === 2){ 
    botDelay ({usia: jawaban.value}) 

    } else if (init === 3){
    botDelay ({hobi: jawaban.value}) 

    } else if (init === 4){
    botDelay ({pacar: jawaban.value}) 
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
} 
 function botDelay(jawabanUser){
    console.log({ usersData: usersData})
    setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init]
 }, [1500])
 usersData.push(jawaban.value)
 jawaban.value = ""
 }

function finishing(){
 pertanyaan.innerHTML = `Thank u ya ${usersData[0]} udah mampir ke Rbot,
 kali kali kita main ${usersData[2]} bareng ya!`
 jawaban.value = "siap thanks juga!"
}

function botEnd() {
    window.location.reload()
}