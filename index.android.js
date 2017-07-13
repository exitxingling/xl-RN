import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class AwesomeProject extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

// 注意，这里用引号括起来的'AwesomeProject'必须和你init创建的项目名一致
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);