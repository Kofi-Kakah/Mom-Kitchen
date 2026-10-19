function showSidebar(){document.getElementById("sidebar").style.display="flex"}
function hiddenSidebar(){document.getElementById("sidebar").style.display="none"}
const dayElements=document.querySelectorAll("#currentDay")
const currentDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date().getDay()]
dayElements.forEach(e=>{e.textContent=currentDay})