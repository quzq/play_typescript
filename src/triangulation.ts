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
const points = [
  [
    300,
    725,
    450,
    700,
    475,
    800,
    500,
    875,
    550,
    850,
    500,
    950,
    425,
    875,
    425,
    975,
    350,
    950,
    325,
    825,
    275,
    900,
  ],
  [725, 700, 700, 850, 800, 925, 925, 950, 950, 825, 925, 725, 825, 875],
  [350, 1100, 325, 1225, 375, 1275, 500, 1300, 500, 1200, 500, 1100, 400, 1075],
  [600, 1100, 550, 1300, 675, 1350, 775, 1250, 675, 1175, 725, 1050],
  [1117, 1002, 1117, 1047, 1102, 1047, 1102, 1002],
  [800, 1000, 800, 1175, 925, 1275, 975, 1125, 900, 1100],
];

export default () => {
  const triangles = earcut(data);
  const cordinates = _.chunk(data, 2);
  const triangleVertexes = _.chunk(triangles, 3).map((t) => {
    return t.map((c) => ({ x: cordinates[c][0], y: cordinates[c][1] }));
  });
  console.log(triangleVertexes);
  const areas = triangleVertexes.map((v) => ({
    vertexes: v,
    crnteroid: get_polygon_centroid(v),
    area: areaOfTriangle(v),
    center: centerOfTriangle(v),
  }));
  console.log(areas);
};

type Point = {
  x: number;
  y: number;
};
const areaOfTriangle = (coordinates: Point[]): number => {
  const x1 = coordinates[0].x;
  const x2 = coordinates[1].x;
  const x3 = coordinates[2].x;
  const y1 = coordinates[0].y;
  const y2 = coordinates[1].y;
  const y3 = coordinates[2].y;
  return Math.abs((x1 - x3) * (y2 - y3) - (x2 - x3) * (y1 - y3)) / 2;
};
const centerOfTriangle = (coordinates: Point[]): Point => {
  const x1 = coordinates[0].x;
  const x2 = coordinates[1].x;
  const x3 = coordinates[2].x;
  const y1 = coordinates[0].y;
  const y2 = coordinates[1].y;
  const y3 = coordinates[2].y;
  return {
    x: Math.floor((x1 + x2 + x3) / 3),
    y: Math.floor((y1 + y2 + y3) / 3),
  };
};

const get_polygon_centroid = (pts: Point[]) => {
  const first = pts[0],
    last = pts[pts.length - 1];
  if (first.x != last.x || first.y != last.y) pts.push(first);
  const nPts = pts.length;
  let twicearea = 0,
    x = 0,
    y = 0,
    p1,
    p2,
    f;
  for (let i = 0, j = nPts - 1; i < nPts; j = i++) {
    p1 = pts[i];
    p2 = pts[j];
    f =
      (p1.y - first.y) * (p2.x - first.x) - (p2.y - first.y) * (p1.x - first.x);
    twicearea += f;
    x += (p1.x + p2.x - 2 * first.x) * f;
    y += (p1.y + p2.y - 2 * first.y) * f;
  }
  f = twicearea * 3;
  return { x: x / f + first.x, y: y / f + first.y };
};
