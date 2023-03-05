import { GameObject, Scene } from "@eva/eva.js"
import { ButtonManager } from "../../GO/ButtonManager";
import {  FooterManager } from "../../GO/FooterManager";
import { BattleManager } from "./BattleManager";


export const WINDOW_WIDTH=window.innerWidth

export const WINDOW_HEIGHT=window.innerHeight;

export const Battle=()=>{
    const scene=new Scene('battle',{
        size:{
            width:WINDOW_WIDTH,
            height:WINDOW_HEIGHT
        }
    });
    scene.addComponent(new BattleManager());
    return scene;
}
