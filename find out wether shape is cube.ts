/** @format */
// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid could have equal sides (could be a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: side will be an integer

function cubeChecker(volume, side) {
  // Return false for invalid numbers
  if (volume <= 0 || side <= 0) {
    return false;
  }

  // Calculate what the volume would be if all sides were equal to 'side'
  const calculatedVolume = side * side * side;

  // Return true if it matches the given volume, false otherwise
  return calculatedVolume === volume;
}

