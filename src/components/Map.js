import React from 'react';
import styles from './Map.module.css';

const Map = (props) => {
    let imagePath;
    if(props.imageName) {
        imagePath = 'images/' + props.imageName;
    }
    else {
        imagePath = 'images/none.png';
    }

    return (
        <div className={styles.MapBox}>
            <img src={imagePath} alt={props.location} />
        </div>
    );



}

export default Map;