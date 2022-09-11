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

})();