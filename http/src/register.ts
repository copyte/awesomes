import { Injector, NgerRef } from '@notadd/core'
import { Router } from '@notadd/router';
import { MIME } from './const';
import { HttpContext } from './context';
import { HTTP_REQUEST, HTTP_RESPONSE } from './tokens';
import { ReactElement } from 'react';
import { renderToString, } from 'react-dom/server';
export function isReactElement(val: any): val is ReactElement {
    return Reflect.has(val, 'type') && Reflect.has(val, 'props') && Reflect.has(val, 'key')
}
export function register(property: string, method: string, options: any, methodOptions: any, injector: Injector, ref: NgerRef<any>) {
    const path = options!.path || '/';
    const methodPath = methodOptions!.path || '/';
    const _methodPath = `${path}${methodPath === '/' ? '' : methodPath}`;
    const router = injector.get(Router);
    router.add(method, _methodPath, async (injector: Injector) => {
        const instance = ref.create(injector);
        const handler = Reflect.get(instance, property)
        const res = await handler();
        const context = injector.get(HttpContext)
        if (options.type === 'html') {
            context.writeContentType(MIME.TextHTMLCharsetUTF8)
        } else if (options.type === 'css') {
            context.writeContentType(MIME.TextPlainCharsetUTF8)
        } else if (options.type === 'xml') {
            context.writeContentType(MIME.TextXMLCharsetUTF8)
        }
        if (typeof res === 'string') {
            context.string(res)
        } else if (isReactElement(res)) {
            const str = renderToString(res)
            context.html(str || '')
        } else if (typeof res === 'object') {
            context.json(res)
        }
    });
}