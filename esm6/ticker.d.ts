import { TickerStrategy } from './types.js';
export declare class Ticker {
    private readonly _interval;
    private readonly _strategy;
    private readonly _workerScript;
    private _worker?;
    private _timer?;
    constructor(_interval: number, _strategy?: TickerStrategy);
    start(tick: (elapsedTime: number) => void): void;
    stop(): void;
    private shouldUseWorker;
    private runWorker;
    private runInterval;
    private disposeWorker;
    private disposeInterval;
}
