/// <reference types="node" />
import { InjectionToken } from "@notadd/core";
import { IncomingMessage, ServerResponse } from 'http';
export declare const HTTP_REQUEST: InjectionToken<IncomingMessage>;
export declare const HTTP_RESPONSE: InjectionToken<ServerResponse>;
