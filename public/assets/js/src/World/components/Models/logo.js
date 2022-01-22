import { GLTFLoader } from './../../../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './setupModel.js';


async function loadLogo(isLaptop) {

    const loader = new GLTFLoader();
    var logoModel;
    if(isLaptop)
    logoModel = await loader.loadAsync('assets/models/socio.glb');
    else
    logoModel = await loader.loadAsync('assets/models/socio.glb');


    const logo = setupModel(logoModel);
    if (isLaptop) {
        logo.rotation.set(Math.PI/2, -1.57, /* Math.PI/2 */ 1.57);
        logo.position.set(-160,-40,600);
        logo.scale.set(450, 450, 450);
    } else {
        logo.rotation.set(+Math.PI / 2,0, Math.PI/5);
        logo.position.set(0,500,0);
        logo.scale.set(4,4,4);
    }

    return logo;

}

export { loadLogo }
