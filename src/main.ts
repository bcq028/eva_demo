import { Game } from '@eva/eva.js';
import { RendererSystem } from '@eva/plugin-renderer';
import { ImgSystem } from '@eva/plugin-renderer-img';
import { EventSystem } from '@eva/plugin-renderer-event';
import { SpriteAnimationSystem } from '@eva/plugin-renderer-sprite-animation';
import { RenderSystem } from '@eva/plugin-renderer-render';
import { TransitionSystem } from '@eva/plugin-transition';
import { GraphicsSystem } from '@eva/plugin-renderer-graphics';
import { TextSystem } from '@eva/plugin-renderer-text';
import { resource } from '@eva/eva.js';
import resources from './resources'
import { Battle, WINDOW_HEIGHT, WINDOW_WIDTH } from './Scenes/Battle';
import { SpriteSystem } from '@eva/plugin-renderer-sprite'

resource.addResource(resources)


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
    new SpriteSystem()
  ],
});

game.loadScene(Battle());