import earcut from "earcut";

import * as _ from "lodash";
const data = [
  0,
  80,
  100,
  0,
  190,
  85,
  270,
  35,
  345,
  140,
  255,
  130,
  215,
  210,
  140,
  70,
  45,
  95,
  50,
  185,
];

export default () => {
  const triangles = earcut(data);
  const cordinates = _.chunk(data, 2);
  const triangleVertexes = _.chunk(triangles, 3).map((t) => {
    return t.map((c) => ({ x: cordinates[c][0], y: cordinates[c][1] }));
  });
  console.log(triangleVertexes);
};
