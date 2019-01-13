import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ErrorActions } from '../../store/ducks/error';

import CloseIcon from '../../assets/images/close.svg';

import { Container } from './styles';

const ErrorBox = ({ error: { visible, message }, hideError }) => visible && (
	<Container >
		<p>{message}</p>
		<button onClick={hideError} >
			<img src={CloseIcon} alt="Fechar"/>
		</button>
	</Container>
);

ErrorBox.protoTypes = {
	hideError: PropTypes.func.isRequired,
	error: PropTypes.shape({
		visible: PropTypes.bool,
		message: PropTypes.string,
	}).isRequired,
}

const mapStateToProps = ({ error }) => ({ error });

const mapDispatchToProps = dispatch => bindActionCreators(ErrorActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBox);
