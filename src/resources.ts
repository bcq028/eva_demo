import { ResourceBase, RESOURCE_TYPE } from '@eva/eva.js';
export default [
  {
    name: 'buttons',
    type: RESOURCE_TYPE.SPRITE,
    src: {
      image: {
        type: 'png',
        url: '../assets/ctrl/ctrl.png'
      },
      json :{
        type:'json',
        url: '../assets/ctrl/ctrl.json'
      },
    },
    preload: true,
  }
] as ResourceBase[];