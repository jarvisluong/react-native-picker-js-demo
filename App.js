import React, {Component} from 'react';
import {
 View,
 Text,
 TouchableOpacity
} from 'react-native';

import Picker from 'react-native-picker-js';

function createDateData(){
 let date = {};
 for(let i=1950;i<2050;i++){
   let month = {};
   for(let j = 1;j<13;j++){
     let day = [];
     if(j === 2){
       for(let k=1;k<29;k++){
         day.push(k);
       }
     }
     else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
       for(let k=1;k<32;k++){
         day.push(k);
       }
     }
     else{
       for(let k=1;k<31;k++){
         day.push(k);
       }
     }
     month[j] = day;
   }
   date[i] = month;
 }
 return date;
};

export default class DatePicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dateSelected: ''
    }
  }

  _onPressHandle(){
    this.picker.toggle();
  }

 render() {
   return (
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <TouchableOpacity style={{marginTop: 20}} onPress={this._onPressHandle.bind(this)}>
         <View style={{height: 30, width: 150, borderRadius: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', overflow: 'hidden'}}>
           <Text style={{color: '#fff'}}>Touch to choose date</Text>
          </View>
       </TouchableOpacity>
       <Text>Date selected: {this.state.dateSelected}</Text>
       <Picker
         ref={picker => this.picker = picker}
         style={{height: 320}}
         showDuration={300}
         pickerData={createDateData()}
         selectedValue={['2015', '12', '12']}
         onPickerDone={(dateSelected) => {
           this.setState({dateSelected});
         }}
       />
     </View>
   );
 }
};
