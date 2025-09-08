document.getElementById('img-menu').addEventListener('click', function() {
   if(this.src.includes('menu-bar.png')) {
     this.src = 'img/close.png';
     document.querySelector('.navbar').classList.toggle('active');
     document.querySelector('.navbar').classList.ad
   }
      else {
      this.src = 'img/menu-bar.png';
      document.querySelector('.navbar').classList.toggle('active');

      }

})