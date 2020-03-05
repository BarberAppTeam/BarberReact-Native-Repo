import React, { Component } from 'react';
        import {
          AppRegistry,
          StyleSheet,
          Text,
          View,
          Navigator,
          TouchableOpacity,
          Image,
          TouchableHighlight,
          Alert,
          TextInput
        } from 'react-native';
        import Button from 'react-native-button'
        import {Actions} from 'react-native-router-flux'
        import Home from './Home'

        export class Temp extends Component{
        constructor(props) {
          super(props);
        this.state = {
            data: '',
            data1:'',
            textinput:'',
            entryDate:[]

          }
           state={
                    shouldShow: false
                }
        }

            componentDidMount(){
            this._onPressButtonGET();
          } 

              _onPressButtonPOST(){
                fetch(URL, {
                    method: "POST",  
                     headers: { 
                         'Accept': 'application/json',
                         'Content-Type': 'application/json',
                     },
                    body: JSON.stringify({
                        "entryDate":"3/2/2017 2:00 AM", 
                        "systol": this.state.textinput,
                        "mobileType":"ANDROID",
                        "userName":"menutest",

                       })})
                .then((response) => response.json())
                .then((responseData) => {
                    Alert.alert(                              
                        "Blood pressure data",
                        "Blood pressure data - " + JSON.stringify(responseData)
                    )
                }).catch((error) => {
                    Alert.alert('problem while adding data');
                })
                .done(); 
            }

            _onPressButtonGET(){
                fetch(url, {
                    method: "POST",
                     headers: {
                         'Accept': 'application/json',
                         'Content-Type': 'application/json',
                     },
                    body: JSON.stringify({"mobileType":"ANDROID","userName":"menutest"})})
                .then((response) => response.json())
                .then((responseData) => {


                        this.setState({ data : JSON.stringify(responseData) })
data["list"].map(d => this.state.entryDate.push(d.entryDate));



                        this.setState({ entryDate: jsonResponse.entryDate, systol: responseData.systol })


                    }).catch((error) => {
                    Alert.alert('problem while getting data');
                })
               .done();
            }
            render(){
                return(

                    <View>
                        <TouchableHighlight onPress={this._onPressButtonPOST.bind(this)}>
                            <Text>Add</Text> 
                        </TouchableHighlight>

                    <TouchableOpacity style= {{left:300,top:-20, }}
         onPress={()=>{ this.setState({ shouldShow: !this.state.shouldShow })}}
        ><Text>Edit</Text></TouchableOpacity>

        {this.state.shouldShow ? <TextInput placeholder='systol' 
                    onChangeText={(text) => this.setState({textinput: text})}
                   /> : null}

                         <TouchableHighlight onPress={this._onPressButtonGET.bind(this)}>
                            <Text>show</Text>
                           </TouchableHighlight>
this.state.entryDate.map( d => (<Text>{d}</Text>));
                           <Text>{this.state.entryDate}</Text> //not displaying anythong
                       <Text>{this.state.data && JSON.parse(this.state.data)['entryDate']}</Text> //not displaying anything
                        <Text>hello{this.state.data}</Text> //printing all data 
                    </View>
            );
            }
        }


        module.exports = Temp;