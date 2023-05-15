import React from 'react';

const BuyWidget = () => {
    return (
        <iframe
            className="w-full h-full"
            allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *"
            src="https://flooz.xyz/embed/trade?swapDisabled=false&swapToTokenAddress=0x014550A34149231b8432B8dD210fADd81b1d2668&swapLockToToken=false&onRampDisabled=false&onRampAsDefault=false&onRampDefaultAmount=69&onRampTokenAddress=eth&stakeDisabled=true&network=eth&lightMode=false&primaryColor=%23c7df16&backgroundColor=transparent&roundedCorners=32&padding=32&refId=FKCt0Z"
        ></iframe>
    );
}

export default BuyWidget;