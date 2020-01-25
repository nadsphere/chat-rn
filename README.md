welcome to chatly - the ui chat app

how to install
1. npm i -g react-native-cli
2. react-native init <yourname>
3. cd 'yourname'
4. Make Navigator: (automate linked bcs it use RN v.4) [btw my environmen is yarn, so it doesn't more any audit denial or something]
    a. yarn add react-navigation react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context
5. open android/app/build/gradle, and put this:
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
Ps. for android x
6. Add:
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
and
 @Override
 protected ReactActivityDelegate createReactActivityDelegate() {
   return new ReactActivityDelegate(this, getMainComponentName()) {
     @Override
     protected ReactRootView createRootView() {
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
     }
   };
 }
and then put this on App.js/index.js
import 'react-native-gesture-handler';
6. run the project
If you find an error like : 'debug' or something, type: gradlew clean and run again
7. If find error: 500 on masked view, type: yarn add react-navigation-stack @react-native-community/masked-view
8. run again
9. bottom nav: yarn add react-navigation-tabs
10. and import ilike this:
import { createBottomTabNavigator } from 'react-navigation-tabs';
11. yarn add --dev lodash
12. icons: yarn add react-native-vector-icons
13. ionicons: react-native-ionicons




reference:
https://reactnavigation.org/docs/en/bottom-tab-navigator.html

