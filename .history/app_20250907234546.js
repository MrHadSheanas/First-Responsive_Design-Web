
document.getElementById("menu1").addEventListener('click', ()=>{
      let menu1 = document.getElementById('menu1');
      if (menu1.src.includes("img/menu-bar.png")) {
            menu1.src="img/close.png";
            menu1.style.width="25px";
            menu1.style.height="25px";
            document.q("nav-links").style.display="block";
      }
      else{
            menu1.src="img/menu-bar.png";
      }


})
