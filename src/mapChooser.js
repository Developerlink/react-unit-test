
const mapChooser = (locationName) => {
    // The '!' means any value in js that will return false when converted to boolean:
    // undefined, "", 0, null, not-a-number
    if (!locationName)
        return "none.png";
    return (locationName + ".png");  
}

export default mapChooser;