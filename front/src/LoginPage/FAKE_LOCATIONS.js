// Create an empty array to store the generated coordinates
const fakeCoords = [];

// Use a for loop to generate a specified number of objects containing latitude and longitude properties
for (let i = 0; i < 10; i++) {
  // Create a new object with a coords property that contains an object with latitude and longitude properties
  const coordsObj = {
    coords: {
      latitude: Math.random() * (90 - -90) + -90,
      longitude: Math.random() * (180 - -180) + -180,
    },
  };
  // Push the newly created object into the array
  fakeCoords.push(coordsObj);
}

// Export a function that returns a random coords object from the array
export function getRandomCoords() {
  const randomIndex = Math.floor(Math.random() * fakeCoords.length);
  return fakeCoords[randomIndex];
}
