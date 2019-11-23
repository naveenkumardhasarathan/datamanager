import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Dbservers from '../components/dbserver';

const basenew = () => {
    return (
        <div>
            <div>base new</div>
            <Dbservers />
        </div>
    );
}

export default basenew;