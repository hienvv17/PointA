import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Activity from './src/screens/activity/Activity.js';
import Home from './src/screens/home/Home';
import MyCalendar from './src/screens/mycalendar/MyCalendar';
import Personal from './src/screens/personal/Personal';
import {View, Image, Text, Dimensions} from 'react-native';
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
              let label = 'Trang chủ';
              if (route.name == 'Home') {
                iconname = homeicon;
              } else if (route.name == 'Activity') {
                iconname = activityicon;
                label = 'Hoạt động';
              } else if (route.name == 'MyCalendar') {
                iconname = calendaricon;
                label = 'Lịch của tôi';
              } else {
                iconname = usericon;
                label = 'Cá nhân';
              }
              return (
                <View
                  style={{
                    padding: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={iconname}
                    style={{
                      resizeMode: 'contain',
                      height: '50%',
                      aspectRatio: 1,
                      tintColor: focused ? '#e32f45' : '#748c94',
                      padding: 10,
                      marginBottom: 10,
                    }}
                  />
                  <Text style={{fontSize: 10, fontWeight: '600'}}>{label}</Text>
                </View>
              );
            },
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
            tabBarStyle: {height: '10%'},
            tabBarShowLabel: false,
          })}>
          <FooterTab.Screen name="Home" component={HomeStackScreen} />
          <FooterTab.Screen name="Activity" component={ActivityStackScreen} />
          <FooterTab.Screen
            name="MyCalendar"
            component={MyCalendarStackScreen}
          />
          <FooterTab.Screen name="Personal" component={PersonalStackScreen} />
        </FooterTab.Navigator>
      </NavigationContainer>
    );
  }
}

// option đa ngôn ngữ khi setup vietnamese và english sau khi hoàn thành thêm 1 checking để chọn render vietnam hay english
