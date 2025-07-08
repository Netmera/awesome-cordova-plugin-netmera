# 📲 Netmera Cordova SDK Integration

This guide explains how to integrate the Netmera Cordova Plugin into your project.

---

## ✅ Step 1: Install Cordova Plugin

1. Open your terminal and navigate to your Cordova project folder. Run the following command to install the Cordova plugin:

   ```bash
   ionic cordova plugin add cordova-plugin-netmera-v2
   ```

2. In your package.json, add the following dependency for the wrapper:

   ```bash
   "@awesome-cordova-plugins/netmera": "git@github.com:Netmera/awesome-cordova-plugin-netmera.git"
   ```

3. Run the following command to install the dependencies:

   ```bash
   npm install
   ```

   Sample package.json snippet:

   ```bash
   "dependencies": {
     ...
     "@awesome-cordova-plugins/netmera": "git@github.com:Netmera/awesome-cordova-plugin-netmera.git",
     ...
   }
   ```

4. Add the required preferences to your config.xml file:

   ```bash
   <preference name="NetmeraKey" value="example-key" />
   <preference name="NetmeraBaseUrl" value="example-base-url" />
   <preference name="FcmKey" value="example-fcm-key" />
   <preference name="AppGroupName" value="group.com.example.groupname" />
   
   <edit-config file="app/src/main/AndroidManifest.xml" mode="merge" target="/manifest/application">
     ...
     <application android:name="com.netmera.cordova.plugin.NetmeraApplication" />
     ...
   </edit-config>
   ```
   
## ✅ Step 2: Initialize Netmera Plugin
1. Import the Netmera Plugin in your application:

   ```bash
   import { NetmeraPlugin } from '@awesome-cordova-plugins/netmera/ngx';
   ```

2. In your constructor, initialize the plugin:
   
   ```bash
   constructor(private netmera: NetmeraPlugin) {}
   ```
