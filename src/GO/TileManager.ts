import { Component, GameObject } from "@eva/eva.js";
import { Sprite } from "@eva/plugin-renderer-sprite";

const TILE_WIDTH=32;
const TILE_HEIGHT=32;


export class TileManager extends Component {
    init(): void {
        this.gameObject.transform.anchor={
            x:0.5,
            y:0.5
        };
        this.initTile(1);
    }
    private initTile(i:number){
        const tile = new GameObject(`button${i}`,{
            size:{
                width:TILE_WIDTH,
                height:TILE_HEIGHT
            },
            anchor:{
                x:0.5,
                y:0.5
            }
        });
        const sprite = new Sprite({
            resource: 'tiles',
            spriteName: `bg (${i}).png`
        });
        tile.addComponent(sprite);
        this.gameObject.addChild(tile);
    }
}