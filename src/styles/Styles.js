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
    marginBottom: 5,
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
    //borderWidth: 1,
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 5,
  },
  searchBox: {
    width: '83.3%',
    height: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F4F6F9',
    borderRadius: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  filterBox: {
    width: '16.7%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '100%',
    //borderWidth: 1,
    overflow: 'hidden',
    paddingLeft: 15,
  },
  filter: {
    height: '90%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    //borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#EBF2E6',
  },

  /** ---------------- */
  sectionTitle: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000000',
    //borderWidth: 1,
  },
  showAllButton: {fontWeight: '500', fontSize: 12, color: '#7AC143'},

  /**Homepage Event */

  eventContainer: {
    flex: 2.2,
    //borderWidth: 2,
    marginTop: 5,
    marginBottom: 5,
  },
  allEventButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  eventCoverImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 25,
    resizeMode: 'cover',
    paddingLeft: 20,
    overflow: 'hidden',
  },
  eventTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 20,
  },
  joinButton: {
    backgroundColor: '#7AC143',
    width: 125,
    height: 34,
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderRadius: 20,
  },

  /** ---------------- */
  /**Homepage trend */

  trendContainer: {
    flex: 3.8,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 10,
  },
  allTrendButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    //borderWidth: 1,
  },
  categoryList: {
    flex: 1,
  },
  trendList: {flex: 8},
  /** ---------------- */
});
export default Styles;

//Write style for all screen at here
