import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Activity from './src/screens/activity/Activity.js';
import Home from './src/screens/home/Home';
import MyCalendar from './src/screens/mycalendar/MyCalendar';
import Personal from './src/screens/personal/Personal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Image} from 'react-native';
import homeicon from './assets/images/homeicon.png';

const HomeStack = createNativeStackNavigator();
const MyCalendarStack = createNativeStackNavigator();
const ActivityStack = createNativeStackNavigator();
const PersonalStack = createNativeStackNavigator();
const FooterTab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

function ActivityStackScreen() {
  return (
    <ActivityStack.Navigator>
      <ActivityStack.Screen
        name="AwardScreen"
        component={Activity}
        options={{headerShown: false}}
      />
    </ActivityStack.Navigator>
  );
}
function MyCalendarStackScreen() {
  return (
    <MyCalendarStack.Navigator>
      <MyCalendarStack.Screen
        name="MyCalendarScreen"
        component={MyCalendar}
        options={{headerShown: false}}
      />
    </MyCalendarStack.Navigator>
  );
}
function PersonalStackScreen() {
  return (
    <PersonalStack.Navigator>
      <PersonalStack.Screen
        name="PersonalScreen"
        component={Personal}
        options={{headerShown: false}}
      />
    </PersonalStack.Navigator>
  );
}

export default class AppNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <FooterTab.Navigator
          screenOptions={{
            headerShown: false,
            FooterTabBarActiveTintColor: 'tomato',
            FooterTabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              backgroundColor: 'powderblue',
              height: '10%',
            },
            tabBarInactiveTintColor: 'black',
          }}>
          <FooterTab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Trang chủ',
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
              tabBarIcon: () => {
                return <Ionicons name="md-lock-closed" size={30} />;
              },
              tabBarBadge: 3,
            }}
          />
          <FooterTab.Screen
            name="Activity"
            component={ActivityStackScreen}
            options={{tabBarLabel: 'Hoạt động'}}
          />
          <FooterTab.Screen
            name="MyCalendar"
            component={MyCalendarStackScreen}
            options={{tabBarLabel: 'Lịch của tôi'}}
          />

          <FooterTab.Screen
            name="Personal"
            component={PersonalStackScreen}
            options={{tabBarLabel: 'Cá nhân'}}
          />
        </FooterTab.Navigator>
      </NavigationContainer>
    );
  }
}

// option đa ngôn ngữ khi setup vietnamese và english sau khi hoàn thành thêm 1 checking để chọn render vietnam hay english
