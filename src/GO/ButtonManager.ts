import { Component, GameObject} from "@eva/eva.js";
import { Sprite} from '@eva/plugin-renderer-sprite';
import { Event } from "@eva/plugin-renderer-event";
import { Transition } from "@eva/plugin-transition";

const CTRL_WIDTH=70;
const CTRL_HEIGHT=60;

export class ButtonManager extends Component {
    static componentName='buttons';
    public init(): void {
        this.gameObject.transform.anchor={
            x:0.5,
            y:0.85
        };
        for(let i=1;i<=6;++i){
            this.initButton(i);
        }
    }
    private initButton(i:number){
        const button = new GameObject(`button${i}`,{
            size:{
                width:CTRL_WIDTH,
                height:CTRL_HEIGHT,
            },
            position:{
                x:Math.floor((i-1)/2)*CTRL_WIDTH-CTRL_WIDTH,
                y:(i-1)%2*(CTRL_HEIGHT+5)-CTRL_HEIGHT
            },
            origin:{
                x:0.5,
                y:0.5
            }
        });
        const sprite = new Sprite({
            resource: 'buttons',
            spriteName: `ctrl (${i}).png`
        });
        button.addComponent(sprite);
        const evt=button.addComponent(new Event());
        const animation=button.addComponent(new Transition());
        animation.group = {
            small: [
              {
                name: 'scale.x',
                component: button.transform,
                values: [
                  {
                    time: 0,
                    value: 1,
                    tween: 'ease-out'
                  },
                  {
                    time: 100,
                    value: 0.8,
                    tween: 'ease-out'
                  },
                  {
                    time: 200,
                    value: 1,
                    tween: 'ease-out'
                  }
                ]
              },
              {
                name: 'scale.y',
                component: button.transform,
                values: [
                  {
                    time: 0,
                    value: 1,
                    tween: 'ease-out'
                  },
                  {
                    time: 100,
                    value: 0.8,
                    tween: 'ease-out'
                  },
                  {
                    time: 200,
                    value: 1,
                    tween: 'ease-out'
                  }
                ]
              },
            ]
          }
        evt.on("touchstart",()=>{
            animation.play('small');
        });
        this.gameObject.addChild(button);
    }
  
}