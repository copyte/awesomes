export declare const PostMetadataKey = "@nger/http PostMetadataKey";
export interface PostOptions {
    path: string;
}
export declare const Post: import("@notadd/decorator").NgerMethodDecorator<string | PostOptions, string | PostOptions>;
export declare const GetMetadataKey = "@nger/http GetMetadataKey";
export interface GetOptions {
    path: string;
}
export declare const Get: import("@notadd/decorator").NgerMethodDecorator<string | GetOptions, string | GetOptions>;
export declare const PutMetadataKey = "@nger/http PutMetadataKey";
export interface PutOptions {
    path: string;
}
export declare const Put: import("@notadd/decorator").NgerMethodDecorator<string | GetOptions, string | GetOptions>;
export declare const HeadMetadataKey = "@nger/http HeadMetadataKey";
export interface HeadOptions {
    path: string;
}
export declare const Head: import("@notadd/decorator").NgerMethodDecorator<string | HeadOptions, string | HeadOptions>;
export declare const PatchMetadataKey = "@nger/http PatchMetadataKey";
export interface PatchOptions {
    path: string;
}
export declare const Patch: import("@notadd/decorator").NgerMethodDecorator<string | PatchOptions, string | PatchOptions>;
export declare const DeleteMetadataKey = "@nger/http DeleteMetadataKey";
export interface DeleteOptions {
    path: string;
}
export declare const Delete: import("@notadd/decorator").NgerMethodDecorator<string | DeleteOptions, string | DeleteOptions>;
export declare const ConnectMetadataKey = "@nger/http ConnectMetadataKey";
export interface ConnectOptions {
    path: string;
}
export declare const Connect: import("@notadd/decorator").NgerMethodDecorator<string | ConnectOptions, string | ConnectOptions>;
export declare const OptionsMetadataKey = "@nger/http OptionsMetadataKey";
export interface OptionsOptions {
    path: string;
}
export declare const Options: import("@notadd/decorator").NgerMethodDecorator<string | OptionsOptions, string | OptionsOptions>;
export declare const TraceMetadataKey = "@nger/http TraceMetadataKey";
export interface TraceOptions {
    path: string;
}
export declare const Trace: import("@notadd/decorator").NgerMethodDecorator<string | TraceOptions, string | TraceOptions>;
export declare const ContextMetadataKey = "@nger/http ContextMetadataKey";
export declare const Context: import("@notadd/decorator").NgerParameterDecorator<any, any>;
export interface HtmlOptions {
    path: string;
    type?: string;
}
export declare const HtmlMetadataKey = "@nger/http HtmlMetadataKey";
export declare const Html: import("@notadd/decorator").NgerMethodDecorator<string | HtmlOptions, string | HtmlOptions>;
export interface CssOptions {
    path: string;
    type?: string;
}
export declare const CssMetadataKey = "@nger/http CssMetadataKey";
export declare const Css: import("@notadd/decorator").NgerMethodDecorator<string | CssOptions, string | CssOptions>;
