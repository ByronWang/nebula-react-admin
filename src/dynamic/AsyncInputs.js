import {forEach} from 'lodash';

const cachedInputs = {}

import('react-admin/lib').then(function(inputs){
    forEach(inputs,function(value,key){cachedInputs[key]=value});
});

const AsyncInputs = function(name){
    return cachedInputs[name];
}

export default cachedInputs;