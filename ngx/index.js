import { __decorate, __extends } from "tslib";
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var Netmera = /** @class */ (function (_super) {
    __extends(Netmera, _super);
    function Netmera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Netmera.prototype.start = function (netmeraKey, fcmKey, baseUrl) { return cordova(this, "start", {}, arguments); };
    Netmera.prototype.requestPushNotificationAuthorization = function () { return cordova(this, "requestPushNotificationAuthorization", {}, arguments); };
    Netmera.prototype.subscribePushNotification = function () { return cordova(this, "subscribePushNotification", {}, arguments); };
    Netmera.prototype.subscribeOpenUrl = function () { return cordova(this, "subscribeOpenUrl", {}, arguments); };
    Netmera.prototype.subscribePushClick = function () { return cordova(this, "subscribePushClick", {}, arguments); };
    Netmera.prototype.subscribePushButtonClick = function () { return cordova(this, "subscribePushButtonClick", {}, arguments); };
    Netmera.prototype.sendEvent = function (event) { return cordova(this, "sendEvent", {}, arguments); };
    Netmera.prototype.fetchInboxUsingFilter = function (filter) { return cordova(this, "fetchInboxUsingFilter", {}, arguments); };
    Netmera.prototype.fetchNextPage = function () { return cordova(this, "fetchNextPage", {}, arguments); };
    Netmera.prototype.countForStatus = function (status) { return cordova(this, "countForStatus", {}, arguments); };
    Netmera.prototype.updatePushStatus = function (index, length, status) { return cordova(this, "updatePushStatus", {}, arguments); };
    Netmera.prototype.updateUser = function (user) { return cordova(this, "updateUser", {}, arguments); };
    Netmera.prototype.askLocationAuthorization = function () { return cordova(this, "askLocationAuthorization", {}, arguments); };
    Netmera.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Netmera, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Netmera.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Netmera });
    Netmera.pluginName = "NetmeraPlugin";
    Netmera.plugin = "cordova-plugin-netmera";
    Netmera.pluginRef = "window.NetmeraPlugin";
    Netmera.repo = "https://github.com/limxona/cordova-plugin-netmera";
    Netmera.platforms = ["Android", "iOS"];
    Netmera = __decorate([], Netmera);
    return Netmera;
}(AwesomeCordovaNativePlugin));
export { Netmera };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Netmera, decorators: [{
            type: Injectable
        }], propDecorators: { start: [], requestPushNotificationAuthorization: [], subscribePushNotification: [], subscribeOpenUrl: [], subscribePushClick: [], subscribePushButtonClick: [], sendEvent: [], fetchInboxUsingFilter: [], fetchNextPage: [], countForStatus: [], updatePushStatus: [], updateUser: [], askLocationAuthorization: [] } });
export var NetmeraPushStatus;
(function (NetmeraPushStatus) {
    NetmeraPushStatus[NetmeraPushStatus["undefiend"] = 0] = "undefiend";
    NetmeraPushStatus[NetmeraPushStatus["read"] = 1] = "read";
    NetmeraPushStatus[NetmeraPushStatus["unread"] = 2] = "unread";
    NetmeraPushStatus[NetmeraPushStatus["readAndUnread"] = 3] = "readAndUnread";
    NetmeraPushStatus[NetmeraPushStatus["deleted"] = 4] = "deleted";
    NetmeraPushStatus[NetmeraPushStatus["all"] = 7] = "all";
})(NetmeraPushStatus || (NetmeraPushStatus = {}));
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
export { NetmeraUser };
export var NMUserGender;
(function (NMUserGender) {
    NMUserGender[NMUserGender["MALE"] = 0] = "MALE";
    NMUserGender[NMUserGender["FEMALE"] = 1] = "FEMALE";
    NMUserGender[NMUserGender["NOT_SPECIFIED"] = 2] = "NOT_SPECIFIED";
})(NMUserGender || (NMUserGender = {}));
export var NMUserMaritalStatus;
(function (NMUserMaritalStatus) {
    NMUserMaritalStatus[NMUserMaritalStatus["SINGLE"] = 0] = "SINGLE";
    NMUserMaritalStatus[NMUserMaritalStatus["MARRIED"] = 1] = "MARRIED";
    NMUserMaritalStatus[NMUserMaritalStatus["NOT_SPECIFIED"] = 2] = "NOT_SPECIFIED";
})(NMUserMaritalStatus || (NMUserMaritalStatus = {}));
var NetmeraEvent = /** @class */ (function () {
    function NetmeraEvent() {
    }
    return NetmeraEvent;
}());
export { NetmeraEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmV0bWVyYS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQW1HLE1BQU0sK0JBQStCLENBQUM7OztJQWdDbkgsMkJBQTBCOzs7O0lBVXJELHVCQUFLLGFBQUMsVUFBa0IsRUFBRSxNQUFjLEVBQUUsT0FBZ0I7SUFPMUQsc0RBQW9DO0lBT3BDLDJDQUF5QjtJQVN6QixrQ0FBZ0I7SUFVaEIsb0NBQWtCO0lBU2xCLDBDQUF3QjtJQVV4QiwyQkFBUyxhQUFDLEtBQW1CO0lBUTdCLHVDQUFxQixhQUFDLE1BQTBCO0lBU2hELCtCQUFhO0lBVWIsZ0NBQWMsYUFBQyxNQUF5QjtJQVl4QyxrQ0FBZ0IsYUFBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLE1BQXlCO0lBVXpFLDRCQUFVLGFBQUMsSUFBaUI7SUFPNUIsMENBQXdCO3lHQXRIYixPQUFPOzZHQUFQLE9BQU87Ozs7OztJQUFQLE9BQU8sa0JBQVAsT0FBTztrQkE1Q3BCO0VBNEM2QiwwQkFBMEI7U0FBMUMsT0FBTzs0RkFBUCxPQUFPO2tCQURuQixVQUFVOzhCQVdULEtBQUssTUFPTCxvQ0FBb0MsTUFPcEMseUJBQXlCLE1BU3pCLGdCQUFnQixNQVVoQixrQkFBa0IsTUFTbEIsd0JBQXdCLE1BVXhCLFNBQVMsTUFRVCxxQkFBcUIsTUFTckIsYUFBYSxNQVViLGNBQWMsTUFZZCxnQkFBZ0IsTUFVaEIsVUFBVSxNQU9WLHdCQUF3QjtBQXlCMUIsTUFBTSxDQUFOLElBQVksaUJBT1g7QUFQRCxXQUFZLGlCQUFpQjtJQUMzQixtRUFBYSxDQUFBO0lBQ2IseURBQVEsQ0FBQTtJQUNSLDZEQUFVLENBQUE7SUFDViwyRUFBaUIsQ0FBQTtJQUNqQiwrREFBVyxDQUFBO0lBQ1gsdURBQU8sQ0FBQTtBQUNULENBQUMsRUFQVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBTzVCOzs7O0lBcUJDLHNCQUFJLDZCQUFJO2FBQVIsVUFBUyxLQUFhO1lBQ3BCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0NBQU87YUFBWCxVQUFZLEtBQWE7WUFDdkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx5Q0FBZ0I7YUFBcEIsVUFBcUIsS0FBZTtZQUNsQyxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtCQUFNO2FBQVYsVUFBVyxLQUFhO1lBQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksb0NBQVc7YUFBZixVQUFnQixLQUFhO1lBQzNCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0NBQWE7YUFBakIsVUFBa0IsS0FBYTtZQUM3QixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1DQUFVO2FBQWQsVUFBZSxLQUFhO1lBQzFCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0NBQU87YUFBWCxVQUFZLEtBQWE7WUFDdkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw4QkFBSzthQUFULFVBQVUsS0FBYTtZQUNyQixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZCQUFJO2FBQVIsVUFBUyxLQUFhO1lBQ3BCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksaUNBQVE7YUFBWixVQUFhLEtBQWE7WUFDeEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBVTthQUFkLFVBQWUsS0FBYTtZQUMxQixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFRO2FBQVosVUFBYSxLQUFhO1lBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUNBQVk7YUFBaEIsVUFBaUIsS0FBYTtZQUM1QixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFRO2FBQVosVUFBYSxLQUFhO1lBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO3NCQWpSSDs7O0FBb1JBLE1BQU0sQ0FBTixJQUFZLFlBSVg7QUFKRCxXQUFZLFlBQVk7SUFDdEIsK0NBQVEsQ0FBQTtJQUNSLG1EQUFVLENBQUE7SUFDVixpRUFBaUIsQ0FBQTtBQUNuQixDQUFDLEVBSlcsWUFBWSxLQUFaLFlBQVksUUFJdkI7QUFFRCxNQUFNLENBQU4sSUFBWSxtQkFJWDtBQUpELFdBQVksbUJBQW1CO0lBQzdCLGlFQUFVLENBQUE7SUFDVixtRUFBVyxDQUFBO0lBQ1gsK0VBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUpXLG1CQUFtQixLQUFuQixtQkFBbUIsUUFJOUI7Ozs7dUJBOVJEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBOZXRtZXJhXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBOZXRtZXJhIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL25ldG1lcmEnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5ldG1lcmE6IE5ldG1lcmEpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLm5ldG1lcmEuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdOZXRtZXJhUGx1Z2luJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbmV0bWVyYScsXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5OZXRtZXJhUGx1Z2luJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9saW14b25hL2NvcmRvdmEtcGx1Z2luLW5ldG1lcmEnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmV0bWVyYSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBkb2VzIHNvbWV0aGluZ1xuICAgKiBAcGFyYW0gbmV0bWVyYUtleSB7c3RyaW5nfSBOZXRtZXJhIEFQSSBLZXlcbiAgICogQHBhcmFtIGZjbUtleSB7c3RyaW5nfSBGQ00gS0VZIGZvciBhbmRyb2lkXG4gICAqIEBwYXJhbSBiYXNlVXJsIHtzdHJpbmd9IEJhc2VVUkwgZm9yIG9uIHByZW1pc2Ugc2V0dXBcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnQobmV0bWVyYUtleTogc3RyaW5nLCBmY21LZXk6IHN0cmluZywgYmFzZVVybD86IHN0cmluZyk6IHZvaWQgeyB9XG5cbiAgLyoqXG4gKiBSZXF1ZXN0cyBwdXNoIG5vdGlmaWNhdGlvbiBhdXRob3JpemF0aW9uIGZyb20gdGhlIHVzZXIuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFB1c2hOb3RpZmljYXRpb25BdXRob3JpemF0aW9uKCk6IHZvaWQgeyB9XG5cbiAgLyoqXG4gKiBTdWJzY3JpYmVzIHRvIHB1c2ggbm90aWZpY2F0aW9uIGV2ZW50cy5cbiAqIEByZXR1cm4ge1Byb21pc2U8TmV0bWVyYVB1c2g+fSBSZXNvbHZlcyB3aXRoIHRoZSByZWNlaXZlZCBwdXNoIG5vdGlmaWNhdGlvbiBkYXRhLlxuICovXG4gIEBDb3Jkb3ZhKClcbiAgc3Vic2NyaWJlUHVzaE5vdGlmaWNhdGlvbigpOiBQcm9taXNlPE5ldG1lcmFQdXNoPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gKiBTdWJzY3JpYmVzIHRvIGV2ZW50cyB0cmlnZ2VyZWQgd2hlbiBhIHB1c2ggbm90aWZpY2F0aW9uIGNvbnRhaW5zIGEgVVJMIGFuZCBpcyBvcGVuZWQuXG4gKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IFJlc29sdmVzIHdpdGggdGhlIFVSTCBzdHJpbmcgdGhhdCB3YXMgb3BlbmVkLlxuICovXG4gIEBDb3Jkb3ZhKClcbiAgc3Vic2NyaWJlT3BlblVybCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG5cbiAgLyoqXG4gKiBTdWJzY3JpYmVzIHRvIHB1c2ggbm90aWZpY2F0aW9uIGNsaWNrIGV2ZW50cy5cbiAqIEByZXR1cm4ge1Byb21pc2U8TmV0bWVyYVB1c2g+fSBSZXNvbHZlcyB3aXRoIHRoZSBwdXNoIG5vdGlmaWNhdGlvbiBkYXRhIHdoZW4gY2xpY2tlZC5cbiAqL1xuICBAQ29yZG92YSgpXG4gIHN1YnNjcmliZVB1c2hDbGljaygpOiBQcm9taXNlPE5ldG1lcmFQdXNoPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4qIFN1YnNjcmliZXMgdG8gYnV0dG9uIGNsaWNrIGV2ZW50cyBpbnNpZGUgcHVzaCBub3RpZmljYXRpb25zLlxuKiBAcmV0dXJuIHtQcm9taXNlPE5ldG1lcmFQdXNoPn0gUmVzb2x2ZXMgd2l0aCB0aGUgcHVzaCBub3RpZmljYXRpb24gZGF0YSB3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQuXG4qL1xuICBAQ29yZG92YSgpXG4gIHN1YnNjcmliZVB1c2hCdXR0b25DbGljaygpOiBQcm9taXNlPE5ldG1lcmFQdXNoPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4qIFNlbmRzIGEgY3VzdG9tIGV2ZW50IHRvIE5ldG1lcmEgZm9yIGFuYWx5dGljcyBvciB0cmFja2luZyBwdXJwb3Nlcy5cbiogQHBhcmFtIGV2ZW50IHtOZXRtZXJhRXZlbnR9IFRoZSBldmVudCBvYmplY3QgdG8gc2VuZC5cbiogQHJldHVybiB7dm9pZH1cbiovXG4gIEBDb3Jkb3ZhKClcbiAgc2VuZEV2ZW50KGV2ZW50OiBOZXRtZXJhRXZlbnQpOiB2b2lkIHsgfVxuXG4gIC8qKlxuICogRmV0Y2hlcyB0aGUgaW5ib3ggbWVzc2FnZXMgdXNpbmcgYSBmaWx0ZXIuXG4gKiBAcGFyYW0gZmlsdGVyIHtOZXRtZXJhSW5ib3hGaWx0ZXJ9IEZpbHRlciB1c2VkIHRvIGZldGNoIHNwZWNpZmljIGluYm94IGl0ZW1zLlxuICogQHJldHVybiB7UHJvbWlzZTxOZXRtZXJhSW5ib3g+fSBSZXNvbHZlcyB3aXRoIHRoZSBmZXRjaGVkIGluYm94IGRhdGEuXG4gKi9cbiAgQENvcmRvdmEoKVxuICBmZXRjaEluYm94VXNpbmdGaWx0ZXIoZmlsdGVyOiBOZXRtZXJhSW5ib3hGaWx0ZXIpOiBQcm9taXNlPE5ldG1lcmFJbmJveD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICogRmV0Y2hlcyB0aGUgbmV4dCBwYWdlIG9mIGluYm94IG1lc3NhZ2VzLlxuICogQHJldHVybiB7UHJvbWlzZTxOZXRtZXJhSW5ib3g+fSBSZXNvbHZlcyB3aXRoIHRoZSBuZXh0IHBhZ2Ugb2YgaW5ib3ggZGF0YS5cbiAqL1xuICBAQ29yZG92YSgpXG4gIGZldGNoTmV4dFBhZ2UoKTogUHJvbWlzZTxOZXRtZXJhSW5ib3g+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAqIENvdW50cyB0aGUgbnVtYmVyIG9mIGluYm94IGl0ZW1zIHdpdGggdGhlIGdpdmVuIHN0YXR1cy5cbiAqIEBwYXJhbSBzdGF0dXMge05ldG1lcmFQdXNoU3RhdHVzfSBUaGUgc3RhdHVzIHRvIGNvdW50IChlLmcuLCByZWFkLCB1bnJlYWQpLlxuICogQHJldHVybiB7UHJvbWlzZTxudW1iZXI+fSBSZXNvbHZlcyB3aXRoIHRoZSBjb3VudCBvZiBtYXRjaGluZyBpdGVtcy5cbiAqL1xuICBAQ29yZG92YSgpXG4gIGNvdW50Rm9yU3RhdHVzKHN0YXR1czogTmV0bWVyYVB1c2hTdGF0dXMpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICogVXBkYXRlcyB0aGUgc3RhdHVzIG9mIGEgcmFuZ2Ugb2YgaW5ib3ggaXRlbXMuXG4gKiBAcGFyYW0gaW5kZXgge251bWJlcn0gVGhlIHN0YXJ0aW5nIGluZGV4IG9mIHRoZSBtZXNzYWdlcyB0byB1cGRhdGUuXG4gKiBAcGFyYW0gbGVuZ3RoIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgbWVzc2FnZXMgdG8gdXBkYXRlLlxuICogQHBhcmFtIHN0YXR1cyB7TmV0bWVyYVB1c2hTdGF0dXN9IFRoZSBuZXcgc3RhdHVzIHRvIGFwcGx5LlxuICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn0gUmVzb2x2ZXMgd2l0aCB0cnVlIGlmIHRoZSB1cGRhdGUgd2FzIHN1Y2Nlc3NmdWwuXG4gKi9cbiAgQENvcmRvdmEoKVxuICB1cGRhdGVQdXNoU3RhdHVzKGluZGV4OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyLCBzdGF0dXM6IE5ldG1lcmFQdXNoU3RhdHVzKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gKiBVcGRhdGVzIHRoZSB1c2VyIGluZm9ybWF0aW9uIGZvciBOZXRtZXJhLlxuICogQHBhcmFtIHVzZXIge05ldG1lcmFVc2VyfSBUaGUgdXNlciBvYmplY3QgdG8gdXBkYXRlLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuICBAQ29yZG92YSgpXG4gIHVwZGF0ZVVzZXIodXNlcjogTmV0bWVyYVVzZXIpOiB2b2lkIHsgfVxuXG4gIC8qKlxuICogYXNrIGxvY2F0aW9uIGF1dGhvcml6YXRpb24gZnJvbSB0aGUgdXNlci5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbiAgQENvcmRvdmEoKVxuICBhc2tMb2NhdGlvbkF1dGhvcml6YXRpb24oKTogdm9pZCB7IH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ldG1lcmFJbmJveEZpbHRlciB7XG4gIHN0YXR1cz86IG51bWJlcjtcbiAgcGFnZVNpemU/OiBudW1iZXI7XG4gIGNhdGVnb3JpZXM/OiBzdHJpbmdbXTtcbiAgaW5jbHVkZUV4cGlyZWRPYmplY3RzPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV0bWVyYVB1c2gge1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJ0aXRsZTogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIHB1c2hJZDogc3RyaW5nO1xuICBwdXNoSW5zdGFuY2VJZDogc3RyaW5nO1xuICBwdXNoVHlwZTogbnVtYmVyO1xuICBpbmJveFN0YXR1czogbnVtYmVyO1xuICBzZW5kRGF0ZTogYW55O1xuICBkZWVwbGlua1VybDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBOZXRtZXJhSW5ib3gge1xuICBoYXNOZXh0UGFnZTogYm9vbGVhbjtcbiAgaW5ib3g6IE5ldG1lcmFQdXNoW107XG59XG5leHBvcnQgZW51bSBOZXRtZXJhUHVzaFN0YXR1cyB7XG4gIHVuZGVmaWVuZCA9IDAsXG4gIHJlYWQgPSAxLFxuICB1bnJlYWQgPSAyLFxuICByZWFkQW5kVW5yZWFkID0gMyxcbiAgZGVsZXRlZCA9IDQsXG4gIGFsbCA9IDdcbn1cbmV4cG9ydCBjbGFzcyBOZXRtZXJhVXNlciB7XG4gIHByaXZhdGUgcGE/OiBzdHJpbmc7XG4gIHByaXZhdGUgcGI/OiBzdHJpbmc7XG4gIHByaXZhdGUgcGM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBwZD86IG51bWJlcjtcbiAgcHJpdmF0ZSBwZT86IG51bWJlcjtcbiAgcHJpdmF0ZSBwZj86IG51bWJlcjtcbiAgcHJpdmF0ZSBwZz86IG51bWJlcjtcbiAgcHJpdmF0ZSBwaD86IHN0cmluZztcbiAgcHJpdmF0ZSBwaT86IHN0cmluZztcbiAgcHJpdmF0ZSBwaj86IHN0cmluZztcbiAgcHJpdmF0ZSBwaz86IHN0cmluZztcbiAgcHJpdmF0ZSBwbD86IHN0cmluZztcbiAgcHJpdmF0ZSBwbT86IHN0cmluZztcbiAgcHJpdmF0ZSBwbj86IHN0cmluZztcbiAgcHJpdmF0ZSBwbz86IHN0cmluZztcbiAgdXNlcklkPzogc3RyaW5nO1xuICBtc2lzZG4/OiBzdHJpbmc7XG4gIGVtYWlsPzogc3RyaW5nO1xuXG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBhID0gdmFsdWU7XG4gIH1cblxuICBzZXQgc3VybmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5wYiA9IHZhbHVlO1xuICB9XG5cbiAgc2V0IGV4dGVybmFsU2VnbWVudHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5wYyA9IHZhbHVlO1xuICB9XG5cbiAgc2V0IGdlbmRlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5wZCA9IHZhbHVlO1xuICB9XG5cbiAgc2V0IGRhdGVPZkJpcnRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnBlID0gdmFsdWU7XG4gIH1cblxuICBzZXQgbWFyaXRhbFN0YXR1cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5wZiA9IHZhbHVlO1xuICB9XG5cbiAgc2V0IGNoaWxkQ291bnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMucGcgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldCBjb3VudHJ5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBoID0gdmFsdWU7XG4gIH1cblxuICBzZXQgc3RhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMucGkgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldCBjaXR5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBqID0gdmFsdWU7XG4gIH1cblxuICBzZXQgZGlzdHJpY3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMucGsgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldCBvY2N1cGF0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBsID0gdmFsdWU7XG4gIH1cblxuICBzZXQgaW5kdXN0cnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMucG0gPSB2YWx1ZTtcbiAgfVxuXG4gIHNldCBmYXZvcml0ZVRlYW0odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMucG4gPSB2YWx1ZTtcbiAgfVxuXG4gIHNldCBsYW5ndWFnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5wbyA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBlbnVtIE5NVXNlckdlbmRlciB7XG4gIE1BTEUgPSAwLFxuICBGRU1BTEUgPSAxLFxuICBOT1RfU1BFQ0lGSUVEID0gMixcbn1cblxuZXhwb3J0IGVudW0gTk1Vc2VyTWFyaXRhbFN0YXR1cyB7XG4gIFNJTkdMRSA9IDAsXG4gIE1BUlJJRUQgPSAxLFxuICBOT1RfU1BFQ0lGSUVEID0gMixcbn1cblxuZXhwb3J0IGNsYXNzIE5ldG1lcmFFdmVudCB7IH0iXX0=