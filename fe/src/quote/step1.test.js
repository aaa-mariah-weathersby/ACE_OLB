import Enzyme, { shallow, render, mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import Step1 from './step1';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

describe('Contact Information Test Form', () => {
    let wrapper;
    // var store;

    // beforeEach( () => {
    //     const props = {
    //         fields: {
	// 			firstName: {
	// 				value: ''
	// 				// touched: touched,
	// 				// error: error
	// 			}
	// 		},
    //      }
        
    //     ;
    //     // store = createStore(combineReducers({ form :  formReducer }));
    //     wrapper = shallow(
    //         <Step1 { ...props }/>
    //         // <Provider store={store}><Step1 { ...props }/></Provider>
    //     );
    //     console.log('wrapper ' +JSON.stringify(wrapper));
    // });

    it('contains all the form elements with name property for json object onSubmit', () => {
        //expect(wrapper.find('input[placeholder="First Name"]').prop('name')).toEqual('firstName');
        // expect(wrapper.find('input[placeholder="Last Name"]').prop('name')).toEqual('lastName');
        // expect(wrapper.find('input[placeholder="Address"]').prop('name')).toEqual('address');

        // expect(wrapper.find('input[type="select"]').prop('name')).toEqual('phoneType');
        // expect(wrapper.find('input[placeholder="000-000-0000"]').prop('name')).toEqual('phone');
        // expect(wrapper.find('input[placeholder="email"]').prop('name')).toEqual('email');
    });
})