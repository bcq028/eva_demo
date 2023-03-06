import { Component, GameObject } from "@eva/eva.js";
import { Sprite } from "@eva/plugin-renderer-sprite";

const TILE_WIDTH = 32;
const TILE_HEIGHT = 32;

enum TILE_TYPE {
    WALL_ROW,
    WALL_COLUMN,
    WALL_LEFT_TOP,
    WALL_LEFT_BOTTOM,
    WALL_RIGHT_TOP,
    WALL_RIGHT_BOTTOM,
    CLIFF_CENTER,
    CLIFF_LEFT,
    CLIFF_RIGHT,
    FLOOR
}

function get_type_id(t: TILE_TYPE) {
    switch (t) {
        case TILE_TYPE.WALL_ROW:
            return [20,21]
        case TILE_TYPE.WALL_COLUMN:
            return [5, 6]
        case TILE_TYPE.WALL_LEFT_TOP:
            return [25, 26, 27]
        case TILE_TYPE.WALL_LEFT_BOTTOM:
            return [9, 10, 11]
        case TILE_TYPE.WALL_RIGHT_TOP:
            return [25, 26, 27]
        case TILE_TYPE.WALL_RIGHT_BOTTOM:
            return [9, 10, 11]
        case TILE_TYPE.CLIFF_CENTER:
            return [17]
        case TILE_TYPE.CLIFF_LEFT:
            return [18]
        case TILE_TYPE.CLIFF_RIGHT:
            return [19]
        case TILE_TYPE.FLOOR:
            return [1, 2, 3, 4]
    }
}

function get_ramdom_type_id(t: TILE_TYPE) {
    const arr = get_type_id(t);
    return arr[Math.floor(Math.random() * arr.length)];
}


export class TileManager extends Component {
    init(): void {
        this.gameObject.transform.anchor = {
            x: 0.5,
            y: 0.4
        };
        this.initTileMap(9, 15);
    }

    private initTileMap(width: number, height: number) {
        for (let i = 0; i < height; ++i) {
            for (let j = 0; j < width; ++j) {
                let t = TILE_TYPE.FLOOR;
                //底层悬崖
                if (i == height - 1) {
                    if (j == 0) {
                        t = TILE_TYPE.CLIFF_LEFT;
                    }
                    else if (j == width - 1) {
                        t = TILE_TYPE.CLIFF_RIGHT;
                    } else {
                        t = TILE_TYPE.CLIFF_CENTER;
                    }
                    // 墙壁
                } else if (j == width - 1 || j==0 || i==0 || i==height-2) {
                    if(i==height-2 || i==0){
                        if(j==0) t=i==0?TILE_TYPE.WALL_LEFT_TOP:TILE_TYPE.WALL_LEFT_BOTTOM;
                        else if (j==width-1) t=i==0?TILE_TYPE.WALL_RIGHT_TOP:TILE_TYPE.WALL_RIGHT_BOTTOM;
                        else t=TILE_TYPE.WALL_ROW;
                    }else{
                        t=TILE_TYPE.WALL_COLUMN;
                    }
                    
                }

                this.initTile(get_ramdom_type_id(t), j * TILE_WIDTH - width * TILE_WIDTH / 2, i * TILE_HEIGHT - height * TILE_HEIGHT / 2);
            }
        }
    }

    private initTile(i: number, offsetX: number, offsetY: number) {
        const tile = new GameObject(`tile${i}`, {
            size: {
                width: TILE_WIDTH,
                height: TILE_HEIGHT
            },
            position: {
                x: offsetX,
                y: offsetY
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