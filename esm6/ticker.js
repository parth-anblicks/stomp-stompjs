import { TickerStrategy } from './types.js';
export class Ticker {
    constructor(_interval, _strategy = TickerStrategy.Interval) {
        this._interval = _interval;
        this._strategy = _strategy;
        this._workerScript = `
    var startTime = Date.now();
    setInterval(function() {
        self.postMessage(Date.now() - startTime);
    }, ${this._interval});
  `;
    }
    start(tick) {
        this.stop();
        if (this.shouldUseWorker()) {
            this.runWorker(tick);
        }
        else {
            this.runInterval(tick);
        }
    }
    stop() {
        this.disposeWorker();
        this.disposeInterval();
    }
    shouldUseWorker() {
        return typeof (Worker) !== 'undefined' && this._strategy === TickerStrategy.Worker;
    }
    runWorker(tick) {
        if (!this._worker) {
            this._worker = new Worker(URL.createObjectURL(new Blob([this._workerScript], { type: 'text/javascript' })));
            this._worker.onmessage = (message) => tick(message.data);
        }
    }
    runInterval(tick) {
        if (!this._timer) {
            const startTime = Date.now();
            this._timer = setInterval(() => {
                tick(Date.now() - startTime);
            }, this._interval);
        }
    }
    disposeWorker() {
        if (this._worker) {
            this._worker.terminate();
            delete this._worker;
        }
    }
    disposeInterval() {
        if (this._timer) {
            clearInterval(this._timer);
            delete this._timer;
        }
    }
}
//# sourceMappingURL=ticker.js.map