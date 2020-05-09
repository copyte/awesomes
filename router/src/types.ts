import { Injector } from '@notadd/di'
export type HandlerFunc = (c: Injector) => Promise<unknown> | unknown;
export type Param = {
    key: string;
    value: string;
};
export type Params = Param[];