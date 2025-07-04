'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var Netmera = /** @class */ (function (_super) {
    tslib.__extends(Netmera, _super);
    function Netmera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Netmera.prototype.start = function (netmeraKey, fcmKey, baseUrl) { return core.cordova(this, "start", {}, arguments); };
    Netmera.prototype.requestPushNotificationAuthorization = function () { return core.cordova(this, "requestPushNotificationAuthorization", {}, arguments); };
    Netmera.prototype.subscribePushNotification = function () { return core.cordova(this, "subscribePushNotification", {}, arguments); };
    Netmera.prototype.subscribeOpenUrl = function () { return core.cordova(this, "subscribeOpenUrl", {}, arguments); };
    Netmera.prototype.subscribePushClick = function () { return core.cordova(this, "subscribePushClick", {}, arguments); };
    Netmera.prototype.subscribePushButtonClick = function () { return core.cordova(this, "subscribePushButtonClick", {}, arguments); };
    Netmera.prototype.sendEvent = function (event) { return core.cordova(this, "sendEvent", {}, arguments); };
    Netmera.prototype.fetchInboxUsingFilter = function (filter) { return core.cordova(this, "fetchInboxUsingFilter", {}, arguments); };
    Netmera.prototype.fetchNextPage = function () { return core.cordova(this, "fetchNextPage", {}, arguments); };
    Netmera.prototype.countForStatus = function (status) { return core.cordova(this, "countForStatus", {}, arguments); };
    Netmera.prototype.updatePushStatus = function (index, length, status) { return core.cordova(this, "updatePushStatus", {}, arguments); };
    Netmera.prototype.updateUser = function (user) { return core.cordova(this, "updateUser", {}, arguments); };
    Netmera.prototype.askLocationAuthorization = function () { return core.cordova(this, "askLocationAuthorization", {}, arguments); };
    Netmera.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Netmera, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Netmera.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Netmera });
    Netmera.pluginName = "NetmeraPlugin";
    Netmera.plugin = "cordova-plugin-netmera";
    Netmera.pluginRef = "window.NetmeraPlugin";
    Netmera.repo = "https://github.com/limxona/cordova-plugin-netmera";
    Netmera.platforms = ["Android", "iOS"];
    Netmera = tslib.__decorate([], Netmera);
    return Netmera;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Netmera, decorators: [{
            type: i0.Injectable
        }], propDecorators: { start: [], requestPushNotificationAuthorization: [], subscribePushNotification: [], subscribeOpenUrl: [], subscribePushClick: [], subscribePushButtonClick: [], sendEvent: [], fetchInboxUsingFilter: [], fetchNextPage: [], countForStatus: [], updatePushStatus: [], updateUser: [], askLocationAuthorization: [] } });
exports.NetmeraPushStatus = void 0;
(function (NetmeraPushStatus) {
    NetmeraPushStatus[NetmeraPushStatus["undefiend"] = 0] = "undefiend";
    NetmeraPushStatus[NetmeraPushStatus["read"] = 1] = "read";
    NetmeraPushStatus[NetmeraPushStatus["unread"] = 2] = "unread";
    NetmeraPushStatus[NetmeraPushStatus["readAndUnread"] = 3] = "readAndUnread";
    NetmeraPushStatus[NetmeraPushStatus["deleted"] = 4] = "deleted";
    NetmeraPushStatus[NetmeraPushStatus["all"] = 7] = "all";
})(exports.NetmeraPushStatus || (exports.NetmeraPushStatus = {}));
var NetmeraUser = /** @class */ (function () {
    function NetmeraUser() {
    }
    Object.defineProperty(NetmeraUser.prototype, "name", {
        set: function (value) {
            this.pa = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "surname", {
        set: function (value) {
            this.pb = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "externalSegments", {
        set: function (value) {
            this.pc = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "gender", {
        set: function (value) {
            this.pd = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "dateOfBirth", {
        set: function (value) {
            this.pe = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "maritalStatus", {
        set: function (value) {
            this.pf = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "childCount", {
        set: function (value) {
            this.pg = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "country", {
        set: function (value) {
            this.ph = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "state", {
        set: function (value) {
            this.pi = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "city", {
        set: function (value) {
            this.pj = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "district", {
        set: function (value) {
            this.pk = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "occupation", {
        set: function (value) {
            this.pl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "industry", {
        set: function (value) {
            this.pm = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "favoriteTeam", {
        set: function (value) {
            this.pn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetmeraUser.prototype, "language", {
        set: function (value) {
            this.po = value;
        },
        enumerable: false,
        configurable: true
    });
    return NetmeraUser;
}());
exports.NMUserGender = void 0;
(function (NMUserGender) {
    NMUserGender[NMUserGender["MALE"] = 0] = "MALE";
    NMUserGender[NMUserGender["FEMALE"] = 1] = "FEMALE";
    NMUserGender[NMUserGender["NOT_SPECIFIED"] = 2] = "NOT_SPECIFIED";
})(exports.NMUserGender || (exports.NMUserGender = {}));
exports.NMUserMaritalStatus = void 0;
(function (NMUserMaritalStatus) {
    NMUserMaritalStatus[NMUserMaritalStatus["SINGLE"] = 0] = "SINGLE";
    NMUserMaritalStatus[NMUserMaritalStatus["MARRIED"] = 1] = "MARRIED";
    NMUserMaritalStatus[NMUserMaritalStatus["NOT_SPECIFIED"] = 2] = "NOT_SPECIFIED";
})(exports.NMUserMaritalStatus || (exports.NMUserMaritalStatus = {}));
var NetmeraEvent = /** @class */ (function () {
    function NetmeraEvent() {
    }
    return NetmeraEvent;
}());

exports.Netmera = Netmera;
exports.NetmeraEvent = NetmeraEvent;
exports.NetmeraUser = NetmeraUser;
