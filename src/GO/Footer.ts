import { GameObject } from "@eva/eva.js";
import { Text } from '@eva/plugin-renderer-text'

export const Footer = () => {
    const footer = new GameObject('footer', {
        position: {
            x: 0,
            y: 30
        },
        anchor: {
            x: 0.5,
            y: 0.9
        },
        origin: {
            x: 0.5,
            y: 0.5
        }
    });
    footer.addComponent(
        new Text({
            text: 'Cramped Room Of Death',
            style: {
                fontFamily: 'Arial',
                fontSize: 14,
                fill: ['#ffffff'], // gradient
                fontWeight: '600'
            }
        })
    );
    return footer;
};

