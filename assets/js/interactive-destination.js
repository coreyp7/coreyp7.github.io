// Interactive destination photo canvas functionality
// This script handles draggable photos and text elements with loading screens

// 'window.pageFrontMatter' is set in 'interactive-destination.html' template. 
// This has to be done because accessing the front matter from a separate js file 
// doesn't work.
document.addEventListener("DOMContentLoaded", function() {
  
  if (typeof window.pageFrontMatter !== 'undefined') {
    console.log("pageFrontMatter found:", window.pageFrontMatter);
    console.log("Photo dir:", window.pageFrontMatter.photo_dir_name);
  } else {
    console.log("pageFrontMatter not found");
  }
});

// Wait for all images to load before hiding loading screen
window.addEventListener('load', function() {
  const canvas = document.getElementById('photoCanvas');
  const images = canvas.querySelectorAll('img');
  const loadingScreen = document.getElementById('loadingScreen');
  
  if (images.length === 0) {
    hideLoadingScreen();
    return;
  }
  
  let loadedCount = 0;
  const totalImages = images.length;
  
  function checkAllLoaded() {
    loadedCount++;
    if (loadedCount === totalImages) {
      hideLoadingScreen();
    }
  }
  
  function hideLoadingScreen() {
    setTimeout(() => {
      loadingScreen.classList.add('fade-out');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500); // Match transition duration
    }, 200); // Small delay for better UX
  }
  
  images.forEach(img => {
    if (img.complete) {
      checkAllLoaded();
    } else {
      img.addEventListener('load', checkAllLoaded);
      img.addEventListener('error', checkAllLoaded); // Count errors as "loaded" to prevent hanging
    }
  });
});

// Make elements draggable
interact('.draggable-photo, .draggable-text')
  .draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: { top: 0, left: 0, bottom: window.innerHeight, right: window.innerWidth },
        endOnly: true
      })
    ],
    autoScroll: true,
    listeners: {
      move: dragMoveListener,
      end: function (event) {
        // Add a slight rotation on drop for natural feel
        //const randomRotation = (Math.random() - 0.5) * 6; // -3 to 3 degrees
        //const x = parseFloat(event.target.getAttribute('data-x')) || 0;
        //const y = parseFloat(event.target.getAttribute('data-y')) || 0;
        //event.target.style.transform = `translate(${x}px, ${y}px)`;
        //event.target.setAttribute('data-rotation', randomRotation);
      }
    }
  });

function dragMoveListener(event) {
  var target = event.target;
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  // Preserve existing rotation if any
  var currentRotation = target.getAttribute('data-rotation') || '0';
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px) rotate(' + currentRotation + 'deg)';
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

// Photo positioning map - dynamically loaded based on page front matter
// This will be populated from the photo-mappings.js file
let photoPositions = {};

function getPhotoIdentifier(element) {
  const img = element.querySelector('img');
  if (img && img.src) {
    const filename = img.src.split('/').pop();
    if (photoPositions[filename]) return filename;
  }
  
  return null;
}

// On load, draw all the images.
window.addEventListener('load', function() {
  // Wait a bit to ensure images are loaded and have dimensions
  setTimeout(() => {
    const canvas = document.getElementById('photoCanvas');
    const elements = canvas.querySelectorAll('.draggable-photo, .draggable-text');
    
    if (elements.length === 0) return;
    
    let isPhotoPositionMapFound = window.pageFrontMatter && window.pageFrontMatter.photo_dir_name && window.photoMappings
    if (isPhotoPositionMapFound) {
      photoPositions = window.photoMappings[window.pageFrontMatter.photo_dir_name];
    }    
    
    elements.forEach(element => {
      const identifier = getPhotoIdentifier(element);
      
      if (identifier && photoPositions[identifier]) {
        const pos = photoPositions[identifier];
        const x = pos.x || 0;
        const y = pos.y || 0;
        const rotation = pos.rotation || 0;
        
        element.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
        element.setAttribute('data-x', x);
        element.setAttribute('data-y', y);
        element.setAttribute('data-rotation', rotation);
      } else {
        // No position in map, will auto-position
        // elementsToAutoPosition.push(element);
      }
    });
    
  }, 500); // Wait for images to load
});
