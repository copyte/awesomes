import { Injector } from '@notadd/di';
export declare type HandlerFunc = (c: Injector) => Promise<unknown> | unknown;
export declare type Param = {
    key: string;
    value: string;
};
export declare type Params = Param[];
