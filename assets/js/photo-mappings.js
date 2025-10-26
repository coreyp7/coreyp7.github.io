// Photo positioning mappings for each travel page.
// Each destination has its own set of photo coordinates too.
// (Positions are percentage so its consistent across displays, 
// even though the size of the pictures will be the same).

const photoMappings = {
  japan: {
    'IMG_6551.PNG': { x: 15, y: 60, rotation: 0 },          // jam club/bar 
    'halloween.jpg': { x: 1, y: 5, rotation: 0 },           // halloween in shibuya
    'IMG_3663.jpg': { x: 50, y: 50, rotation: 0 },       // rps in 7/11 group pic 
    'IMG_6331.JPG': { x: 68, y: 5, rotation: 0 },         // popeye with bread in nagano 
    'DSCF6792.JPG': { x: 16, y: 15, rotation: 0 },         // drinking in hostel
    'DSCF6895.JPG': { x: 53, y: 13, rotation: 0 },         // street in nagano
    'DSCF6964.JPG': { x: 5, y: 45, rotation: 0 },         // river spot in kyoto
    'IMG_1617.JPG': { x: 50, y: 50, rotation: 0 },         // golden w the boys
    'IMG_6366.JPG': { x: 80, y: 65, rotation: 0 },         // tokyo bar
    'IMG_8972.jpg': { x: 75, y: 32, rotation: 0 },         // hostel halloween pic
  },
};

// Make it globally available
window.photoMappings = photoMappings;
