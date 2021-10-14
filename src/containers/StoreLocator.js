import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';

const StoreLocator = () => {
    return (
        <React.Fragment>
            <Header />
            <div>
                <Button location="Portland" />
                <Button location="Astoria" />
                <Button location="" />
            </div>
            <Map />
        </React.Fragment>
    )
}

export default StoreLocator;