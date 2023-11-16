"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QRCodeScannerComponent = void 0;
var QRCodeScannerComponent = /** @class */ (function () {
    function QRCodeScannerComponent() {
    }
    QRCodeScannerComponent.prototype.clearResult = function () {
        this.qrResultString = null;
    };
    QRCodeScannerComponent.prototype.onCodeResult = function (resultString) {
        this.qrResultString = resultString;
    };
    return QRCodeScannerComponent;
}());
exports.QRCodeScannerComponent = QRCodeScannerComponent;
