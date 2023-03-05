import { Component, GameObject } from "@eva/eva.js";
import { ButtonManager } from "../../GO/ButtonManager";
import { FooterManager } from "../../GO/FooterManager";
import { TileManager } from "../../GO/TileManager";

export class BattleManager extends Component {
    init(): void {
        const buttons=new GameObject('buttons');
        buttons.addComponent(new ButtonManager());
        const footer=new GameObject('footer');
        footer.addComponent(new FooterManager());
        const tiles=new GameObject('tile');
        tiles.addComponent(new TileManager());
        this.gameObject.addChild(buttons);
        this.gameObject.addChild(footer);
        this.gameObject.addChild(tiles);
    }
}