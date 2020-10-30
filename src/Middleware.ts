import { ComposeNextCallback, Context, Middleware, MiddlewareTransform } from "@typeclient/core";
import { TCount } from './App';

@Middleware()
export class TestMiddleware implements MiddlewareTransform<Context<TCount>> {
  async use(ctx: Context<TCount>, next: ComposeNextCallback) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    ctx.state.count += 100;
    await next();
  }
}