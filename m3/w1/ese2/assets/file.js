var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(_balanceInit) {
        this.balanceInit = _balanceInit;
    }
    SonAccount.prototype.versamento = function (money) {
        return this.balanceInit + money;
    };
    SonAccount.prototype.prelievo = function (money) {
        return this.balanceInit - money;
    };
    return SonAccount;
}());
var figlio = new SonAccount(50);
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(_balanceInit, _interesse) {
        if (_balanceInit === void 0) { _balanceInit = 0; }
        if (_interesse === void 0) { _interesse = 1.5; }
        var _this = _super.call(this, _balanceInit) || this;
        _this.interesse = _interesse;
        return _this;
    }
    MotherAccount.prototype.versamento = function (money) {
        return this.balanceInit + (money * this.interesse);
    };
    MotherAccount.prototype.prelievo = function (money) {
        return this.balanceInit - (money * this.interesse);
    };
    return MotherAccount;
}(SonAccount));
var madre = new MotherAccount();
