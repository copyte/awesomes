/// <reference types="node" />
import { ServerResponse, IncomingMessage } from "http";
import { Url } from '@notadd/router';
import { Injector, PlainModuleRef } from "@notadd/core";
import { MIME } from './const';
export declare class HttpContext {
    request: IncomingMessage;
    response: ServerResponse;
    url: Url;
    private _injector;
    readonly plainRef: PlainModuleRef<any>;
    get injector(): Injector;
    get cookies(): {
        [key: string]: string;
    };
    get path(): string;
    get method(): string;
    get queryParams(): Record<string, string>;
    constructor(injector: Injector);
    init(injector: Injector): Promise<void>;
    json(res: object): void;
    html(res: string): void;
    string(res: string): void;
    writeContentType(mime: MIME): void;
}
