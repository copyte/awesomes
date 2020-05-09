"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@notadd/core");
const tokens_1 = require("./tokens");
const const_1 = require("./const");
const cookie_1 = require("cookie");
let HttpContext = class HttpContext {
    constructor(injector) {
        this.request = injector.get(tokens_1.HTTP_REQUEST);
        this.response = injector.get(tokens_1.HTTP_RESPONSE);
        this.url = new URL(`http://0.0.0.0${this.request.url}`);
        this.plainRef = injector.get(core_1.PlainModuleRef);
    }
    get injector() {
        return this._injector;
    }
    get cookies() {
        return cookie_1.parse(this.request.headers.cookie || '');
    }
    get path() {
        return this.url.pathname;
    }
    get method() {
        const method = this.request.method;
        if (method)
            return method;
        throw new Error('method is undefined');
    }
    get queryParams() {
        const params = {};
        for (const [k, v] of this.url.searchParams) {
            params[k] = v;
        }
        return params;
    }
    async init(injector) {
        this._injector = injector.create([]);
    }
    json(res) {
        this.writeContentType(const_1.MIME.ApplicationJSONCharsetUTF8);
        this.response.end(this.plainRef.toJson(res));
    }
    html(res) {
        this.writeContentType(const_1.MIME.TextHTMLCharsetUTF8);
        this.response.end(res);
    }
    string(res) {
        this.response.end(res);
    }
    writeContentType(mime) {
        this.response.setHeader('content-type', mime);
    }
};
HttpContext = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Injector])
], HttpContext);
exports.HttpContext = HttpContext;
