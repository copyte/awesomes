"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HttpModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@notadd/core");
const register_1 = require("./register");
const decorator_1 = require("./decorator");
const context_1 = require("./context");
const http_1 = require("http");
const tokens_1 = require("./tokens");
const router_1 = require("@notadd/router");
let HttpModule = HttpModule_1 = class HttpModule {
    static forRoot() {
        return {
            ngModule: HttpModule_1,
            providers: [
                {
                    provide: http_1.Server,
                    useFactory: (injector) => http_1.createServer(async (req, res) => {
                        // 每个请求一个injector
                        const reqInjector = injector.create([
                            {
                                provide: tokens_1.HTTP_REQUEST,
                                useValue: req
                            },
                            {
                                provide: tokens_1.HTTP_RESPONSE,
                                useValue: res
                            },
                            core_1.providerToStaticProvider(context_1.HttpContext)
                        ]);
                        const context = reqInjector.get(context_1.HttpContext);
                        const router = reqInjector.get(router_1.Router);
                        const handler = router.find(req.method || 'GET', context.url);
                        if (handler) {
                            return handler(reqInjector);
                        }
                        res.statusCode = 404;
                        res.statusMessage = 'not found';
                        res.end(`404 not found`);
                    }),
                    deps: [core_1.Injector]
                },
                {
                    provide: router_1.Router,
                    useFactory: () => {
                        return new router_1.Router();
                    },
                    deps: []
                },
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: (injector) => {
                        return async () => {
                            const server = injector.get(http_1.Server);
                            server.listen(4005, '0.0.0.0', () => {
                                console.log(`app start http://localhost:4005`);
                            });
                        };
                    },
                    deps: [core_1.Injector],
                    multi: true
                },
                {
                    provide: decorator_1.GetMetadataKey,
                    useValue: (injector, method, parent, ref) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register_1.register(method.property, 'GET', options, methodOptions, injector, ref);
                    }
                },
                {
                    provide: decorator_1.PostMetadataKey,
                    useValue: (injector, method, parent, ref) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register_1.register(method.property, 'POST', options, methodOptions, injector, ref);
                    }
                },
                {
                    provide: decorator_1.PutMetadataKey,
                    useValue: (injector, method, parent, ref) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register_1.register(method.property, 'PUT', options, methodOptions, injector, ref);
                    }
                },
                {
                    provide: decorator_1.HeadMetadataKey,
                    useValue: (injector, method, parent, ref) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register_1.register(method.property, 'HEAD', options, methodOptions, injector, ref);
                    }
                },
                {
                    provide: decorator_1.PatchMetadataKey,
                    useValue: (injector, method, parent, ref) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register_1.register(method.property, 'PATCH', options, methodOptions, injector, ref);
                    }
                },
                {
                    provide: decorator_1.DeleteMetadataKey,
                    useValue: (injector, method, parent, ref) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register_1.register(method.property, 'DELETE', options, methodOptions, injector, ref);
                    }
                },
                {
                    provide: decorator_1.ConnectMetadataKey,
                    useValue: (injector, method, parent, ref, ...args) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register_1.register(method.property, 'CONNECT', options, methodOptions, injector, ref);
                    }
                },
                {
                    provide: decorator_1.OptionsMetadataKey,
                    useValue: (injector, method, parent, ref, ...args) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register_1.register(method.property, 'OPTIONS', options, methodOptions, injector, ref);
                    }
                },
                {
                    provide: decorator_1.TraceMetadataKey,
                    useValue: (injector, method, parent, ref) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register_1.register(method.property, 'TRACE', options, methodOptions, injector, ref);
                    }
                },
                {
                    provide: decorator_1.HtmlMetadataKey,
                    useValue: (injector, method, parent, ref) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register_1.register(method.property, 'GET', options, methodOptions, injector, ref);
                    }
                },
                {
                    provide: decorator_1.CssMetadataKey,
                    useValue: (injector, method, parent, ref) => {
                        const options = parent.options;
                        const methodOptions = method.options;
                        register_1.register(method.property, 'GET', options, methodOptions, injector, ref);
                    }
                },
                {
                    provide: decorator_1.ContextMetadataKey,
                    useValue: (method, parameters, instance, injector, param) => {
                        const context = injector.get(context_1.HttpContext);
                        Reflect.set(parameters, param.parameterIndex, context);
                    }
                },
            ]
        };
    }
};
HttpModule = HttpModule_1 = __decorate([
    core_1.Module()
], HttpModule);
exports.HttpModule = HttpModule;
