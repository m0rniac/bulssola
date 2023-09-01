"use client";
import React, { useEffect } from 'react';
import { FaCoffee } from 'react-icons/fa';

export const PayPalButton = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js';
        script.charset = 'UTF-8';
        document.body.appendChild(script);

        script.onload = () => {
            window.PayPal.Donation.Button({
                env: 'production',
                hosted_button_id: '93KMUR53KFZ7C',
                image: {
                    src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
                    alt: 'Donate with PayPal button',
                    title: 'PayPal - The safer, easier way to pay online!',
                },
            }).render('#donate-button');
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div id="donate-button-container"><div id="donate-button"></div></div>;
};

export const BuyMeACoffeeButton = () => {
    const handleClick = () => {
        window.open('https://www.buymeacoffee.com/christcastr', '_blank');
    };

    return (
        <button className="buy-me-a-coffee-button" onClick={handleClick}>
            <FaCoffee className="coffee-icon" />
            Buy Me a Coffee
        </button>
    );
};