import React from 'react';
import Header from '../Components/Header';
import { create } from 'react-test-renderer';

test('Header renders snapshot', () => {
    const header = create(<Header />);
    expect(header.toJSON()).toMatchSnapshot();
});
