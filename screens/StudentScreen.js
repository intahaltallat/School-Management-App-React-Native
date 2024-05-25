import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Searchbar } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../components/colors";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModalComponent from "./insertMarksModal";
const icons = [
  { id: 2, image: require("../assets/MarksSumm.png"), title: "Marks Summary" },
  { id: 3, image: require("../assets/payment.png"), title: "Fee Status" },

  { id: 1, image: require("../assets/tt.png"), title: "TimeTable" },
  { id: 4, image: require("../assets/syllabus.png"), title: "Syllabus" },

];

const StudentScreen = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = React.useState('');


  function setTxt(txt){
    setSearchQuery(txt)
  }
 
  const Stack = createNativeStackNavigator();

  const renderItem = (item) => {
    // Check if there's no search query or if the item title matches the search query
    if (!searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return (
        <View style={styles.iconsContainer}>
          <TouchableHighlight style={styles.iconContainer} key={item.id}>
            <View style={styles.iconWithText}>
              <Image source={item.image} style={styles.icon} />
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    } else {
      return null; // Render nothing if the item doesn't match the search query
    }
  };
  
  return (
    <>
    <View style={styles.main}>
      <SafeAreaView style={styles.header}>
        <View style={styles.greeting}>
          <Text style={[styles.smollTxt]}>Hello</Text>
          <Text style={[styles.greetTxt, styles.darkColor]}>Bachay</Text>
        </View>
        <View style={styles.logout}>
          <TouchableHighlight
            style={styles.logoutIcon}
            activeOpacity={0.4}
            underlayColor={colors.medium + "00"}
            onPress={() => {
              navigation.navigate("role");
            }}
          >
            <MaterialCommunityIcons name="logout" size={30} color={colors.dark} />
          </TouchableHighlight>
        </View>
      </SafeAreaView>

      {/* Search Bar */}
      <View style={styles.search}>
        <Searchbar
         style={styles.searchBar}
          mode="bar"
          placeholder="Search"
          onChangeText={setTxt}
       
        />
      </View>

      <View style={styles.options}>
        <Text style={[styles.darkColor, styles.actionsTxt]}>
          Quick Actions
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {icons.map((item) => renderItem(item))}
      </ScrollView>
    </View>
    </>

  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: 25
  },
  smollTxt: {
    color: colors.light,
    marginBottom: 5,
    fontSize: 18
  },
  greetTxt: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  darkColor: {
    color: colors.dark
  },
  logout: {
    marginTop: 18
  },
  search: {
    paddingHorizontal: 10,
  },
  searchBar: {
    backgroundColor: 'white'
  },
  actionsTxt: {
    paddingVertical: 20,
    paddingHorizontal : 25,
    fontSize: 20,
    fontWeight: 'bold',
    color : colors.dark
  },
  iconsContainer:{
    backgroundColor:'white',
    alignItems:'center',
    
    borderRadius:30,
    width:'35%',
    margin:20
  },
  iconContainer: {
    padding: 10,
  
    marginHorizontal: 25,
  },
  icon: {
    width: 100,
    height: 100,
    
    
    borderRadius: 15,
  },
  iconWithText:{
    paddingTop:15

  },
  title: {
    color: colors.dark,
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    marginTop: 10,
    paddingBottom:30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },

})

export default StudentScreen;