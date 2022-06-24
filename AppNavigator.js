import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Activity from './src/screens/activity/Activity.js';
import Home from './src/screens/home/Home';
import MyCalendar from './src/screens/mycalendar/MyCalendar';
import Personal from './src/screens/personal/Personal';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Image} from 'react-native';
import homeicon from './assets/images/homeicon.png';
import activityicon from './assets/images/activityicon.png';
import calendaricon from './assets/images/calendaricon.png';
import usericon from './assets/images/usericon.png';

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

//** tạm thời style để check hiển thị. sau khi bố cục rõ ràng  */
export default class AppNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <FooterTab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
              let iconname = homeicon;
              if (route.name == 'Home') {
                iconname = homeicon;
              } else if (route.name == 'Activity') {
                iconname = activityicon;
              } else if (route.name == 'MyCalendar') {
                iconname = calendaricon;
              } else {
                iconname = usericon;
              }
              return (
                <View>
                  <Image
                    source={iconname}
                    style={{
                      height: '75%',
                      aspectRatio: 1,
                      tintColor: focused ? '#e32f45' : '#748c94',
                    }}
                  />
                </View>
              );
            },
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}>
          <FooterTab.Screen name="Home" component={HomeStackScreen} />
          <FooterTab.Screen
            name="Activity"
            component={ActivityStackScreen}
            options={{
              tabBarLabel: 'Hoạt động',
              // tabBarIcon: ({color, size}) => (
              //   <Ionicons name="home" color={color} size={size} />
              // ),
            }}
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
