let btn = document.getElementsByTagName("button")
let bill = 0
let person = 0
let tipamout = 0
let perTip =document.querySelector('.tip-amout-span')
let totalam=document.querySelector('.total-amount-span')
function hander(e) {
    tipamout = parseInt(e.target.value)
    e.target.style.backgroundColor='hsl(185, 41%, 84%)'
    e.target.style.color='black'
}
for (let i = 0; i < 5; i++) {
    btn[i].addEventListener('click', (e) => { hander(e) })
}
function inpuha(e,keys){
    if(keys =='bills') bill=e.target.value
    else if(keys =="amout") person=e.target.value
    if(bill !=0 && person !=0 && tipamout !=0){
        //formula -- | (Bill amount * tip value / 100) / Number of people
        let total =(parseInt(bill)*parseInt(tipamout)/100)/parseInt(person)
        perTip.innerHTML=`$ ${parseFloat(total+parseInt(bill)).toFixed(2)}`
        totalam.innerHTML=`$ ${total.toFixed(2)}`
    }
}
let ipu1=document.querySelector('#bill-div')
ipu1.addEventListener('mousemove',(e)=>{inpuha(e,'bills')})
let ipu2=document.querySelector('#number-div')
ipu2.addEventListener('mousemove',(e)=>{inpuha(e,'amout')})
let reset =document.querySelector('.rst-btn')
reset.addEventListener('click',(e)=>{
    location.reload()
})