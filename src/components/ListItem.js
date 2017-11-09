import React from 'react';
import { Text } from 'react-native';
import CardSection from './common';

export default class ListItem extends React.Component {

    render(props) {
        return (
            <CardSection>
                <Text style={styles.titleStyle}>{this.props.library.title}</Text>
            </CardSection>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
       fontSize: 18,
       paddingLeft: 15
    }
  });