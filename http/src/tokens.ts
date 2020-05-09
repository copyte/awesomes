import { InjectionToken } from "@notadd/core";
import { IncomingMessage, ServerResponse } from 'http'
export const HTTP_REQUEST = new InjectionToken<IncomingMessage>(`HTTP_REQUEST`)
export const HTTP_RESPONSE = new InjectionToken<ServerResponse>(`HTTP_RESPONSE`)
