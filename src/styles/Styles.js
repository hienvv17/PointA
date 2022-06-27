import {StyleSheet, Dimensions} from 'react-native';
const screenHight = Dimensions.get('window');
const screenWidth = Dimensions.get('window');
const headerHight = screenHight / 10,
  searchboxHight = screenHight / 10,
  trendHight = (screenHight / 10) * 5,
  eventHight = (screenHight / 10) * 3;

console.log(screenWidth, screenHight);
const Styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 5},

  /**Home page header style */
  headericon: {
    backgroundColor: 'yellow',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  iconContainer: {
    borderWidth: 1,
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft: 0,
  },
  headerContainer: {
    borderWidth: 2,
    flexDirection: 'row',
  },
  headerImage: {
    height: '100%',
    aspectRatio: 1 / 1,
    borderRadius: 0,
  },
  imageContainer: {
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#78A66D',
    paddingHorizontal: 10,
  },
  /** ---------------- */

  /**Homepage search box */
  searchBoxContainer: {
    flex: 0.5,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'red',
  },
  searchBox: {
    flex: 7,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filter: {flex: 1, justifyContent: 'center', alignItems: 'center'},

  /** ---------------- */

  /**Homepage Event */

  eventContainer: {
    flex: 2,
    borderWidth: 2,
  },
  allEventButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  eventCoverImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 25,
    resizeMode: 'cover',
    overflow: 'hidden',
  },

  /** ---------------- */

  /**Homepage trend */

  trendContainer: {
    flex: 4,
    borderWidth: 1,
  },
  allTrendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.2,
  },
  trendlist: {
    flat: 0.2,
  },
  /** ---------------- */
});
export default Styles;

//Write style for all screen at here
