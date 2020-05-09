import { Node } from './node'
import { HandlerFunc } from './types'
export abstract class Url{
    hash: string;
    host: string;
    hostname: string;
    href: string;
    abstract toString(): string;
    readonly origin: string;
    password: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    readonly searchParams: URLSearchParams;
    username: string;
    abstract toJSON(): string;
}
export class Router {
    trees: Record<string, Node> = {};
    add(method: string, path: string, h: HandlerFunc): void {
        if (path[0] !== "/") {
            path = `/${path}`;
        }
        let root = this.trees[method];
        if (!root) {
            root = new Node();
            this.trees[method] = root;
        }
        root.addRoute(path, h);
    }
    find(method: string, url: Url): HandlerFunc | undefined {
        const node = this.trees[method];
        if (node) {
            const [handle, params, _] = node.getValue(url.pathname);
            return handle;
        }
    }
}