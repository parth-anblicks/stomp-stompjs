/**
 * Possible states for the IStompSocket
 */
export var StompSocketState;
(function (StompSocketState) {
    StompSocketState[StompSocketState["CONNECTING"] = 0] = "CONNECTING";
    StompSocketState[StompSocketState["OPEN"] = 1] = "OPEN";
    StompSocketState[StompSocketState["CLOSING"] = 2] = "CLOSING";
    StompSocketState[StompSocketState["CLOSED"] = 3] = "CLOSED";
})(StompSocketState = StompSocketState || (StompSocketState = {}));
/**
 * Possible activation state
 */
export var ActivationState;
(function (ActivationState) {
    ActivationState[ActivationState["ACTIVE"] = 0] = "ACTIVE";
    ActivationState[ActivationState["DEACTIVATING"] = 1] = "DEACTIVATING";
    ActivationState[ActivationState["INACTIVE"] = 2] = "INACTIVE";
})(ActivationState = ActivationState || (ActivationState = {}));
/**
 * Possible ticker strategies
 */
export var TickerStrategy;
(function (TickerStrategy) {
    TickerStrategy["Interval"] = "interval";
    TickerStrategy["Worker"] = "worker";
})(TickerStrategy = TickerStrategy || (TickerStrategy = {}));
//# sourceMappingURL=types.js.map