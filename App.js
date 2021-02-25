import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import HomeScreen from './src/screens/SearchPage';
import SearchPage from './src/screens/SearchPage';
import SearchResult from './src/screens/SearchResult';
import BookingPage from './src/screens/BookingPage';
import ConfirmationPage from './src/screens/ConfirmationPage';

const navigator = createStackNavigator(
  {
    Search: SearchPage,
    SearchR:SearchResult,
    Booking:BookingPage,
    Confirm:ConfirmationPage
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: ' Flight Booking App',
    },
  }
);

export default createAppContainer(navigator);
