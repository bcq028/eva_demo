import { GameObject, Scene } from "@eva/eva.js"
import { Text } from '@eva/plugin-renderer-text'
import { Buttons } from "../../GO/Buttons";
import { Footer } from "../../GO/Footer";


export const WINDOW_WIDTH=window.innerWidth

export const WINDOW_HEIGHT=window.innerHeight;

export const Battle=()=>{
    const scene=new Scene('battle',{
        size:{
            width:WINDOW_WIDTH,
            height:WINDOW_HEIGHT
        }
    });
    scene.addChild(Buttons());
    scene.addChild(Footer());
    return scene;
}
