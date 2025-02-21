function volume_sphere(event) {
    event.preventDefault(); // Prevent form submission

    const radiusInput = document.getElementById("radius");
    const volumeOutput = document.getElementById("volume");

    const radius = parseFloat(radiusInput.value);

    // Validate input (should be a non-negative number)
    if (isNaN(radius) || radius < 0) {
        volumeOutput.value = "NaN"; // Display NaN for invalid input
        return;
    }

    // Calculate volume using V = (4/3) * π * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to 4 decimal places and display result
    volumeOutput.value = volume.toFixed(4);
}
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};