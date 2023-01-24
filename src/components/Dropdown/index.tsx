import React, { useState } from 'react';
import Select from '@components/Dropdown/componnent';

const targets = [
    { value: 'es3', label: 'ECMAScript 3' },
    { value: 'es5', label: 'ECMAScript 5' },
    { value: 'es2015', label: 'ECMAScript 2015' },
    { value: 'es2016', label: 'ECMAScript 2016' },
    { value: 'es2017', label: 'ECMAScript 2017' },
    { value: 'es2018', label: 'ECMAScript 2018' },
    { value: 'es2019', label: 'ECMAScript 2019' },
];
const Dropdown = () => {
    const [target, setTarget] = useState('es2019');
    return <Select options={targets} value={target} onChange={setTarget} />;
};

export default Dropdown;
