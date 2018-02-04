import "react-native";
import React from "react";
import { MonoText } from "../../src/component/StyledText";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});
