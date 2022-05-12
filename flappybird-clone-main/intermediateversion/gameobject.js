class GameObject {

    static #gameObjects = [];

    constructor (drawOrder, tag) {
        // higher draworder is drawn in front
        this.drawOrder = drawOrder;
        this.tag = tag;
        this.isActive = true;
        GameObject.#gameObjects.push(this);
        GameObject.sortAllByDrawOrder();

    }

    static drawAll() {
        for (let object of GameObject.#gameObjects) {
            if (object.isActive)
                object.draw();
        }
    }

    static updateAll() {
        for (let object of GameObject.#gameObjects) {
            object.update();
        }
    }

    static sortAllByDrawOrder () {
        let result = GameObject.#gameObjects;

        // i is the current index
        for(let i = 0; i < result.length; i++) {
            // first index of the smallest number
            let s = i;

            // j is the temporary index for searching
            for(let j = i; j < result.length; j++) {
                if(result[s].drawOrder > result[j].drawOrder) {
                    s = j;
                }
            }
            // temporary index used for swapping
            let t = result[i];
            result[i] = result[s]
            result[s] = t;
        }
        GameObject.#gameObjects = result;
    }

    draw () {
    }

    update() {
    }

    destroy() {
        let newobjects = [];
        for(let object of GameObject.#gameObjects) {
            if (object != this)
                newobjects.push(object); 
        }
        GameObject.#gameObjects = newobjects;
    }

    static destroyAll () {
        GameObject.#gameObjects = [];
    }

    static destroyAllWithTag(tag) {
        GameObject.#gameObjects = GameObject.#gameObjects
        .filter(x => x.tag != tag);
    }
}