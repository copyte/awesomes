import { corePlatform, Module, Controller } from '@notadd/core'
import { HttpModule } from './http.module'
import { Get } from './decorator'

@Controller('/')
export class DemoController {
    @Get()
    index() {
        return `welcome`
    }
}

@Module({
    imports: [
        HttpModule.forRoot()
    ],
    controllers: [
        DemoController
    ]
})
export class AppModule { }
corePlatform().bootstrapModule(AppModule)