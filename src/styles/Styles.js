import {StyleSheet, Dimensions} from 'react-native';
const screenHight = Dimensions.get('window');
const screenWidth = Dimensions.get('window');
// console.log(screenHight, screenWidth);
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '2%',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    paddingTop: 10,
  },

  /**Home page header style */
  headerContainer: {
    flex: 0.5,
    flexDirection: 'row',
  },
  headerIconContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    height: '100%',
  },
  iconBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
    overflow: 'hidden',
    //borderWidth: 1,
    backgroundColor: '#EBF2E6',
    borderRadius: 10,
    marginLeft: 15,
  },

  headerImageContainer: {
    flex: 1,
    //borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
  },
  headerImage: {
    height: 10,
    aspectRatio: 1 / 1,
    //borderRadius: 0,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#78A66D',
    marginLeft: '10%',
  },
  /** ---------------- */

  /**Homepage search box */
  searchBoxContainer: {
    flex: 0.5,
    flexDirection: 'row',
    //borderColor: 'red',
    // borderWidth: 1,
    alignItems: 'center',
    marginVertical: 5,
  },
  searchBox: {
    width: '83.3%',
    backgroundColor: '#F4F6F9',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '',
  },
  filter: {
    width: '16.7%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '100%',
    //borderWidth: 1,
    overflow: 'hidden',
    paddingLeft: 15,
  },

  /** ---------------- */

  /**Homepage trend */

  trendContainer: {
    flex: 3.8,
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
  /**Homepage Event */

  eventContainer: {
    flex: 2.2,
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
});
export default Styles;

//Write style for all screen at here
