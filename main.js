const form=document.querySelector("#emailForm")
const emailinput=document.querySelector("#emailInput")
const load=document.querySelector("#load")
const origin=document.querySelector("#origin")
const destination=document.querySelector("#destination")
const pickup=document.querySelector("#pick-up")
const delivery=document.querySelector("#delivery")
const pudate=document.querySelector("#pudate")
const deldate=document.querySelector("#deldate")
let pudel=""
let pudelbody=""

loadEventListeners()

function loadEventListeners(){
  form.addEventListener("submit",addTask) 
}

function addTask(e){

  const txtcontent=document.createElement("h4")
  const link=document.createElement("a")
  link.appendChild(document.createTextNode(`<i> load ${load.value} is ready. Click here`))
  link.innerHTML=`Load # ${load.value.toUpperCase()}`
  document.getElementsByName("pudel").forEach(radio=>{
    if(radio.checked){
      pudel=radio.value;}
      if(pudel==="pickup"){
        pudelbody="Please provide the ETA for PU or the check in/out times if already picked up and current location. In case of delay please provide the ETA, current location and reason of the delay."
          } 
      else if(pudel==="delivery") {
        pudelbody="Please provide the ETA for DEL or the check in/out times if already delivered. In case of delay please provide the ETA, current location and reason of the delay."
      }
  })
  link.setAttribute("href","mailto:"+emailinput.value+"?subject=LOAD # "+load.value.toUpperCase()+
  " *** "+origin.value.toUpperCase()+" *** "+destination.value.toUpperCase()+  " *** "+"CONFIRM "+pudel.toUpperCase()+"&cc="+cc.value.trim()+"&body="+"Good morning,%0D%0A%0D%0AI am checking in to get an update on this load: %0D%0A%0D%0APickup appt date and time: "+ pudate.value+"%0D%0ADelivery appt date and time: "+deldate.value+"%0D%0A%0D%0A"+pudelbody+" If you have the 360 APP feel free to update the location or in and out times of your load. Otherwise reply this email with the information and we'll do it for you. Also please provide the electronic logging device number if available.")

  txtcontent.appendChild(link)
  document.querySelector("#btn").appendChild(txtcontent)
  document.querySelector("a").click();

  setTimeout(()=>{window.location.reload()},100)
  
  e.preventDefault()
  
}
