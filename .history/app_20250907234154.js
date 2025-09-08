
document.getElementById("menu1").addEventListener('click', ()=>{
      var menu1 = document.getElementById('menu1');
      if (menu1.src.includes("img/menu-bar.png")) {
            menu1.src="img/close.png";
      }
      else{
            menu1.src="img/menu-bar.png";
      }


})