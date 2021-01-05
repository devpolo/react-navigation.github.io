(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{350:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(1),o=a(6),i=(a(0),a(426)),r=a(430),b=a(431),c={id:"material-bottom-tab-navigator",title:"createMaterialBottomTabNavigator",sidebar_label:"createMaterialBottomTabNavigator"},l={unversionedId:"material-bottom-tab-navigator",id:"version-5.x/material-bottom-tab-navigator",isDocsHomePage:!1,title:"createMaterialBottomTabNavigator",description:"A material-design themed tab bar on the bottom of the screen that lets you switch between different routes with animation. Routes are lazily initialized - their screen components are not mounted until they are first focused.",source:"@site/versioned_docs/version-5.x/material-bottom-tab-navigator.md",slug:"/material-bottom-tab-navigator",permalink:"/docs/material-bottom-tab-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/material-bottom-tab-navigator.md",version:"5.x",sidebar_label:"createMaterialBottomTabNavigator",sidebar:"version-5.x/docs",previous:{title:"createBottomTabNavigator",permalink:"/docs/bottom-tab-navigator"},next:{title:"createMaterialTopTabNavigator",permalink:"/docs/material-top-tab-navigator"}},s=[{value:"API Definition",id:"api-definition",children:[]},{value:"RouteConfigs",id:"routeconfigs",children:[{value:"Props",id:"props",children:[]},{value:"Options",id:"options",children:[]},{value:"Events",id:"events",children:[]},{value:"Helpers",id:"helpers",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Using with <code>react-native-paper</code> (optional)",id:"using-with-react-native-paper-optional",children:[]}],p={rightToc:s};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A material-design themed tab bar on the bottom of the screen that lets you switch between different routes with animation. Routes are lazily initialized - their screen components are not mounted until they are first focused."),Object(i.b)("p",null,"This wraps the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://callstack.github.io/react-native-paper/bottom-navigation.html"}),Object(i.b)("inlineCode",{parentName:"a"},"BottomNavigation"))," component from ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnativepaper.com"}),Object(i.b)("inlineCode",{parentName:"a"},"react-native-paper")),". If you ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://callstack.github.io/react-native-paper/getting-started.html"}),"configure the Babel plugin"),", it won't include the whole ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-paper")," library in your bundle."),Object(i.b)("img",{src:"/assets/navigators/tabs/material-bottom-tabs.gif",style:{width:"420px",maxWidth:"100%",margin:"16px 0"}}),Object(i.b)("p",null,"To use this navigator, ensure that you have ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/getting-started"}),Object(i.b)("inlineCode",{parentName:"a"},"@react-navigation/native")," and its dependencies (follow this guide)"),", then install ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/tree/main/packages/material-bottom-tabs"}),Object(i.b)("inlineCode",{parentName:"a"},"@react-navigation/material-bottom-tabs")),":"),Object(i.b)(r.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(b.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install @react-navigation/material-bottom-tabs react-native-paper\n"))),Object(i.b)(b.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @react-navigation/material-bottom-tabs react-native-paper\n")))),Object(i.b)("p",null,"This API also requires that you install ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-vector-icons"),"! If you are using Expo, it will just work out of the box. Otherwise, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/oblador/react-native-vector-icons#installation"}),"follow these installation instructions"),"."),Object(i.b)("p",null,"To use this tab navigator, import it from ",Object(i.b)("inlineCode",{parentName:"p"},"@react-navigation/material-bottom-tabs")),Object(i.b)("h2",{id:"api-definition"},"API Definition"),Object(i.b)("p",null,"To use this tab navigator, import it from ",Object(i.b)("inlineCode",{parentName:"p"},"@react-navigation/material-bottom-tabs"),":"),Object(i.b)("samp",{id:"material-tab-based-navigation-minimal"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { createMaterialBottomTabNavigator } from \'@react-navigation/material-bottom-tabs\';\n\nconst Tab = createMaterialBottomTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Home" component={HomeScreen} />\n      <Tab.Screen name="Settings" component={SettingsScreen} />\n    </Tab.Navigator>\n  );\n}\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"For a complete usage guide please visit ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/tab-based-navigation"}),"Tab Navigation"))),Object(i.b)("h2",{id:"routeconfigs"},"RouteConfigs"),Object(i.b)("p",null,"The route configs object is a mapping from route name to a route config."),Object(i.b)("h3",{id:"props"},"Props"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Tab.Navigator")," component accepts following props:"),Object(i.b)("h4",{id:"initialroutename"},Object(i.b)("inlineCode",{parentName:"h4"},"initialRouteName")),Object(i.b)("p",null,"The name of the route to render on first load of the navigator."),Object(i.b)("h4",{id:"screenoptions"},Object(i.b)("inlineCode",{parentName:"h4"},"screenOptions")),Object(i.b)("p",null,"Default options to use for the screens in the navigator."),Object(i.b)("h4",{id:"backbehavior"},Object(i.b)("inlineCode",{parentName:"h4"},"backBehavior")),Object(i.b)("p",null,"Behavior of back button handling."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"initialRoute")," to return to initial tab"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"order")," to return to previous tab (in the order they are shown in the tab bar)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"history")," to return to last visited tab"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"none")," to not handle back button")),Object(i.b)("h4",{id:"shifting"},Object(i.b)("inlineCode",{parentName:"h4"},"shifting")),Object(i.b)("p",null,"Whether the shifting style is used, the active tab appears wider and the inactive tabs won't have a label. By default, this is ",Object(i.b)("inlineCode",{parentName:"p"},"true")," when you have more than 3 tabs."),Object(i.b)("h4",{id:"labeled"},Object(i.b)("inlineCode",{parentName:"h4"},"labeled")),Object(i.b)("p",null,"Whether to show labels in tabs. When ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", only icons will be displayed."),Object(i.b)("h4",{id:"activecolor"},Object(i.b)("inlineCode",{parentName:"h4"},"activeColor")),Object(i.b)("p",null,"Custom color for icon and label in the active tab."),Object(i.b)("h4",{id:"inactivecolor"},Object(i.b)("inlineCode",{parentName:"h4"},"inactiveColor")),Object(i.b)("p",null,"Custom color for icon and label in the inactive tab."),Object(i.b)("h4",{id:"barstyle"},Object(i.b)("inlineCode",{parentName:"h4"},"barStyle")),Object(i.b)("p",null,"Style for the bottom navigation bar. You can set a bottom padding here if you have a translucent navigation bar on Android: ",Object(i.b)("inlineCode",{parentName:"p"},"barStyle={{ paddingBottom: 48 }}"),"."),Object(i.b)("p",null,"Example:"),Object(i.b)("samp",{id:"material-bottom-tab-styled"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'<Tab.Navigator\n  initialRouteName="Home"\n  activeColor="#f0edf6"\n  inactiveColor="#3e2465"\n  barStyle={{ backgroundColor: \'#694fad\' }}\n>\n  {/* ... */}\n</Tab.Navigator>\n')),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("p",null,"The following ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/screen-options"}),"options")," can be used to configure the screens in the navigator:"),Object(i.b)("h4",{id:"title"},Object(i.b)("inlineCode",{parentName:"h4"},"title")),Object(i.b)("p",null,"Generic title that can be used as a fallback for ",Object(i.b)("inlineCode",{parentName:"p"},"headerTitle")," and ",Object(i.b)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),Object(i.b)("h4",{id:"tabbaricon"},Object(i.b)("inlineCode",{parentName:"h4"},"tabBarIcon")),Object(i.b)("p",null,"Function that given ",Object(i.b)("inlineCode",{parentName:"p"},"{ focused: boolean, color: string }")," returns a React.Node, to display in the tab bar."),Object(i.b)("h4",{id:"tabbarcolor"},Object(i.b)("inlineCode",{parentName:"h4"},"tabBarColor")),Object(i.b)("p",null,"Color for the tab bar when the tab corresponding to the screen is active. Used for the ripple effect. This is only supported when ",Object(i.b)("inlineCode",{parentName:"p"},"shifting")," is ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("h4",{id:"tabbarlabel"},Object(i.b)("inlineCode",{parentName:"h4"},"tabBarLabel")),Object(i.b)("p",null,"Title string of a tab displayed in the tab bar. When undefined, scene ",Object(i.b)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",Object(i.b)("inlineCode",{parentName:"p"},"labeled")," option in the previous section."),Object(i.b)("h4",{id:"tabbarbadge"},Object(i.b)("inlineCode",{parentName:"h4"},"tabBarBadge")),Object(i.b)("p",null,"Badge to show on the tab icon, can be ",Object(i.b)("inlineCode",{parentName:"p"},"true")," to show a dot, ",Object(i.b)("inlineCode",{parentName:"p"},"string")," or ",Object(i.b)("inlineCode",{parentName:"p"},"number")," to show text."),Object(i.b)("h4",{id:"tabbaraccessibilitylabel"},Object(i.b)("inlineCode",{parentName:"h4"},"tabBarAccessibilityLabel")),Object(i.b)("p",null,"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."),Object(i.b)("h4",{id:"tabbartestid"},Object(i.b)("inlineCode",{parentName:"h4"},"tabBarTestID")),Object(i.b)("p",null,"ID to locate this tab button in tests."),Object(i.b)("h3",{id:"events"},"Events"),Object(i.b)("p",null,"The navigator can ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/navigation-events"}),"emit events")," on certain actions. Supported events are:"),Object(i.b)("h4",{id:"tabpress"},Object(i.b)("inlineCode",{parentName:"h4"},"tabPress")),Object(i.b)("p",null,"This event is fired when the user presses the tab button for the current screen in the tab bar. By default a tab press does several things:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If the tab is not focused, tab press will focus that tab"),Object(i.b)("li",{parentName:"ul"},"If the tab is already focused:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If the screen for the tab renders a scroll view, you can use ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/use-scroll-to-top"}),Object(i.b)("inlineCode",{parentName:"a"},"useScrollToTop"))," to scroll it to top"),Object(i.b)("li",{parentName:"ul"},"If the screen for the tab renders a stack navigator, a ",Object(i.b)("inlineCode",{parentName:"li"},"popToTop")," action is performed on the stack")))),Object(i.b)("p",null,"To prevent the default behavior, you can call ",Object(i.b)("inlineCode",{parentName:"p"},"event.preventDefault"),":"),Object(i.b)("samp",{id:"material-bottom-tab-prevent-default"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabPress', e => {\n    // Prevent default behavior\n\n    e.preventDefault();\n    // Do something manually\n    // ...\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),Object(i.b)("h3",{id:"helpers"},"Helpers"),Object(i.b)("p",null,"The tab navigator adds the following methods to the navigation prop:"),Object(i.b)("h4",{id:"jumpto"},Object(i.b)("inlineCode",{parentName:"h4"},"jumpTo")),Object(i.b)("p",null,"Navigates to an existing screen in the tab navigator. The method accepts following arguments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"name")," - ",Object(i.b)("em",{parentName:"li"},"string")," - Name of the route to jump to."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"params")," - ",Object(i.b)("em",{parentName:"li"},"object")," - Screen params to merge into the destination route (found in the pushed screen through ",Object(i.b)("inlineCode",{parentName:"li"},"route.params"),").")),Object(i.b)("samp",{id:"material-tab-jump-to"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"navigation.jumpTo('Profile', { name: 'Micha\u015b' });\n")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("samp",{id:"material-bottom-tab-example"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { createMaterialBottomTabNavigator } from \'@react-navigation/material-bottom-tabs\';\nimport MaterialCommunityIcons from \'react-native-vector-icons/MaterialCommunityIcons\';\n\nconst Tab = createMaterialBottomTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator\n      initialRouteName="Feed"\n      activeColor="#e91e63"\n      style={{ backgroundColor: \'tomato\' }}\n    >\n      <Tab.Screen\n        name="Feed"\n        component={Feed}\n        options={{\n          tabBarLabel: \'Home\',\n          tabBarIcon: ({ color }) => (\n            <MaterialCommunityIcons name="home" color={color} size={26} />\n          ),\n        }}\n      />\n      <Tab.Screen\n        name="Notifications"\n        component={Notifications}\n        options={{\n          tabBarLabel: \'Updates\',\n          tabBarIcon: ({ color }) => (\n            <MaterialCommunityIcons name="bell" color={color} size={26} />\n          ),\n        }}\n      />\n      <Tab.Screen\n        name="Profile"\n        component={Profile}\n        options={{\n          tabBarLabel: \'Profile\',\n          tabBarIcon: ({ color }) => (\n            <MaterialCommunityIcons name="account" color={color} size={26} />\n          ),\n        }}\n      />\n    </Tab.Navigator>\n  );\n}\n')),Object(i.b)("h2",{id:"using-with-react-native-paper-optional"},"Using with ",Object(i.b)("inlineCode",{parentName:"h2"},"react-native-paper")," (optional)"),Object(i.b)("p",null,"You can use the theming support in ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-paper")," to customize the material bottom navigation by wrapping your app in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://callstack.github.io/react-native-paper/getting-started.html"}),Object(i.b)("inlineCode",{parentName:"a"},"Provider")," from ",Object(i.b)("inlineCode",{parentName:"a"},"react-native-paper")),". A common use case for this can be to customize the background color for the screens when your app has a dark theme. Follow the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://callstack.github.io/react-native-paper/theming.html"}),"instructions on ",Object(i.b)("inlineCode",{parentName:"a"},"react-native-paper"),"'s documentation")," to learn how to customize the theme."))}u.isMDXComponent=!0},426:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,d=p["".concat(r,".").concat(m)]||p[m]||u[m]||i;return a?o.a.createElement(d,b(b({ref:t},l),{},{components:a})):o.a.createElement(d,b({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,r[1]=b;for(var l=2;l<i;l++)r[l]=a[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},427:function(e,t,a){"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},428:function(e,t,a){"use strict";var n=a(0),o=a(429);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},429:function(e,t,a){"use strict";var n=a(0),o=Object(n.createContext)(void 0);t.a=o},430:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(428),r=a(427),b=a(49),c=a.n(b),l=37,s=39;t.a=function(e){var t=e.block,a=e.children,b=e.defaultValue,p=e.values,u=e.groupId,m=e.className,d=Object(i.a)(),h=d.tabGroupChoices,O=d.setTabGroupChoices,j=Object(n.useState)(b),f=j[0],v=j[1],g=Object(n.useState)(!1),N=g[0],y=g[1];if(null!=u){var C=h[u];null!=C&&C!==f&&p.some((function(e){return e.value===C}))&&v(C)}var w=function(e){v(e),null!=u&&O(u,e)},T=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},k=function(){y(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",x),window.addEventListener("mousedown",k),function(){window.removeEventListener("keydown",x),window.removeEventListener("mousedown",k)}}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t},m)},p.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===t}),style:N?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case s:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),x(e)},onFocus:function(){return w(t)},onClick:function(){w(t),y(!1)},onPointerDown:function(){return y(!1)}},a)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===f}))[0]))}},431:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);