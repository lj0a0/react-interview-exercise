import React from "react";
import Card from './card';
import renderer from "react-test-renderer";


test("Card snapshot ", () => {
  const component = renderer.create(
    <Card
    data={{
        id: 181360063,
        name: "reattempt",
        full_name: "wsmd/reattempt",
        description: "🤞 Give your functions another chance",
        html_url: "https://github.com/wsmd/reattempt",
        fork: false /*bool*/,
        forks_count: 11,
        watchers_count: 573,
        stargazers_count: 573,
        updated_at: "2020-02-28T22:22:14Z",
        owner: { login: "wsmd", avatar_url: "https://avatars2.githubusercontent.com/u/2100222?v=4"}
      }}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
