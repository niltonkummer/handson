/* Core */
import React, { Component } from 'react';

/* Presentational */
import { Text, TouchableNativeFeedback, View, StyleSheet, Image, Platform } from 'react-native';

import { fonts, colors } from '../styles/metrics';

// const Button = ({ style, children, size, color, onPress, icon='' }) => {
export default class Button extends Component {
	
	constructor(props) {
		super(props);		
		state = {};
	}

	renderIconOnButton() {
		if (this.props.icon != '')
			return (<Image source={ this.props.icon } />);
		return null;
	}

	render() {
		const { 
			children,
			size,			
			color,
			txtStyle,
			onPress,
			icon,
			style,
			disabled } = this.props;
		
		const buttonStyles = [styles.generalButton, styles.button];
		const textStyles = [styles.text];
		if (size) {			
			textStyles.push(styles[`text-${size}`]);
		}
		if (style) buttonStyles.push(style);
		
		if (txtStyle) textStyles.push(txtStyle);
		if (color) {
			if (Platform.OS === 'ios') {
				textStyles.push({color: color});
			} else {
				buttonStyles.push({backgroundColor: color});
			}
			}

		if (disabled) {
			buttonStyles.push(styles.buttonDisabled);
			textStyles.push(styles.textDisabled);			
		}
			
		const formattedTitle =
			Platform.OS === 'android' ? children.toUpperCase() : children;
			const Touchable =
				Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

		return(	
			<Touchable 
				disabled={disabled}
				onPress={onPress}>
				<View style={ buttonStyles }>
					{ this.renderIconOnButton() }
					<Text style={ textStyles } disabled={disabled}>
						{ formattedTitle }
					</Text>
				</View>
			</Touchable>
		)
	}
}

const styles = StyleSheet.create({
	generalButton: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	button: Platform.select({
		ios: {},
		android: {		
		elevation: 4,		
		backgroundColor: colors.primary,
		borderRadius: 2,		
		},
	}),
	text: Platform.select({
		ios: {		
		color: '#007AFF',
		textAlign: 'center',
		padding: 10,
		fontSize: 18,
		},
		android: {
		color: 'white',
		textAlign: 'center',
		padding: 10,
		fontWeight: '500',
		},
	}),
	buttonDisabled: Platform.select({
		ios: {},
		android: {
		elevation: 0,
		backgroundColor: '#dfdfdf',
		},
	}),
	textDisabled: Platform.select({
		ios: {
		color: '#cdcdcd',
		},
		android: {
		color: '#a1a1a1',
		},
	}),
	'text-smaller': {
		fontSize: fonts.smaller,
		padding: 6,
	},
	'text-small': {
		fontSize: fonts.small,
		padding: 7,
	},	
	'text-big': {
		fontSize: fonts.big,
		padding: 10,
	},
	'text-bigger': {
		fontSize: fonts.bigger,
		padding: 0,
	}
	});