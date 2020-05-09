import { Injector, NgerRef } from '@notadd/core';
import { ReactElement } from 'react';
export declare function isReactElement(val: any): val is ReactElement;
export declare function register(property: string, method: string, options: any, methodOptions: any, injector: Injector, ref: NgerRef<any>): void;
