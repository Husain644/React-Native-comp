import DrawerHome from './drawer/drawer'
import HomeNav from './navigation/home'
import MyDrawer from './drawer/myDrawer/mydrawer'
import HomeCamera from './camera/home'
import HomeWeb from './webview/home'
import Gallery from './camera/gallery/gallery'                                                

import RazorPayHome from './paymentGateway/razorpay/home_razorpay'
import Cashfree from './paymentGateway/razorpay/cashfree'
import Redux_app from './redux/redux_app'
import Share_It from './Fetures/share_Features'
import GoogleMap from './google_Map/map_routing'
import AutoComplete from './google_Map/comp/autoComplete/autoComplete'
import Routes from './google_Map/comp/routes/routes'
import DateTime from './forms/date&timepicker/datetime'
import FileManager from './Fetures/fileSystems/file_manager'
import NotifeeHome from './Fetures/notifications/notifeeHome'
import ContactsHome from './Fetures/Contacts/contacts'
import ProjectHome from './projects/projectsHome'
import RealTimeHome from './realTime/home'
import AuthHome from './forms/Authentication/home'
import Home_utility from './utility/home'
import Home_firebase from './firebase_utility/Notification/home';
import NotifeeNotification from './firebase_utility/Notification/notifee_notification';
import StorageMain from './storage/storageMain';
import VideoDownloader from './downloder/videos_downloder/downloder'
//component import
import AutoComp from './AA_Components/autocomplete/autocomplete'
import EditableList from './AA_Components/list/editable_list'
import Accordian from './AA_Components/accordians/accord'
import Anim from './AA_Components/animations/anim'
import ReanimHome from './AA_Components/animations/reanimated/reanimHome'
import Activity_Indicatr from './AA_Components/activity_indicator/activity_indicator'
import AppbarComp from './AA_Components/appbar/appbar'
import Divider from './AA_Components/divider/divider'
import Btns from './AA_Components/Buttons/btn'
import Bar from './AA_Components/appbar/bottombar/bar'
import CardHome from './AA_Components/card/home'
import Chckbox from './AA_Components/checkbox/checkbox'
import BadgeComp from './AA_Components/badge/badge'
import FabButton from './AA_Components/Buttons/fab_button'
import Slider from './AA_Components/slider/slider'
import TableHome from './AA_Components/table/tableHome'
import FHome from './AA_Components/forms/fhome'
import ChipComp from './AA_Components/chip/chip'
import Modal from './AA_Components/modals/modal'
import Form from './AA_Components/forms/fhome'
import Menu from './AA_Components/menu/menu'
import Skelton from './AA_Components/skelton/skelton'
import BannerHome from './AA_Components/banner/banner/bannerHome'
import Music from './AA_Components/media/music/music'
import Typography from './AA_Components/text/txt'
import CaroselNew from './AA_Components/banner/carosel/caroselNew'
import ChartsHome from './AA_Components/charts/home'
import StatusBarStyling from './AA_Components/others/statusbar'
import SplashScreen from './AA_Components/splash_screen/splash'


export const AllNav = [
  {
    screenName: 'DrawerHome',
    title: 'Main Drawer Navigation',
    description: 'Demonstrates drawer navigation structure and behavior',
    component: DrawerHome,
    icon: 'menu',
  },

  {
    screenName: 'HomeNav',
    title: 'Home Navigation',
    description: 'Main home navigation flow and screen routing',
    component: HomeNav,
    icon: 'home',
  },

  {
    screenName: 'MyDrawer',
    title: 'Custom Drawer Example',
    description: 'Custom styled drawer with personalized layout',
    component: MyDrawer,
    icon: 'menu-open',
  },

  {
    screenName: 'Camera',
    title: 'Camera',
    description: 'Access device camera and capture photos or videos',
    component: HomeCamera,
    icon: 'camera',
    props: { navigation: 'Camera' } // Opens Camera screen
  },

  {
    screenName: 'WebView',
    title: 'WebView Integration',
    description: 'Load and display web content inside the app',
    component: HomeWeb,
    icon: 'web',
  },

  {
    screenName: 'Gallery',
    title: 'Image Gallery',
    description: 'Browse and select images from device storage',
    component: HomeCamera,
    icon: 'image',
    props: { navigation: 'Gallery' }
  },
  {
    screenName: 'QrCode',
    title: 'Qr code open',
    description: 'qrcode functanility',
    component: HomeCamera,
    icon: 'qrcode',
     props: { navigation: 'Qrcode' } // Opens Qrcode screen
  },
  {
    screenName: 'RazorPay',
    title: 'RazorPay Payment Gateway',
    description: 'Online payments using RazorPay integration',
    component: RazorPayHome,
    icon: 'credit-card',
  },

  {
    screenName: 'Cashfree',
    title: 'Cashfree Payment Gateway',
    description: 'Process payments securely with Cashfree',
    component: Cashfree,
    icon: 'wallet',
  },

  {
    screenName: 'ReduxApp',
    title: 'Redux State Management',
    description: 'Global state management using Redux',
    component: Redux_app,
    icon: 'database',
  },

  {
    screenName: 'Share',
    title: 'Share Features',
    description: 'Share content with other apps on the device',
    component: Share_It,
    icon: 'share',
  },

  {
    screenName: 'GoogleMap',
    title: 'Google Map Routing',
    description: 'Maps, markers, and route navigation',
    component: GoogleMap,
    icon: 'map',
  },


  {
    screenName: 'DateTime',
    title: 'Date & Time Picker',
    description: 'Select date and time using native pickers',
    component: DateTime,
    icon: 'calendar',
  },

  {
    screenName: 'FileManager',
    title: 'File System Manager',
    description: 'Read, write, and manage local files',
    component: FileManager,
    icon: 'folder',
  },

  {
    screenName: 'Notification',
    title: 'Local Notifications',
    description: 'Trigger and manage local notifications',
    component: NotifeeHome,
    icon: 'bullhorn',
  },

  {
    screenName: 'Contacts',
    title: 'Device Contacts',
    description: 'Access and display device contacts',
    component: ContactsHome,
    icon: 'account',
  },

  {
    screenName: 'Projects',
    title: 'Projects Dashboard',
    description: 'Showcase multiple demo projects',
    component: ProjectHome,
    icon: 'briefcase',
  },

  {
    screenName: 'RealTime',
    title: 'Real-time Features',
    description: 'Real-time updates using live data sources',
    component: RealTimeHome,
    icon: 'clock',
  },

  {
    screenName: 'Authentication',
    title: 'Login & Signup Forms',
    description: 'User authentication and validation flows',
    component: AuthHome,
    icon: 'lock',
  },

  {
    screenName: 'Utility',
    title: 'Utility Features',
    description: 'Helpful utility and helper functionalities',
    component: Home_utility,
    icon: 'tools',
  },

  {
    screenName: 'FirebaseNotification',
    title: 'Firebase Notifications',
    description: 'Push notifications using Firebase Cloud Messaging',
    component: Home_firebase,
    icon: 'firebase',
  },

  {
    screenName: 'NotifeeFirebase',
    title: 'Notifee + Firebase',
    description: 'Advanced notifications with Notifee and Firebase',
    component: NotifeeNotification,
    icon: 'bullhorn',
  },

  {
    screenName: 'Storage',
    title: 'Local Storage Manager',
    description: 'Store and retrieve data from local storage',
    component: StorageMain,
    icon: 'cloud-check',
  },

  {
    screenName: 'VideoDownloader',
    title: 'Video Downloader',
    description: 'Download and save videos locally',
    component: VideoDownloader,
    icon: 'download',
  },

  {
    screenName: 'AutoCompleteUI',
    title: 'Autocomplete Input',
    description: 'Text input with suggestion dropdown',
    component: AutoComp,
    icon: 'text-search',
  },

  {
    screenName: 'EditableList',
    title: 'Editable List View',
    description: 'List with add, edit, and delete actions',
    component: EditableList,
    icon: 'format-list-bulleted',
  },

  {
    screenName: 'Accordion',
    title: 'Accordion Component',
    description: 'Expandable and collapsible content sections',
    component: Accordian,
    icon: 'view-list',
  },

  {
    screenName: 'Animations',
    title: 'Basic Animations',
    description: 'Simple animated transitions and effects',
    component: Anim,
    icon: 'animation',
  },

  {
    screenName: 'Reanimated',
    title: 'Reanimated Animations',
    description: 'High-performance animations using Reanimated',
    component: ReanimHome,
    icon: 'refresh',
  },

  {
    screenName: 'ActivityIndicator',
    title: 'Loading Indicator',
    description: 'Show loading and progress indicators',
    component: Activity_Indicatr,
    icon: 'loading',
  },

  {
    screenName: 'AppBar',
    title: 'Top App Bar',
    description: 'Customizable top app navigation bar',
    component: AppbarComp,
    icon: 'application',
  },

  {
    screenName: 'Divider',
    title: 'Divider Component',
    description: 'Visual separators between UI elements',
    component: Divider,
    icon: 'minus',
  },

  {
    screenName: 'Buttons',
    title: 'Button Variations',
    description: 'Different button styles and actions',
    component: Btns,
    icon: 'gesture-tap-button',
  },

  {
    screenName: 'BottomBar',
    title: 'Bottom Navigation Bar',
    description: 'Bottom tab navigation example',
    component: Bar,
    icon: 'view-dashboard',
  },

  {
    screenName: 'Cards',
    title: 'Card Layouts',
    description: 'Card-based UI layouts and designs',
    component: CardHome,
    icon: 'card-outline',
  },

  {
    screenName: 'Checkbox',
    title: 'Checkbox Component',
    description: 'Checkbox input with multiple states',
    component: Chckbox,
    icon: 'checkbox-marked',
  },

  {
    screenName: 'Badge',
    title: 'Badge Component',
    description: 'Small count or status badges',
    component: BadgeComp,
    icon: 'label',
  },

  {
    screenName: 'FAB',
    title: 'Floating Action Button',
    description: 'Primary floating action button examples',
    component: FabButton,
    icon: 'plus-circle',
  },

  {
    screenName: 'Slider',
    title: 'Slider Input',
    description: 'Slider for selecting numeric values',
    component: Slider,
    icon: 'tune',
  },

  {
    screenName: 'Table',
    title: 'Table Layout',
    description: 'Tabular data display and formatting',
    component: TableHome,
    icon: 'table',
  },

  {
    screenName: 'FormsHome',
    title: 'Form Components',
    description: 'Reusable form UI components',
    component: FHome,
    icon: 'form-select',
  },

  {
    screenName: 'Chip',
    title: 'Chip Component',
    description: 'Compact elements for tags and options',
    component: ChipComp,
    icon: 'tag',
  },

  {
    screenName: 'Modal',
    title: 'Modal Dialogs',
    description: 'Popup modals and dialogs',
    component: Modal,
    icon: 'window-maximize',
  },

  {
    screenName: 'FormExample',
    title: 'Form Validation Examples',
    description: 'Form validation and error handling',
    component: Form,
    icon: 'file-document',
  },

  {
    screenName: 'Menu',
    title: 'Menu Component',
    description: 'Popup and contextual menu examples',
    component: Menu,
    icon: 'menu',
  },

  {
    screenName: 'Skeleton',
    title: 'Skeleton Loader',
    description: 'Skeleton loading placeholders',
    component: Skelton,
    icon: 'blur',
  },

  {
    screenName: 'Banner',
    title: 'Banner Component',
    description: 'Banner and promotional UI blocks',
    component: BannerHome,
    icon: 'image-area',
  },

  {
    screenName: 'Music',
    title: 'Music Player',
    description: 'Play and control audio content',
    component: Music,
    icon: 'music',
  },

  {
    screenName: 'Typography',
    title: 'Text & Typography',
    description: 'Text styles and font variations',
    component: Typography,
    icon: 'format-text',
  },

  {
    screenName: 'Carousel',
    title: 'Image Carousel',
    description: 'Scrollable image carousel view',
    component: CaroselNew,
    icon: 'view-carousel',
  },

  {
    screenName: 'Charts',
    title: 'Charts & Graphs',
    description: 'Visual data representation using charts',
    component: ChartsHome,
    icon: 'chart-bar',
  },

  {
    screenName: 'StatusBar',
    title: 'Status Bar Styling',
    description: 'Customize status bar appearance',
    component: StatusBarStyling,
    icon: 'cellphone',
  },

  {
    screenName: 'Splash',
    title: 'Splash Screen',
    description: 'Initial splash screen on app launch',
    component: SplashScreen,
    icon: 'flash',
  },
];
