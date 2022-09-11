(() => {
    let playButton = document.getElementById('playButton'),
        pauseButton = document.getElementById('pauseButton');

        function playVideo() {
            theVideo = document.querySelectorAll('video');
            theVideo.forEach(video => video.play());
      }


      function pauseVideo(){

        theVideo = document.querySelectorAll('video');

        theVideo.forEach(video => video.pause());
      }

    playButton.addEventListener('click', playVideo);
    pauseButton.addEventListener('click', pauseVideo);

    let img = document.querySelector('img');
      let start = img.src;
      let hover = img.getAttribute('data-hover');

      setTimeout(() => {
        transition_el.classList.remove('activeTran');
      }, 250);
    }

      img.onmouseover = () => { img.src = hover; }

      img.onmouseout = () => { img.src = start; }

})();
