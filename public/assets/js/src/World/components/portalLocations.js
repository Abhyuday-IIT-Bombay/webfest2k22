import { Vector3 } from './../../../node_modules/three/build/three.module.js';
const gateCoordinates = [
    {
        name: "",
        link: "/quiz/index.html",
        position: new Vector3(-175, -50, 100),
        gatePosition: new Vector3(-160,-50,10),
        houseName: "House_02_FantasyAtlas_mat_0"
    },
    {
        name: "",
        link:"./samwaad/index.html",
        position: new Vector3(260, -50, 320),
        gatePosition: new Vector3(360,-35,320),

        houseName: "House_03_FantasyAtlas_mat_0"
    },
    {
        name: "",
        link:"./events/index.html",
        position: new Vector3(170, -50, -170),
        gatePosition: new Vector3(180,10,-260),

        houseName: "House_01_FantasyAtlas_mat_0"
    },
    {
        name: "",
        link:"./kalamanch/index.html",
        position: new Vector3(345, -50, -45),
        gatePosition: new Vector3(480,-50,-45),

        houseName: "House_04_FantasyAtlas_mat_0"
    }
]


function gateLocations() {
    return gateCoordinates;
}

export { gateLocations } 