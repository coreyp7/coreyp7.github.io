// Interactive destination photo canvas functionality
// This script handles draggable photos and text elements with loading screens

// 'window.pageFrontMatter' is set in 'interactive-destination.html' template. 
// This has to be done because accessing the front matter from a separate js file 
// doesn't work.
function createPhotoElements() {
  if (typeof window.photoMappings === 'undefined' || !window.pageFrontMatter) {
    return;
  }

  const photoDir = window.pageFrontMatter.photo_dir_name;
  const mappings = window.photoMappings[photoDir];
  
  if (!mappings) return;
  
  const canvas = document.getElementById('photoCanvas');
  
  // Create all the draggable photo elements using the config of the current page. 
  // (This is determined by the 'photoDir' from the front matter in the markdown file)
  Object.keys(mappings).forEach(filename => {
    let pos = mappings[filename];
    const photoDiv = document.createElement('div');
    photoDiv.className = 'draggable-photo';
    photoDiv.style.transform = `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotation}deg)`;
    photoDiv.setAttribute('data-x', pos.x);
    photoDiv.setAttribute('data-y', pos.y);
    photoDiv.setAttribute('data-rotation', pos.rotation);
    
    const img = document.createElement('img');
    img.src = `/assets/img/travel/${photoDir}/${filename}`;
    img.alt = filename;
    
    photoDiv.appendChild(img);
    canvas.appendChild(photoDiv);
  });
}

function debugPageFrontMatter() {
  if (typeof window.pageFrontMatter !== 'undefined') {
    console.log("pageFrontMatter found:", window.pageFrontMatter);
    console.log("Photo dir:", window.pageFrontMatter.photo_dir_name);
  } else {
    console.log("pageFrontMatter not found");
  }
}

document.addEventListener("DOMContentLoaded", function() {
    createPhotoElements();
    //debugPageFrontMatter();
    initializeDraggable();
});

window.addEventListener('load', function() {
    setupImageLoadHandler();
});

function hideLoadingScreen() {
  const loadingScreen = document.getElementById('loadingScreen');
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500); // Match transition duration
  }, 200); // Small delay for better UX
}

function setupImageLoadHandler() {
  const canvas = document.getElementById('photoCanvas');
  const images = canvas.querySelectorAll('img');
  
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
  
  images.forEach(img => {
    if (img.complete) {
      checkAllLoaded();
    } else {
      img.addEventListener('load', checkAllLoaded);
      img.addEventListener('error', checkAllLoaded); // Count errors as "loaded" to prevent hanging
    }
  });
}

function initializeDraggable() {
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
}

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
