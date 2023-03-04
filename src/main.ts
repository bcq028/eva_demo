import createBtn from './gameObjects/btn';
import { Game } from '@eva/eva.js';
import { RendererSystem } from '@eva/plugin-renderer';
import { Img, ImgSystem } from '@eva/plugin-renderer-img';
import { EventSystem } from '@eva/plugin-renderer-event';
import { SpriteAnimationSystem } from '@eva/plugin-renderer-sprite-animation';
import { RenderSystem } from '@eva/plugin-renderer-render';
import { TransitionSystem } from '@eva/plugin-transition';
import { GraphicsSystem } from '@eva/plugin-renderer-graphics';
import { TextSystem } from '@eva/plugin-renderer-text';
import {resource,RESOURCE_TYPE} from '@eva/eva.js'


resource.addResource([
  {
    name:'image1',
    type:RESOURCE_TYPE.IMAGE,
    src:{
      image:{
        type:'png',
        url:'../../static/TB1a11YoRFR4u4jSZFPXXanzFXa-109-263.png'
      }
    }
  }
])

export const WINDOW_WIDTH=window.innerWidth

export const WINDOW_HEIGHT=window.innerHeight;

const game = new Game({
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas') as HTMLCanvasElement,
      width: WINDOW_WIDTH,
      height: WINDOW_HEIGHT,
      antialias: true,
    }),
    new ImgSystem(),
    new TransitionSystem(),
    new SpriteAnimationSystem(),
    new RenderSystem(),
    new EventSystem(),
    new GraphicsSystem(),
    new TextSystem(),
  ],
});

game.scene.transform.size.width = 750;
game.scene.transform.size.height = 1484;

const btn = createBtn({
  text: '投球',
  callback: () => {
    alert('还没做呢～一起来完善吧')
  },
});

btn.addComponent(new Img({resource:'image1'}));

game.scene.addChild(btn);
console.log('btn created')

window.game=game;
