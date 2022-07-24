import React, { Component } from "react"; 
import { View, Text, FlatList, StyleSheet, Alert, SafeAreaView } from "react-native"; import { ListItem } from "react-native-elements"; 
import axios from "axios";

export default class Homescreen extends Component{
    constructor(){
        super()
        this.state={
            listdata=[],
            url:"http://localhost:5000/"
        }
        }
        componentDidMount(){
            this.getplanets()
    }

    getplanets=()=>{
        const {url}=this.state()
        axios.get(url).then(response=>{
            return this.setState({
                listdata:response.data.data
            })
        }).catch(error=>{
            Alert.alert(error.message)
        })
    }

    renderitem=({item,index})=>(
        <ListItem
        key={index} 
        title={`Planet : ${item.name}`}
        subtitle={`Distance from Earth: ${item.distance_from_earth}`}
        titleStyle={styles.title}
        containerStyle={styles.listContaines}
        bottomDivider
        chevron
        onPress={()=>{
            this.props.navigation.navigate("Details" , {planet_name : item.name})
        }} 
        />
    );

    keyExtractor=(item,index)=>{index.toString()}

    render(){
        const {listdata} = this.state

        if (listdata.length === 0){
            return(
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyContainerText}>Loading...</Text>
                </View>
            )    
        }

        return(
            <View style={styles.container}>
              <SafeAreaView/>
              <View style={styles.upperContainer}>
                <Text style={styles.headerText}>Planets World</Text>
              </View>
              <View style={styles.lowerContainer}>
                <FlatList 
                keyExtractor={this.keyExtractor}
                data={this.state.listdata}
                renderItem={this.renderitem}
                />
              </View>
            </View>
        )
    }
}

import React, { Component } from "react"; import { View, Text, FlatList, StyleSheet, Alert, SafeAreaView } from "react-native"; import { ListItem } from "react-native-elements"; import axios from "axios";
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: "#edc988" }, upperContainer: { flex: 0.1, justifyContent: "center", alignItems: "center" }, headerText: { fontSize: 30, fontWeight: "bold", color: "#132743" }, lowerContainer: { flex: 0.9 }, emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center" }, emptyContainerText: { fontSize: 20 }, title: { fontSize: 18, fontWeight: "bold", color: "#d7385e" }, listContainer: { backgroundColor: "#eeecda" } });