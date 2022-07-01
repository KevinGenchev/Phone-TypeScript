"use strict";
exports.__esModule = true;
exports.PhoneCall = void 0;
var PhoneCall = /** @class */ (function () {
    function PhoneCall(date, time, phoneNumber, duration) {
        this._date = date;
        this._time = time;
        this._phoneNumber = phoneNumber;
        this._duration = duration;
    }
    Object.defineProperty(PhoneCall.prototype, "date", {
        get: function () {
            return this._date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PhoneCall.prototype, "time", {
        get: function () {
            return this._time;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PhoneCall.prototype, "phoneNumber", {
        get: function () {
            return this._phoneNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PhoneCall.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        enumerable: false,
        configurable: true
    });
    return PhoneCall;
}());
exports.PhoneCall = PhoneCall;
