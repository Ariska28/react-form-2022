import React from "react";
import renderer from "react-test-renderer";
import {NewReviewForm, FormElementPicker, FormElement} from './NewReviewForm';
import {BrowserRouter as Router} from 'react-router-dom';

describe("Jest Snapshot test newReviewForm component", () => {
  it("Match to DOM Snapshot", () => {
    const domTree = renderer.create(<Router><NewReviewForm /></Router>).toJSON();
    expect(domTree).toMatchSnapshot();
  })
});

describe("Jest Snapshot test FormElementPicker component", () => {
  it("Match to DOM Snapshot", () => {
    const domTree = renderer.create(<FormElementPicker />).toJSON();
    expect(domTree).toMatchSnapshot();
  })
})

describe("Jest Snapshot test FormElement component", () => {
  it("Match to DOM Snapshot", () => {
    const domTree = renderer.create(<FormElement />).toJSON();
    expect(domTree).toMatchSnapshot();
  })
})



