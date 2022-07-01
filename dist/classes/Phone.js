"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
var Call_1 = require("./Call");
var Phone = /** @class */ (function () {
    function Phone(model, manufacturer, price, owner, battery, display) {
        this._model = model;
        this._manufacturer = manufacturer;
        this._price = price;
        this._owner = owner;
        this._battery = battery;
        this._display = display;
        this.performedCalls = [];
    }
    Object.defineProperty(Phone.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "manufacturer", {
        get: function () {
            return this._manufacturer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "battery", {
        get: function () {
            return this._battery;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "display", {
        get: function () {
            return this._display;
        },
        enumerable: false,
        configurable: true
    });
    // Information for phone calls
    Phone.prototype.phoneInfo = function () {
        var information = "Model: ".concat(this._model, "\nManufacturer:").concat(this._manufacturer);
        if (this._price !== undefined || null) {
            information += "\nPrice: ".concat(this._price);
        }
        if (this._owner !== undefined || null) {
            information += "\nOwner: ".concat(this._owner);
        }
        if (this._battery !== undefined || null) {
            information += "\nBattery:\n Model: ".concat(this._battery.model, "\n hoursId: ").concat(this._battery.hoursIdle, "\n hoursTalk: ").concat(this._battery.hoursTalk);
        }
        if (this._display !== undefined || null) {
            information += "\nDisplay:\n colors:".concat(this._display.colors, "\n size: ").concat(this._display.size);
        }
        return information;
    };
    // Make a call
    Phone.prototype.makeCall = function () {
        var date = new Date();
        var time = "".concat(date.getHours(), ":").concat(date.getMinutes() < 10 ? "0" : "").concat(date.getMinutes());
        var phoneNumber = Math.floor(359880000000 + Math.random() * 900000);
        var duration = Math.floor(Math.random() * 1000);
        var newCall = new Call_1.PhoneCall(date, time, phoneNumber, duration);
        var callHistoryObj = {
            date: newCall.date,
            time: newCall.time,
            phoneNumber: newCall.phoneNumber,
            duration: newCall.duration,
        };
        this.performedCalls.push(callHistoryObj);
        console.log(callHistoryObj);
    };
    // Adding calls
    Phone.prototype.addPerformedCalls = function (actions) {
        var Add = "Add";
        if (Add === actions) {
            this.performedCalls.push(this.performedCalls);
        }
        return this.performedCalls;
    };
    // Clear call history information
    Phone.prototype.clearPerformedCalls = function () {
        this.performedCalls = [];
        console.log("Removed");
    };
    // Remove the last element from call history
    Phone.prototype.deletPerformedCalls = function (params) {
        this.addPerformedCalls(params).pop();
        return this.addPerformedCalls(params);
    };
    Phone.prototype.totalPrice = function () {
        if (this.performedCalls.length < 1) {
            console.log("No cals made by this phone");
            return;
        }
        var minutePrice = 0.50;
        var totalSec = 0;
        this.performedCalls.forEach(function (calls) { return (totalSec += calls.duration); });
        var finalSum = ((totalSec / 60) * minutePrice).toFixed(2);
        console.log("Total Price in the calls is ".concat(finalSum, "lv"));
    };
    return Phone;
}());
exports.Phone = Phone;
