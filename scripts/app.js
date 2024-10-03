function toggleVideo() {
  const gameplay = document.querySelector('.gameplay');
  const video = gameplay.querySelector('video'); // Search for video within the gameplay div

  if (video) {
    video.pause(); // Pause only if the video exists
  }

  gameplay.classList.toggle('active'); // Toggle active class
}

// Change the banner by its carousel image
function changeBanner(bannerCarousel, title, link) {
  const banner = document.querySelector('.banner');
  const contents = document.querySelectorAll('.content');
  const gameplay = document.querySelector('.gameplay'); // Get the gameplay div

  // Change the background of the banner
  banner.style.background = `url(../assets/banner/${bannerCarousel})`;
  banner.style.backgroundSize = 'cover';
  banner.style.backgroundPosition = 'center';

  // Remove video and close icon, then add the anchor tag with the YouTube link
  if (link) {
    gameplay.innerHTML = `
      <a href="https://${link}" target="_blank" class="youtube-link">
        <i class="fa fa-youtube-play"></i>
        <span class='youtube-inside'></span>
        <span>Watch Gameplay on YouTube</span>
      </a>`;
  } else {
    gameplay.innerHTML = `
        <video
          src="./assets/gameplay-video/Super Mario Bros. - Full Game Walkthrough.mp4"
          controls="true"
          autoplay="true"
          muted
        ></video>
        <i class="fa fa-close" onclick="toggleVideo()"></i>
      `;
  }

  // Manage the content visibility
  contents.forEach((content) => {
    content.classList.remove('active');
    if (content.classList.contains(title)) {
      content.classList.add('active');
    }
  });
}

// Toggle sidebar function
function toggleSideMenu(id) {
  const aside = document.getElementById('aside');
  aside.classList.toggle('active');
}
