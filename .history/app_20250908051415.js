
document.getElementById("menu1").addEventListener('click', ()=>{
      let menu1 = document.getElementById('menu1');
      if (menu1.src.includes("img/menu-bar.png")) {
            menu1.src="img/close.png";
            menu1.style.transition="0.5s";
            menu1.style.transform="rotate(180deg)";
            menu1.style.transform="scale(1.2)";
            menu1.style.width="25px";
            menu1.style.height="25px";
            document.getElementById("nav-bor").style.display="block";
            document.getElementById("nav-bor").classList.add("nav-bor1");
         document.getElementById("nav-bor").style.display="block";

            
            

      }
      else{
            menu1.src="img/menu-bar.png";
            document.getElementById("nav-bor").style.display="none";
      }


})


