document.getElementById('img-menu').addEventListener('click', function() {
   if(this.src.includes('menu-bar.png')) {
     this.src = 'img/close.png';
   }
      else {
      this.src = 'img/menu-bar.png';
      }

})