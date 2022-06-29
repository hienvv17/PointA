import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Activities from '../screens/activities/Activities';
import Home from '../screens/home/homeScreen';
import MyCalendar from '../screens/mycalendar/MyCalendar';
import Personal from '../screens/personal/Personal';
import {View, Image, Text} from 'react-native';
import activeHome from '../../assets/images/activeHome.png';
import unactiveHome from '../../assets/images/unactiveHome.png';
import activeActivity from '../../assets/images/activeActivity.png';
import unactiveActivity from '../../assets/images/unactiveActivity.png';
import activeUser from '../../assets/images/activeUser.png';
import unactiveUser from '../../assets/images/unactiveUser.png';
import activeCalendar from '../../assets/images/activeCalendar.png';
import unactiveCalendar from '../../assets/images/unactiveCalendar.png';

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
        component={Activities}
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
              let iconname = activeHome;
              let label = 'Trang chủ';
              if (route.name == 'Home') {
                iconname = focused ? activeHome : unactiveHome;
              } else if (route.name == 'Activity') {
                iconname = focused ? activeActivity : unactiveActivity;
                label = 'Hoạt động';
              } else if (route.name == 'MyCalendar') {
                iconname = focused ? activeCalendar : unactiveCalendar;
                label = 'Lịch của tôi';
              } else {
                iconname = focused ? activeUser : unactiveUser;
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
                      tintColor: '#8BC77D',
                      padding: 10,
                      marginBottom: 10,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: '600',
                      color: '#8BC77D',
                    }}>
                    {label}
                  </Text>
                </View>
              );
            },
            headerShown: false,
            tabBarStyle: {height: '10%'},
            tabBarShowLabel: false,
          })}>
          <FooterTab.Screen name="Home" component={HomeStackScreen} />
          <FooterTab.Screen name="Activities" component={ActivityStackScreen} />
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
