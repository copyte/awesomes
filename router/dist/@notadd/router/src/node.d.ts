import { HandlerFunc, Params } from "./types";
export declare enum NodeType {
    Static = 0,
    Root = 1,
    Param = 2,
    CatchAll = 3
}
export declare function countParams(path: string): number;
export declare class Node {
    priority: number;
    children: Node[];
    path: string;
    wildChild: boolean;
    nType: NodeType;
    indices: string;
    handle: HandlerFunc | undefined;
    maxParams: number;
    addRoute(path: string, handle: HandlerFunc): void;
    incrementChildPrio(pos: number): number;
    insertChild(numParams: number, path: string, fullPath: string, handle: HandlerFunc): void;
    getValue(path: string): [HandlerFunc | undefined, Params | undefined, boolean];
}
