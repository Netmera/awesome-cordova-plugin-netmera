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
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var NetmeraOriginal = /** @class */ (function (_super) {
    __extends(NetmeraOriginal, _super);
    function NetmeraOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetmeraOriginal.prototype.start = function (netmeraKey, fcmKey, baseUrl) { return cordova(this, "start", {}, arguments); };
    NetmeraOriginal.prototype.requestPushNotificationAuthorization = function () { return cordova(this, "requestPushNotificationAuthorization", {}, arguments); };
    NetmeraOriginal.prototype.subscribePushNotification = function () { return cordova(this, "subscribePushNotification", {}, arguments); };
    NetmeraOriginal.prototype.subscribeOpenUrl = function () { return cordova(this, "subscribeOpenUrl", {}, arguments); };
    NetmeraOriginal.prototype.subscribePushClick = function () { return cordova(this, "subscribePushClick", {}, arguments); };
    NetmeraOriginal.prototype.subscribePushButtonClick = function () { return cordova(this, "subscribePushButtonClick", {}, arguments); };
    NetmeraOriginal.prototype.sendEvent = function (event) { return cordova(this, "sendEvent", {}, arguments); };
    NetmeraOriginal.prototype.fetchInboxUsingFilter = function (filter) { return cordova(this, "fetchInboxUsingFilter", {}, arguments); };
    NetmeraOriginal.prototype.fetchNextPage = function () { return cordova(this, "fetchNextPage", {}, arguments); };
    NetmeraOriginal.prototype.countForStatus = function (status) { return cordova(this, "countForStatus", {}, arguments); };
    NetmeraOriginal.prototype.updatePushStatus = function (index, length, status) { return cordova(this, "updatePushStatus", {}, arguments); };
    NetmeraOriginal.prototype.updateUser = function (user) { return cordova(this, "updateUser", {}, arguments); };
    NetmeraOriginal.prototype.askLocationAuthorization = function () { return cordova(this, "askLocationAuthorization", {}, arguments); };
    NetmeraOriginal.pluginName = "NetmeraPlugin";
    NetmeraOriginal.plugin = "cordova-plugin-netmera";
    NetmeraOriginal.pluginRef = "window.NetmeraPlugin";
    NetmeraOriginal.repo = "https://github.com/limxona/cordova-plugin-netmera";
    NetmeraOriginal.platforms = ["Android", "iOS"];
    return NetmeraOriginal;
}(AwesomeCordovaNativePlugin));
var Netmera = new NetmeraOriginal();
export { Netmera };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmV0bWVyYS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLHVDQUFtRyxNQUFNLCtCQUErQixDQUFDOztJQWdDbkgsMkJBQTBCOzs7O0lBVXJELHVCQUFLLGFBQUMsVUFBa0IsRUFBRSxNQUFjLEVBQUUsT0FBZ0I7SUFPMUQsc0RBQW9DO0lBT3BDLDJDQUF5QjtJQVN6QixrQ0FBZ0I7SUFVaEIsb0NBQWtCO0lBU2xCLDBDQUF3QjtJQVV4QiwyQkFBUyxhQUFDLEtBQW1CO0lBUTdCLHVDQUFxQixhQUFDLE1BQTBCO0lBU2hELCtCQUFhO0lBVWIsZ0NBQWMsYUFBQyxNQUF5QjtJQVl4QyxrQ0FBZ0IsYUFBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLE1BQXlCO0lBVXpFLDRCQUFVLGFBQUMsSUFBaUI7SUFPNUIsMENBQXdCOzs7Ozs7a0JBbEsxQjtFQTRDNkIsMEJBQTBCO1NBQTFDLE9BQU87QUErSXBCLE1BQU0sQ0FBTixJQUFZLGlCQU9YO0FBUEQsV0FBWSxpQkFBaUI7SUFDM0IsbUVBQWEsQ0FBQTtJQUNiLHlEQUFRLENBQUE7SUFDUiw2REFBVSxDQUFBO0lBQ1YsMkVBQWlCLENBQUE7SUFDakIsK0RBQVcsQ0FBQTtJQUNYLHVEQUFPLENBQUE7QUFDVCxDQUFDLEVBUFcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQU81Qjs7OztJQXFCQyxzQkFBSSw2QkFBSTthQUFSLFVBQVMsS0FBYTtZQUNwQixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdDQUFPO2FBQVgsVUFBWSxLQUFhO1lBQ3ZCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQWdCO2FBQXBCLFVBQXFCLEtBQWU7WUFDbEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBTTthQUFWLFVBQVcsS0FBYTtZQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG9DQUFXO2FBQWYsVUFBZ0IsS0FBYTtZQUMzQixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHNDQUFhO2FBQWpCLFVBQWtCLEtBQWE7WUFDN0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBVTthQUFkLFVBQWUsS0FBYTtZQUMxQixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdDQUFPO2FBQVgsVUFBWSxLQUFhO1lBQ3ZCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOEJBQUs7YUFBVCxVQUFVLEtBQWE7WUFDckIsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2QkFBSTthQUFSLFVBQVMsS0FBYTtZQUNwQixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFRO2FBQVosVUFBYSxLQUFhO1lBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQVU7YUFBZCxVQUFlLEtBQWE7WUFDMUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpQ0FBUTthQUFaLFVBQWEsS0FBYTtZQUN4QixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFDQUFZO2FBQWhCLFVBQWlCLEtBQWE7WUFDNUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpQ0FBUTthQUFaLFVBQWEsS0FBYTtZQUN4QixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtzQkFqUkg7OztBQW9SQSxNQUFNLENBQU4sSUFBWSxZQUlYO0FBSkQsV0FBWSxZQUFZO0lBQ3RCLCtDQUFRLENBQUE7SUFDUixtREFBVSxDQUFBO0lBQ1YsaUVBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUpXLFlBQVksS0FBWixZQUFZLFFBSXZCO0FBRUQsTUFBTSxDQUFOLElBQVksbUJBSVg7QUFKRCxXQUFZLG1CQUFtQjtJQUM3QixpRUFBVSxDQUFBO0lBQ1YsbUVBQVcsQ0FBQTtJQUNYLCtFQUFpQixDQUFBO0FBQ25CLENBQUMsRUFKVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBSTlCOzs7O3VCQTlSRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXG4gKlxuICogVE9ETzpcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgTmV0bWVyYVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTmV0bWVyYSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9uZXRtZXJhJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBuZXRtZXJhOiBOZXRtZXJhKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5uZXRtZXJhLmZ1bmN0aW9uTmFtZSgnSGVsbG8nLCAxMjMpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTmV0bWVyYVBsdWdpbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW5ldG1lcmEnLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuTmV0bWVyYVBsdWdpbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbGlteG9uYS9jb3Jkb3ZhLXBsdWdpbi1uZXRtZXJhJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5ldG1lcmEgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gZG9lcyBzb21ldGhpbmdcbiAgICogQHBhcmFtIG5ldG1lcmFLZXkge3N0cmluZ30gTmV0bWVyYSBBUEkgS2V5XG4gICAqIEBwYXJhbSBmY21LZXkge3N0cmluZ30gRkNNIEtFWSBmb3IgYW5kcm9pZFxuICAgKiBAcGFyYW0gYmFzZVVybCB7c3RyaW5nfSBCYXNlVVJMIGZvciBvbiBwcmVtaXNlIHNldHVwXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0KG5ldG1lcmFLZXk6IHN0cmluZywgZmNtS2V5OiBzdHJpbmcsIGJhc2VVcmw/OiBzdHJpbmcpOiB2b2lkIHsgfVxuXG4gIC8qKlxuICogUmVxdWVzdHMgcHVzaCBub3RpZmljYXRpb24gYXV0aG9yaXphdGlvbiBmcm9tIHRoZSB1c2VyLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RQdXNoTm90aWZpY2F0aW9uQXV0aG9yaXphdGlvbigpOiB2b2lkIHsgfVxuXG4gIC8qKlxuICogU3Vic2NyaWJlcyB0byBwdXNoIG5vdGlmaWNhdGlvbiBldmVudHMuXG4gKiBAcmV0dXJuIHtQcm9taXNlPE5ldG1lcmFQdXNoPn0gUmVzb2x2ZXMgd2l0aCB0aGUgcmVjZWl2ZWQgcHVzaCBub3RpZmljYXRpb24gZGF0YS5cbiAqL1xuICBAQ29yZG92YSgpXG4gIHN1YnNjcmliZVB1c2hOb3RpZmljYXRpb24oKTogUHJvbWlzZTxOZXRtZXJhUHVzaD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICogU3Vic2NyaWJlcyB0byBldmVudHMgdHJpZ2dlcmVkIHdoZW4gYSBwdXNoIG5vdGlmaWNhdGlvbiBjb250YWlucyBhIFVSTCBhbmQgaXMgb3BlbmVkLlxuICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXNvbHZlcyB3aXRoIHRoZSBVUkwgc3RyaW5nIHRoYXQgd2FzIG9wZW5lZC5cbiAqL1xuICBAQ29yZG92YSgpXG4gIHN1YnNjcmliZU9wZW5VcmwoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuXG4gIC8qKlxuICogU3Vic2NyaWJlcyB0byBwdXNoIG5vdGlmaWNhdGlvbiBjbGljayBldmVudHMuXG4gKiBAcmV0dXJuIHtQcm9taXNlPE5ldG1lcmFQdXNoPn0gUmVzb2x2ZXMgd2l0aCB0aGUgcHVzaCBub3RpZmljYXRpb24gZGF0YSB3aGVuIGNsaWNrZWQuXG4gKi9cbiAgQENvcmRvdmEoKVxuICBzdWJzY3JpYmVQdXNoQ2xpY2soKTogUHJvbWlzZTxOZXRtZXJhUHVzaD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuKiBTdWJzY3JpYmVzIHRvIGJ1dHRvbiBjbGljayBldmVudHMgaW5zaWRlIHB1c2ggbm90aWZpY2F0aW9ucy5cbiogQHJldHVybiB7UHJvbWlzZTxOZXRtZXJhUHVzaD59IFJlc29sdmVzIHdpdGggdGhlIHB1c2ggbm90aWZpY2F0aW9uIGRhdGEgd2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkLlxuKi9cbiAgQENvcmRvdmEoKVxuICBzdWJzY3JpYmVQdXNoQnV0dG9uQ2xpY2soKTogUHJvbWlzZTxOZXRtZXJhUHVzaD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuKiBTZW5kcyBhIGN1c3RvbSBldmVudCB0byBOZXRtZXJhIGZvciBhbmFseXRpY3Mgb3IgdHJhY2tpbmcgcHVycG9zZXMuXG4qIEBwYXJhbSBldmVudCB7TmV0bWVyYUV2ZW50fSBUaGUgZXZlbnQgb2JqZWN0IHRvIHNlbmQuXG4qIEByZXR1cm4ge3ZvaWR9XG4qL1xuICBAQ29yZG92YSgpXG4gIHNlbmRFdmVudChldmVudDogTmV0bWVyYUV2ZW50KTogdm9pZCB7IH1cblxuICAvKipcbiAqIEZldGNoZXMgdGhlIGluYm94IG1lc3NhZ2VzIHVzaW5nIGEgZmlsdGVyLlxuICogQHBhcmFtIGZpbHRlciB7TmV0bWVyYUluYm94RmlsdGVyfSBGaWx0ZXIgdXNlZCB0byBmZXRjaCBzcGVjaWZpYyBpbmJveCBpdGVtcy5cbiAqIEByZXR1cm4ge1Byb21pc2U8TmV0bWVyYUluYm94Pn0gUmVzb2x2ZXMgd2l0aCB0aGUgZmV0Y2hlZCBpbmJveCBkYXRhLlxuICovXG4gIEBDb3Jkb3ZhKClcbiAgZmV0Y2hJbmJveFVzaW5nRmlsdGVyKGZpbHRlcjogTmV0bWVyYUluYm94RmlsdGVyKTogUHJvbWlzZTxOZXRtZXJhSW5ib3g+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAqIEZldGNoZXMgdGhlIG5leHQgcGFnZSBvZiBpbmJveCBtZXNzYWdlcy5cbiAqIEByZXR1cm4ge1Byb21pc2U8TmV0bWVyYUluYm94Pn0gUmVzb2x2ZXMgd2l0aCB0aGUgbmV4dCBwYWdlIG9mIGluYm94IGRhdGEuXG4gKi9cbiAgQENvcmRvdmEoKVxuICBmZXRjaE5leHRQYWdlKCk6IFByb21pc2U8TmV0bWVyYUluYm94PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gKiBDb3VudHMgdGhlIG51bWJlciBvZiBpbmJveCBpdGVtcyB3aXRoIHRoZSBnaXZlbiBzdGF0dXMuXG4gKiBAcGFyYW0gc3RhdHVzIHtOZXRtZXJhUHVzaFN0YXR1c30gVGhlIHN0YXR1cyB0byBjb3VudCAoZS5nLiwgcmVhZCwgdW5yZWFkKS5cbiAqIEByZXR1cm4ge1Byb21pc2U8bnVtYmVyPn0gUmVzb2x2ZXMgd2l0aCB0aGUgY291bnQgb2YgbWF0Y2hpbmcgaXRlbXMuXG4gKi9cbiAgQENvcmRvdmEoKVxuICBjb3VudEZvclN0YXR1cyhzdGF0dXM6IE5ldG1lcmFQdXNoU3RhdHVzKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAqIFVwZGF0ZXMgdGhlIHN0YXR1cyBvZiBhIHJhbmdlIG9mIGluYm94IGl0ZW1zLlxuICogQHBhcmFtIGluZGV4IHtudW1iZXJ9IFRoZSBzdGFydGluZyBpbmRleCBvZiB0aGUgbWVzc2FnZXMgdG8gdXBkYXRlLlxuICogQHBhcmFtIGxlbmd0aCB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIG1lc3NhZ2VzIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSBzdGF0dXMge05ldG1lcmFQdXNoU3RhdHVzfSBUaGUgbmV3IHN0YXR1cyB0byBhcHBseS5cbiAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IFJlc29sdmVzIHdpdGggdHJ1ZSBpZiB0aGUgdXBkYXRlIHdhcyBzdWNjZXNzZnVsLlxuICovXG4gIEBDb3Jkb3ZhKClcbiAgdXBkYXRlUHVzaFN0YXR1cyhpbmRleDogbnVtYmVyLCBsZW5ndGg6IG51bWJlciwgc3RhdHVzOiBOZXRtZXJhUHVzaFN0YXR1cyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICogVXBkYXRlcyB0aGUgdXNlciBpbmZvcm1hdGlvbiBmb3IgTmV0bWVyYS5cbiAqIEBwYXJhbSB1c2VyIHtOZXRtZXJhVXNlcn0gVGhlIHVzZXIgb2JqZWN0IHRvIHVwZGF0ZS5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbiAgQENvcmRvdmEoKVxuICB1cGRhdGVVc2VyKHVzZXI6IE5ldG1lcmFVc2VyKTogdm9pZCB7IH1cblxuICAvKipcbiAqIGFzayBsb2NhdGlvbiBhdXRob3JpemF0aW9uIGZyb20gdGhlIHVzZXIuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG4gIEBDb3Jkb3ZhKClcbiAgYXNrTG9jYXRpb25BdXRob3JpemF0aW9uKCk6IHZvaWQgeyB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXRtZXJhSW5ib3hGaWx0ZXIge1xuICBzdGF0dXM/OiBudW1iZXI7XG4gIHBhZ2VTaXplPzogbnVtYmVyO1xuICBjYXRlZ29yaWVzPzogc3RyaW5nW107XG4gIGluY2x1ZGVFeHBpcmVkT2JqZWN0cz86IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIE5ldG1lcmFQdXNoIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgc3VidGl0bGU6IHN0cmluZztcbiAgYm9keTogc3RyaW5nO1xuICBwdXNoSWQ6IHN0cmluZztcbiAgcHVzaEluc3RhbmNlSWQ6IHN0cmluZztcbiAgcHVzaFR5cGU6IG51bWJlcjtcbiAgaW5ib3hTdGF0dXM6IG51bWJlcjtcbiAgc2VuZERhdGU6IGFueTtcbiAgZGVlcGxpbmtVcmw6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV0bWVyYUluYm94IHtcbiAgaGFzTmV4dFBhZ2U6IGJvb2xlYW47XG4gIGluYm94OiBOZXRtZXJhUHVzaFtdO1xufVxuZXhwb3J0IGVudW0gTmV0bWVyYVB1c2hTdGF0dXMge1xuICB1bmRlZmllbmQgPSAwLFxuICByZWFkID0gMSxcbiAgdW5yZWFkID0gMixcbiAgcmVhZEFuZFVucmVhZCA9IDMsXG4gIGRlbGV0ZWQgPSA0LFxuICBhbGwgPSA3XG59XG5leHBvcnQgY2xhc3MgTmV0bWVyYVVzZXIge1xuICBwcml2YXRlIHBhPzogc3RyaW5nO1xuICBwcml2YXRlIHBiPzogc3RyaW5nO1xuICBwcml2YXRlIHBjPzogc3RyaW5nW107XG4gIHByaXZhdGUgcGQ/OiBudW1iZXI7XG4gIHByaXZhdGUgcGU/OiBudW1iZXI7XG4gIHByaXZhdGUgcGY/OiBudW1iZXI7XG4gIHByaXZhdGUgcGc/OiBudW1iZXI7XG4gIHByaXZhdGUgcGg/OiBzdHJpbmc7XG4gIHByaXZhdGUgcGk/OiBzdHJpbmc7XG4gIHByaXZhdGUgcGo/OiBzdHJpbmc7XG4gIHByaXZhdGUgcGs/OiBzdHJpbmc7XG4gIHByaXZhdGUgcGw/OiBzdHJpbmc7XG4gIHByaXZhdGUgcG0/OiBzdHJpbmc7XG4gIHByaXZhdGUgcG4/OiBzdHJpbmc7XG4gIHByaXZhdGUgcG8/OiBzdHJpbmc7XG4gIHVzZXJJZD86IHN0cmluZztcbiAgbXNpc2RuPzogc3RyaW5nO1xuICBlbWFpbD86IHN0cmluZztcblxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5wYSA9IHZhbHVlO1xuICB9XG5cbiAgc2V0IHN1cm5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMucGIgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldCBleHRlcm5hbFNlZ21lbnRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMucGMgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldCBnZW5kZXIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMucGQgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldCBkYXRlT2ZCaXJ0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5wZSA9IHZhbHVlO1xuICB9XG5cbiAgc2V0IG1hcml0YWxTdGF0dXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMucGYgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldCBjaGlsZENvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnBnID0gdmFsdWU7XG4gIH1cblxuICBzZXQgY291bnRyeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5waCA9IHZhbHVlO1xuICB9XG5cbiAgc2V0IHN0YXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBpID0gdmFsdWU7XG4gIH1cblxuICBzZXQgY2l0eSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5waiA9IHZhbHVlO1xuICB9XG5cbiAgc2V0IGRpc3RyaWN0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBrID0gdmFsdWU7XG4gIH1cblxuICBzZXQgb2NjdXBhdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5wbCA9IHZhbHVlO1xuICB9XG5cbiAgc2V0IGluZHVzdHJ5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBtID0gdmFsdWU7XG4gIH1cblxuICBzZXQgZmF2b3JpdGVUZWFtKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBuID0gdmFsdWU7XG4gIH1cblxuICBzZXQgbGFuZ3VhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMucG8gPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZW51bSBOTVVzZXJHZW5kZXIge1xuICBNQUxFID0gMCxcbiAgRkVNQUxFID0gMSxcbiAgTk9UX1NQRUNJRklFRCA9IDIsXG59XG5cbmV4cG9ydCBlbnVtIE5NVXNlck1hcml0YWxTdGF0dXMge1xuICBTSU5HTEUgPSAwLFxuICBNQVJSSUVEID0gMSxcbiAgTk9UX1NQRUNJRklFRCA9IDIsXG59XG5cbmV4cG9ydCBjbGFzcyBOZXRtZXJhRXZlbnQgeyB9Il19