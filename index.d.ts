import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Netmera
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { Netmera } from '@awesome-cordova-plugins/netmera';
 *
 *
 * constructor(private netmera: Netmera) { }
 *
 * ...
 *
 *
 * this.netmera.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class NetmeraOriginal extends AwesomeCordovaNativePlugin {
    /**
     * This function does something
     * @param netmeraKey {string} Netmera API Key
     * @param fcmKey {string} FCM KEY for android
     * @param baseUrl {string} BaseURL for on premise setup
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    start(netmeraKey: string, fcmKey: string, baseUrl?: string): void;
    /**
   * Requests push notification authorization from the user.
   * @return {void}
   */
    requestPushNotificationAuthorization(): void;
    /**
   * Subscribes to push notification events.
   * @return {Promise<NetmeraPush>} Resolves with the received push notification data.
   */
    subscribePushNotification(): Promise<NetmeraPush>;
    /**
   * Subscribes to events triggered when a push notification contains a URL and is opened.
   * @return {Promise<string>} Resolves with the URL string that was opened.
   */
    subscribeOpenUrl(): Promise<string>;
    /**
   * Subscribes to push notification click events.
   * @return {Promise<NetmeraPush>} Resolves with the push notification data when clicked.
   */
    subscribePushClick(): Promise<NetmeraPush>;
    /**
  * Subscribes to button click events inside push notifications.
  * @return {Promise<NetmeraPush>} Resolves with the push notification data when a button is clicked.
  */
    subscribePushButtonClick(): Promise<NetmeraPush>;
    /**
  * Sends a custom event to Netmera for analytics or tracking purposes.
  * @param event {NetmeraEvent} The event object to send.
  * @return {void}
  */
    sendEvent(event: NetmeraEvent): void;
    /**
   * Fetches the inbox messages using a filter.
   * @param filter {NetmeraInboxFilter} Filter used to fetch specific inbox items.
   * @return {Promise<NetmeraInbox>} Resolves with the fetched inbox data.
   */
    fetchInboxUsingFilter(filter: NetmeraInboxFilter): Promise<NetmeraInbox>;
    /**
   * Fetches the next page of inbox messages.
   * @return {Promise<NetmeraInbox>} Resolves with the next page of inbox data.
   */
    fetchNextPage(): Promise<NetmeraInbox>;
    /**
   * Counts the number of inbox items with the given status.
   * @param status {NetmeraPushStatus} The status to count (e.g., read, unread).
   * @return {Promise<number>} Resolves with the count of matching items.
   */
    countForStatus(status: NetmeraPushStatus): Promise<number>;
    /**
   * Updates the status of a range of inbox items.
   * @param index {number} The starting index of the messages to update.
   * @param length {number} The number of messages to update.
   * @param status {NetmeraPushStatus} The new status to apply.
   * @return {Promise<boolean>} Resolves with true if the update was successful.
   */
    updatePushStatus(index: number, length: number, status: NetmeraPushStatus): Promise<boolean>;
    /**
   * Updates the user information for Netmera.
   * @param user {NetmeraUser} The user object to update.
   * @return {void}
   */
    updateUser(user: NetmeraUser): void;
    /**
   * ask location authorization from the user.
   * @return {void}
   */
    askLocationAuthorization(): void;
}
export interface NetmeraInboxFilter {
    status?: number;
    pageSize?: number;
    categories?: string[];
    includeExpiredObjects?: boolean;
}
export interface NetmeraPush {
    title: string;
    subtitle: string;
    body: string;
    pushId: string;
    pushInstanceId: string;
    pushType: number;
    inboxStatus: number;
    sendDate: any;
    deeplinkUrl: string;
}
export interface NetmeraInbox {
    hasNextPage: boolean;
    inbox: NetmeraPush[];
}
export declare enum NetmeraPushStatus {
    undefiend = 0,
    read = 1,
    unread = 2,
    readAndUnread = 3,
    deleted = 4,
    all = 7
}
export declare class NetmeraUser {
    private pa?;
    private pb?;
    private pc?;
    private pd?;
    private pe?;
    private pf?;
    private pg?;
    private ph?;
    private pi?;
    private pj?;
    private pk?;
    private pl?;
    private pm?;
    private pn?;
    private po?;
    userId?: string;
    msisdn?: string;
    email?: string;
    set name(value: string);
    set surname(value: string);
    set externalSegments(value: string[]);
    set gender(value: number);
    set dateOfBirth(value: number);
    set maritalStatus(value: number);
    set childCount(value: number);
    set country(value: string);
    set state(value: string);
    set city(value: string);
    set district(value: string);
    set occupation(value: string);
    set industry(value: string);
    set favoriteTeam(value: string);
    set language(value: string);
}
export declare enum NMUserGender {
    MALE = 0,
    FEMALE = 1,
    NOT_SPECIFIED = 2
}
export declare enum NMUserMaritalStatus {
    SINGLE = 0,
    MARRIED = 1,
    NOT_SPECIFIED = 2
}
export declare class NetmeraEvent {
}

export declare const Netmera: NetmeraOriginal;