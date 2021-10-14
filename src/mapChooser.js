
const mapChooser = (locationName) => {
    // The '!' means any value in js that will return false when converted to boolean:
    // undefined, "", 0, null, not-a-number
    if (!locationName)
        return "default.jpg";
    return (locationName + ".jpg");  
}

export default mapChooser;