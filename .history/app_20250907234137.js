
document.getElementById("menu1").addEventListener('click', ()=>{
      var menu1 = document.getElementById('menu1');
      if (menu1.src.includes("img/menu-bar.png")) {
            menu1.src="img/close.png";
            document.getElementById('menu').style.display='none'
      }
      else{
            menu1.src="img/menu.png";
            document.getElementById('menu').style.display='block';
      }


})