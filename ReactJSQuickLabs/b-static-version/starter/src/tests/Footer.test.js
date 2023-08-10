import React from "react";
import { create } from "react-test-renderer";
import Footer from "../Components/Footer";

test('Footer renders snapshot', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
});