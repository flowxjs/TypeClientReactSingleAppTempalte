import React, { useCallback } from 'react';
import { Component, ComponentTransform, useReactiveState } from "@typeclient/react-sapp";
import { Context, State, useMiddleware } from '@typeclient/core';
import { TestMiddleware } from './Middleware';

export type TCount = { count: number };

@Component()
@State(Count)
@useMiddleware(TestMiddleware)
export class App implements ComponentTransform {
  render(ctx: React.PropsWithRef<Context<TCount>>) {
    const count = useReactiveState(() => ctx.state.count);
    const click = useCallback(() => ctx.state.count++, [ctx.state.count]);
    return <div onClick={click}>Hello World!<sup>{ count }</sup></div>
  }
}

function Count(): TCount {
  return {
    count: 0,
  }
}