"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@notadd/router");
const const_1 = require("./const");
const context_1 = require("./context");
const server_1 = require("react-dom/server");
function isReactElement(val) {
    return Reflect.has(val, 'type') && Reflect.has(val, 'props') && Reflect.has(val, 'key');
}
exports.isReactElement = isReactElement;
function register(property, method, options, methodOptions, injector, ref) {
    const path = options.path || '/';
    const methodPath = methodOptions.path || '/';
    const _methodPath = `${path}${methodPath === '/' ? '' : methodPath}`;
    const router = injector.get(router_1.Router);
    router.add(method, _methodPath, async (injector) => {
        const instance = ref.create(injector);
        const handler = Reflect.get(instance, property);
        const res = await handler();
        const context = injector.get(context_1.HttpContext);
        if (options.type === 'html') {
            context.writeContentType(const_1.MIME.TextHTMLCharsetUTF8);
        }
        else if (options.type === 'css') {
            context.writeContentType(const_1.MIME.TextPlainCharsetUTF8);
        }
        else if (options.type === 'xml') {
            context.writeContentType(const_1.MIME.TextXMLCharsetUTF8);
        }
        if (typeof res === 'string') {
            context.string(res);
        }
        else if (isReactElement(res)) {
            const str = server_1.renderToString(res);
            context.html(str || '');
        }
        else if (typeof res === 'object') {
            context.json(res);
        }
    });
}
exports.register = register;
