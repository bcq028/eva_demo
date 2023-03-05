import { Component } from "@eva/eva.js";
import { Text } from '@eva/plugin-renderer-text'

export class FooterManager extends Component {
    init(): void {
        this.gameObject.transform.position= {
            x:0,
            y:30
        };
        this.gameObject.transform.anchor= {
            x:0.5,
            y:0.9
        };
        this.gameObject.transform.origin= {
            x:0.5,
            y:0.5
        };
        this.gameObject.addComponent(
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
    }
}