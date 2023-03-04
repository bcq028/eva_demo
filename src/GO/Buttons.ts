import { GameObject} from "@eva/eva.js";
import { Sprite} from '@eva/plugin-renderer-sprite'

const CTRL_WIDTH=70;
const CTRL_HEIGHT=60;

export const Buttons = () => {
    const buttons = new GameObject('buttons',{
        anchor:{
            x:0.5,
            y:0.85
        }
    });
    for(let i=1;i<=6;++i){
        const button = new GameObject(`button${i}`,{
            size:{
                width:CTRL_WIDTH,
                height:CTRL_HEIGHT,
            },
            position:{
                x:Math.floor((i-1)/2)*CTRL_WIDTH-1.5*CTRL_WIDTH,
                y:(i-1)%2*(CTRL_HEIGHT+5)-1.5*CTRL_HEIGHT
            }
        });
        const sprite = new Sprite({
            resource: 'buttons',
            spriteName: `ctrl (${i}).png`
        });
        button.addComponent(sprite);
        buttons.addChild(button);
    }
    return buttons;
};