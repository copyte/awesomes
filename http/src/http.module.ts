import { Module, ModuleWithProviders, Injector, ControllerOptions, NgerRef, APP_INITIALIZER, providerToStaticProvider } from '@notadd/core'
import { register } from './register'
import {
    GetMetadataKey, GetOptions, PostMetadataKey, PostOptions,
    PutMetadataKey, PutOptions, HeadMetadataKey, HeadOptions,
    PatchMetadataKey, PatchOptions, DeleteMetadataKey, DeleteOptions,
    ConnectMetadataKey, ConnectOptions, OptionsMetadataKey, OptionsOptions,
    TraceMetadataKey, TraceOptions, HtmlMetadataKey, HtmlOptions, CssMetadataKey, CssOptions,
    ContextMetadataKey
} from './decorator'
import { IMethodDecorator, IClassDecorator, IParameterDecorator } from '@notadd/decorator'
import { HttpContext } from './context'
import { createServer, Server } from 'http'
import { HTTP_REQUEST, HTTP_RESPONSE } from './tokens'
import { Router } from '@notadd/router'
@Module()
export class HttpModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: HttpModule,
            providers: [
                {
                    provide: Server,
                    useFactory: (injector: Injector) => createServer(async (req, res) => {
                        // 每个请求一个injector
                        const reqInjector = injector.create([
                            {
                                provide: HTTP_REQUEST,
                                useValue: req
                            },
                            {
                                provide: HTTP_RESPONSE,
                                useValue: res
                            },
                            providerToStaticProvider(HttpContext)
                        ]);
                        const context = reqInjector.get(HttpContext)
                        const router = reqInjector.get(Router)
                        const handler = router.find(req.method || 'GET', context.url)
                        if (handler) {
                            return handler(reqInjector)
                        }
                        res.statusCode = 404;
                        res.statusMessage = 'not found'
                        res.end(`404 not found`)
                    }),
                    deps: [Injector]
                },
                {
                    provide: Router,
                    useFactory: () => {
                        return new Router()
                    },
                    deps: []
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: (injector: Injector) => {
                        return async () => {
                            const server = injector.get(Server)
                            server.listen(4005, '0.0.0.0', () => {
                                console.log(`app start http://localhost:4005`)
                            })
                        }
                    },
                    deps: [Injector],
                    multi: true
                },
                {
                    provide: GetMetadataKey,
                    useValue: (injector: Injector, method: IMethodDecorator<any, GetOptions>, parent: IClassDecorator<any, ControllerOptions>, ref: NgerRef<any>) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register(method.property as string, 'GET', options, methodOptions, injector, ref)
                    }
                },
                {
                    provide: PostMetadataKey,
                    useValue: (injector: Injector, method: IMethodDecorator<any, PostOptions>, parent: IClassDecorator<any, ControllerOptions>, ref: NgerRef<any>) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register(method.property as string, 'POST', options, methodOptions, injector, ref)
                    }
                },
                {
                    provide: PutMetadataKey,
                    useValue: (injector: Injector, method: IMethodDecorator<any, PutOptions>, parent: IClassDecorator<any, ControllerOptions>, ref: NgerRef<any>) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register(method.property as string, 'PUT', options, methodOptions, injector, ref)
                    }
                },
                {
                    provide: HeadMetadataKey,
                    useValue: (injector: Injector, method: IMethodDecorator<any, HeadOptions>, parent: IClassDecorator<any, ControllerOptions>, ref: NgerRef<any>) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register(method.property as string, 'HEAD', options, methodOptions, injector, ref)
                    }
                },
                {
                    provide: PatchMetadataKey,
                    useValue: (injector: Injector, method: IMethodDecorator<any, PatchOptions>, parent: IClassDecorator<any, ControllerOptions>, ref: NgerRef<any>) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register(method.property as string, 'PATCH', options, methodOptions, injector, ref)
                    }
                },
                {
                    provide: DeleteMetadataKey,
                    useValue: (injector: Injector, method: IMethodDecorator<any, DeleteOptions>, parent: IClassDecorator<any, ControllerOptions>, ref: NgerRef<any>) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register(method.property as string, 'DELETE', options, methodOptions, injector, ref)
                    }
                },
                {
                    provide: ConnectMetadataKey,
                    useValue: (injector: Injector, method: IMethodDecorator<any, ConnectOptions>, parent: IClassDecorator<any, ControllerOptions>, ref: NgerRef<any>, ...args: any[]) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register(method.property as string, 'CONNECT', options, methodOptions, injector, ref)
                    }
                },
                {
                    provide: OptionsMetadataKey,
                    useValue: (injector: Injector, method: IMethodDecorator<any, OptionsOptions>, parent: IClassDecorator<any, ControllerOptions>, ref: NgerRef<any>, ...args: any[]) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register(method.property as string, 'OPTIONS', options, methodOptions, injector, ref)
                    }
                },
                {
                    provide: TraceMetadataKey,
                    useValue: (injector: Injector, method: IMethodDecorator<any, TraceOptions>, parent: IClassDecorator<any, ControllerOptions>, ref: NgerRef<any>) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register(method.property as string, 'TRACE', options, methodOptions, injector, ref)
                    }
                },
                {
                    provide: HtmlMetadataKey,
                    useValue: (injector: Injector, method: IMethodDecorator<any, HtmlOptions>, parent: IClassDecorator<any, ControllerOptions>, ref: NgerRef<any>) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register(method.property as string, 'GET', options, methodOptions, injector, ref)
                    }
                },
                {
                    provide: CssMetadataKey,
                    useValue: (injector: Injector, method: IMethodDecorator<any, CssOptions>, parent: IClassDecorator<any, ControllerOptions>, ref: NgerRef<any>) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register(method.property as string, 'GET', options, methodOptions, injector, ref)
                    }
                },
                {
                    provide: ContextMetadataKey,
                    useValue: (method: any, parameters: any[], instance: any, injector: Injector, param: IParameterDecorator) => {
                        const context = injector.get(HttpContext);
                        Reflect.set(parameters, param.parameterIndex, context)
                    }
                },
            ]
        }
    }
}
