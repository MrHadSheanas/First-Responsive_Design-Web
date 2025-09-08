
document.getElementById("menu1").addEventListener('click', ()=>{
      let menu1 = document.getElementById('menu1');
      if (menu1.src.includes("img/menu-bar.png")) {
            menu1.src="img/close.png";
            menu1
      }
      else{
            menu1.src="img/menu-bar.png";
      }


})