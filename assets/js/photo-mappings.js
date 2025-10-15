// Photo positioning mappings for each travel page.
// Each destination has its own set of photo coordinates too.
const photoMappings = {
  japan: {
    'halloween.jpg': { x: 20, y: 50, rotation: 0 },           // halloween in shibuya
    'IMG_6331.JPG': { x: 1100, y: 15, rotation: 0 },         // w the boys in kyoto
    'DSCF6792.JPG': { x: 300, y: 200, rotation: 0 },         // street in tokyo
    'DSCF6895.JPG': { x: 800, y: 300, rotation: 0 },         // kyoto temple
    'DSCF6964.JPG': { x: 100, y: 400, rotation: 0 },         // osaka castle
    'IMG_1617.JPG': { x: 600, y: 500, rotation: 0 },         // ramen
    'IMG_3663.jpg': { x: 1000, y: 400, rotation: 0 },        // more tokyo
    'IMG_6366.JPG': { x: 400, y: 600, rotation: 0 },         // shibuya crossing
    'IMG_6551.PNG': { x: 50, y: 700, rotation: 0 },          // cherry blossoms
    'IMG_8972.jpg': { x: 900, y: 650, rotation: 0 },         // final tokyo shot
  },
};

// Function to get photo positions for a specific destination
function getPhotoPositions(destination) {
  return photoMappings[destination] || {};
}

// Make it globally available
window.photoMappings = photoMappings;
window.getPhotoPositions = getPhotoPositions;
