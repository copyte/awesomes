import { Node } from './node';
import { HandlerFunc } from './types';
export declare abstract class Url {
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
export declare class Router {
    trees: Record<string, Node>;
    add(method: string, path: string, h: HandlerFunc): void;
    find(method: string, url: Url): HandlerFunc | undefined;
}
