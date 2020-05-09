import { ServerResponse, IncomingMessage } from "http";
import { Url } from '@notadd/router'
import { Injector, Injectable, PlainModuleRef } from "@notadd/core";
import { HTTP_REQUEST, HTTP_RESPONSE } from "./tokens";
import { MIME } from './const'
import { parse } from 'cookie'

@Injectable()
export class HttpContext {
    request: IncomingMessage;
    response: ServerResponse;
    url: Url;
    private _injector: Injector;
    readonly plainRef: PlainModuleRef<any>;
    get injector(): Injector {
        return this._injector;
    }
    get cookies() {
        return parse(this.request.headers.cookie || '');
    }

    get path(): string {
        return this.url.pathname;
    }

    get method(): string {
        const method = this.request.method;
        if (method) return method;
        throw new Error('method is undefined')
    }

    get queryParams(): Record<string, string> {
        const params: Record<string, string> = {};
        for (const [k, v] of this.url.searchParams) {
            params[k] = v;
        }
        return params;
    }

    constructor(injector: Injector) {
        this.request = injector.get(HTTP_REQUEST)
        this.response = injector.get(HTTP_RESPONSE)
        this.url = new URL(`http://0.0.0.0${this.request.url}`);
        this.plainRef = injector.get(PlainModuleRef)
    }

    async init(injector: Injector) {
        this._injector = injector.create([])
    }

    json(res: object) {
        this.writeContentType(MIME.ApplicationJSONCharsetUTF8)
        this.response.end(
            this.plainRef.toJson(res)
        )
    }

    html(res: string) {
        this.writeContentType(MIME.TextHTMLCharsetUTF8)
        this.response.end(res)
    }

    string(res: string) {
        this.response.end(res)
    }

    writeContentType(mime: MIME) {
        this.response.setHeader('content-type', mime)
    }
}
