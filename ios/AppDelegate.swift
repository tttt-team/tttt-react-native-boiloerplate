//
//  AppDelegate.swift
//  ReactNativeBoilerplate
//
//  Created by 管伟 on 2019/12/14.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
import UIKit

@UIApplicationMain
public class AppDelegate: UIResponder, UIApplicationDelegate, RCTBridgeDelegate {
  
  public var window: UIWindow?
  
  public func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    let bridge = RCTBridge.init(delegate: self, launchOptions: launchOptions);
    let rootView = RCTRootView.init(bridge: bridge!, moduleName: "ReactNativeBoilerplate", initialProperties: nil);
    rootView.backgroundColor = UIColor.init(red: 1.0, green: 1.0, blue: 1.0, alpha: 1)
    self.window = UIWindow.init(frame: UIScreen.main.bounds);
    let rootViewController = UIViewController();
    rootViewController.view = rootView;
    self.window?.rootViewController = rootViewController;
    self.window?.makeKeyAndVisible();
    return true;
  }
  
  public func sourceURL(for bridge: RCTBridge) -> URL {
    #if DEBUG
    return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource: nil);
    #else
    return Bundle.main.url(forResource: "main", withExtension: "jsbundle")!;
    #endif
  }
}
