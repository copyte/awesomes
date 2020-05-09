"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["Get"] = "GET";
    HttpMethod["Head"] = "HEAD";
    HttpMethod["Post"] = "POST";
    HttpMethod["Put"] = "PUT";
    HttpMethod["Patch"] = "PATCH";
    HttpMethod["Delete"] = "DELETE";
    HttpMethod["Connect"] = "CONNECT";
    HttpMethod["Options"] = "OPTIONS";
    HttpMethod["Trace"] = "TRACE";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
var Header;
(function (Header) {
    Header["Accept"] = "Accept";
    Header["AcceptEncoding"] = "Accept-Encoding";
    Header["Allow"] = "Allow";
    Header["Authorization"] = "Authorization";
    Header["ContentDisposition"] = "Content-Disposition";
    Header["ContentEncoding"] = "Content-Encoding";
    Header["ContentLength"] = "Content-Length";
    Header["ContentType"] = "Content-Type";
    Header["Cookie"] = "Cookie";
    Header["SetCookie"] = "Set-Cookie";
    Header["IfModifiedSince"] = "If-Modified-Since";
    Header["LastModified"] = "Last-Modified";
    Header["Location"] = "Location";
    Header["Upgrade"] = "Upgrade";
    Header["Vary"] = "Vary";
    Header["WWWAuthenticate"] = "WWW-Authenticate";
    Header["XForwardedFor"] = "X-Forwarded-For";
    Header["XForwardedProto"] = "X-Forwarded-Proto";
    Header["XForwardedProtocol"] = "X-Forwarded-Protocol";
    Header["XForwardedSsl"] = "X-Forwarded-Ssl";
    Header["XUrlScheme"] = "X-Url-Scheme";
    Header["XHTTPMethodOverride"] = "X-HTTP-Method-Override";
    Header["XRealIP"] = "X-Real-IP";
    Header["XRequestID"] = "X-Request-ID";
    Header["XRequestedWith"] = "X-Requested-With";
    Header["Server"] = "Server";
    Header["Origin"] = "Origin";
    Header["AccessControlRequestMethod"] = "Access-Control-Request-Method";
    Header["AccessControlRequestHeaders"] = "Access-Control-Request-Headers";
    Header["AccessControlAllowOrigin"] = "Access-Control-Allow-Origin";
    Header["AccessControlAllowMethods"] = "Access-Control-Allow-Methods";
    Header["AccessControlAllowHeaders"] = "Access-Control-Allow-Headers";
    Header["AccessControlAllowCredentials"] = "Access-Control-Allow-Credentials";
    Header["AccessControlExposeHeaders"] = "Access-Control-Expose-Headers";
    Header["AccessControlMaxAge"] = "Access-Control-Max-Age";
    Header["StrictTransportSecurity"] = "Strict-Transport-Security";
    Header["XContentTypeOptions"] = "X-Content-Type-Options";
    Header["XXSSProtection"] = "X-XSS-Protection";
    Header["XFrameOptions"] = "X-Frame-Options";
    Header["ContentSecurityPolicy"] = "Content-Security-Policy";
    Header["ContentSecurityPolicyReportOnly"] = "Content-Security-Policy-Report-Only";
    Header["XCSRFToken"] = "X-CSRF-Token";
    Header["ReferrerPolicy"] = "Referrer-Policy";
})(Header = exports.Header || (exports.Header = {}));
var MIME;
(function (MIME) {
    MIME["ApplicationGZip"] = "application/gzip";
    MIME["ApplicationJSON"] = "application/json";
    MIME["ApplicationJSONCharsetUTF8"] = "application/json; charset=UTF-8";
    MIME["ApplicationJavaScript"] = "application/javascript";
    MIME["ApplicationJavaScriptCharsetUTF8"] = "application/javascript; charset=UTF-8";
    MIME["ApplicationXML"] = "application/xml";
    MIME["ApplicationXMLCharsetUTF8"] = "application/xml; charset=UTF-8";
    MIME["TextMarkdown"] = "text/markdown";
    MIME["TextMarkdownCharsetUTF8"] = "text/markdown; charset=UTF-8";
    MIME["TextXML"] = "text/xml";
    MIME["TextXMLCharsetUTF8"] = "text/xml; charset=UTF-8";
    MIME["ApplicationForm"] = "application/x-www-form-urlencoded";
    MIME["ApplicationProtobuf"] = "application/protobuf";
    MIME["ApplicationMsgpack"] = "application/msgpack";
    MIME["TextHTML"] = "text/html";
    MIME["TextHTMLCharsetUTF8"] = "text/html; charset=UTF-8";
    MIME["TextPlain"] = "text/plain";
    MIME["TextPlainCharsetUTF8"] = "text/plain; charset=UTF-8";
    MIME["MultipartForm"] = "multipart/form-data";
    MIME["OctetStream"] = "application/octet-stream";
})(MIME = exports.MIME || (exports.MIME = {}));
exports.DB = {
    ".md": MIME.TextMarkdownCharsetUTF8,
    ".html": MIME.TextHTMLCharsetUTF8,
    ".htm": MIME.TextHTMLCharsetUTF8,
    ".json": MIME.ApplicationJSON,
    ".map": MIME.ApplicationJSON,
    ".txt": MIME.TextPlainCharsetUTF8,
    ".ts": MIME.ApplicationJavaScriptCharsetUTF8,
    ".tsx": MIME.ApplicationJavaScriptCharsetUTF8,
    ".js": MIME.ApplicationJavaScriptCharsetUTF8,
    ".jsx": MIME.ApplicationJavaScriptCharsetUTF8,
    ".gz": MIME.ApplicationGZip,
};
