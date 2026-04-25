 function showSidebar(){
    const sidebar = document.querySelector('#sidebar')
    sidebar.style.display = 'flex'
   }
    function hiddenSidebar(){
    const sidebar = document.querySelector('#sidebar')
    sidebar.style.display = 'none'
  }

   function getCurrentDay() {
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const today = new Date();
            return days[today.getDay()];
        }
        const dayElements = document.querySelectorAll('#currentDay')
        dayElements.forEach(elements => {
            elements.textContent = getCurrentDay();
        });