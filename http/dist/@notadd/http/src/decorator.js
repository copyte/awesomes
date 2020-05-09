"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_1 = require("@notadd/decorator");
exports.PostMetadataKey = `@nger/http PostMetadataKey`;
exports.Post = decorator_1.createMethodDecorator(exports.PostMetadataKey, it => {
    const options = it.options;
    if (typeof options === 'string') {
        it.options = {
            path: options
        };
    }
    else if (options) {
        it.options = options;
    }
    else {
        it.options = {
            path: '/'
        };
    }
});
exports.GetMetadataKey = `@nger/http GetMetadataKey`;
exports.Get = decorator_1.createMethodDecorator(exports.GetMetadataKey, it => {
    const options = it.options;
    if (typeof options === 'string') {
        it.options = {
            path: options
        };
    }
    else if (options) {
        it.options = options;
    }
    else {
        it.options = {
            path: '/'
        };
    }
});
exports.PutMetadataKey = `@nger/http PutMetadataKey`;
exports.Put = decorator_1.createMethodDecorator(exports.PutMetadataKey, it => {
    const options = it.options;
    if (typeof options === 'string') {
        it.options = {
            path: options
        };
    }
    else if (options) {
        it.options = options;
    }
    else {
        it.options = {
            path: '/'
        };
    }
});
exports.HeadMetadataKey = `@nger/http HeadMetadataKey`;
exports.Head = decorator_1.createMethodDecorator(exports.HeadMetadataKey, it => {
    const options = it.options;
    if (typeof options === 'string') {
        it.options = {
            path: options
        };
    }
    else if (options) {
        it.options = options;
    }
    else {
        it.options = {
            path: '/'
        };
    }
});
exports.PatchMetadataKey = `@nger/http PatchMetadataKey`;
exports.Patch = decorator_1.createMethodDecorator(exports.PatchMetadataKey, it => {
    const options = it.options;
    if (typeof options === 'string') {
        it.options = {
            path: options
        };
    }
    else if (options) {
        it.options = options;
    }
    else {
        it.options = {
            path: '/'
        };
    }
});
exports.DeleteMetadataKey = `@nger/http DeleteMetadataKey`;
exports.Delete = decorator_1.createMethodDecorator(exports.DeleteMetadataKey, it => {
    const options = it.options;
    if (typeof options === 'string') {
        it.options = {
            path: options
        };
    }
    else if (options) {
        it.options = options;
    }
    else {
        it.options = {
            path: '/'
        };
    }
});
exports.ConnectMetadataKey = `@nger/http ConnectMetadataKey`;
exports.Connect = decorator_1.createMethodDecorator(exports.ConnectMetadataKey, it => {
    const options = it.options;
    if (typeof options === 'string') {
        it.options = {
            path: options
        };
    }
    else if (options) {
        it.options = options;
    }
    else {
        it.options = {
            path: '/'
        };
    }
});
exports.OptionsMetadataKey = `@nger/http OptionsMetadataKey`;
exports.Options = decorator_1.createMethodDecorator(exports.OptionsMetadataKey, it => {
    const options = it.options;
    if (typeof options === 'string') {
        it.options = {
            path: options
        };
    }
    else if (options) {
        it.options = options;
    }
    else {
        it.options = {
            path: '/'
        };
    }
});
exports.TraceMetadataKey = `@nger/http TraceMetadataKey`;
exports.Trace = decorator_1.createMethodDecorator(exports.TraceMetadataKey, it => {
    const options = it.options;
    if (typeof options === 'string') {
        it.options = {
            path: options
        };
    }
    else if (options) {
        it.options = options;
    }
    else {
        it.options = {
            path: '/'
        };
    }
});
exports.ContextMetadataKey = `@nger/http ContextMetadataKey`;
exports.Context = decorator_1.createParameterDecorator(exports.ContextMetadataKey);
exports.HtmlMetadataKey = `@nger/http HtmlMetadataKey`;
exports.Html = decorator_1.createMethodDecorator(exports.HtmlMetadataKey, it => {
    const options = it.options;
    if (typeof options === 'string') {
        it.options = {
            path: options,
            type: 'html'
        };
    }
    else if (options) {
        options.type = 'html';
        it.options = options;
    }
    else {
        it.options = {
            path: '/',
            type: 'html'
        };
    }
});
exports.CssMetadataKey = `@nger/http CssMetadataKey`;
exports.Css = decorator_1.createMethodDecorator(exports.HtmlMetadataKey, it => {
    const options = it.options;
    if (typeof options === 'string') {
        it.options = {
            path: options,
            type: 'css'
        };
    }
    else if (options) {
        options.type = 'css';
        it.options = options;
    }
    else {
        it.options = {
            path: '/',
            type: 'css'
        };
    }
});
