"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("./node");
class Url {
}
exports.Url = Url;
class Router {
    constructor() {
        this.trees = {};
    }
    add(method, path, h) {
        if (path[0] !== "/") {
            path = `/${path}`;
        }
        let root = this.trees[method];
        if (!root) {
            root = new node_1.Node();
            this.trees[method] = root;
        }
        root.addRoute(path, h);
    }
    find(method, url) {
        const node = this.trees[method];
        if (node) {
            const [handle, params, _] = node.getValue(url.pathname);
            return handle;
        }
    }
}
exports.Router = Router;
