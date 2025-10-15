// Photo positioning mappings for each travel page.
// Each destination has its own set of photo coordinates too.
const photoMappings = {
  japan: {
    'halloween.jpg': { x: 20, y: 50, rotation: 0 },           // halloween in shibuya
    'IMG_3663.jpg': { x: 690, y: 365, rotation: 0 },        // rps in 7/11 group pic 
    'IMG_6331.JPG': { x: 1100, y: 15, rotation: 0 },         // popeye with bread in nagano 
    'DSCF6792.JPG': { x: 280, y: 150, rotation: 0 },         // drinking in hostel
    'DSCF6895.JPG': { x: 900, y: 130, rotation: 0 },         // street in nagano
    'DSCF6964.JPG': { x: 100, y: 400, rotation: 0 },         // river spot in kyoto
    'IMG_1617.JPG': { x: 1100, y: 400, rotation: 0 },         // golden w the boys
    'IMG_6366.JPG': { x: 400, y: 370, rotation: 0 },         // tokyo bar
    'IMG_6551.PNG': { x: 600, y: 80, rotation: 0 },          // jam club/bar 
    'IMG_8972.jpg': { x: 800, y: 520, rotation: 0 },         // hostel halloween pic
  },
};

// Function to get photo positions for a specific destination
function getPhotoPositions(destination) {
  return photoMappings[destination] || {};
}

// Make it globally available
window.photoMappings = photoMappings;
//window.getPhotoPositions = getPhotoPositions;
