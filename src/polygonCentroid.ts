import _ from 'lodash'

export default () => {
  type TPoint = {
    x: number;
    y: number;
  }

  const getPolygonCentroid = (_pts: TPoint[]) => {
    const pts = _.cloneDeep(_pts)
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
      f = (p1.y - first.y) * (p2.x - first.x) - (p2.y - first.y) * (p1.x - first.x);
      twicearea += f;
      x += (p1.x + p2.x - 2 * first.x) * f;
      y += (p1.y + p2.y - 2 * first.y) * f;
    }
    f = twicearea * 3;
    return { x: x / f + first.x, y: y / f + first.y };
  };

  const getPolygonCentroid2 = (_pts: TPoint[]) => {
    const first = _.first(_pts)
    const last = _.last(_pts)
    if (!first || !last) return null
    const pts = (first.x != last.x || first.y != last.y) ? [..._pts, first] : _pts

    const nPts = pts.length;
    let twicearea = 0, x = 0, y = 0
    for (let i = 0, j = nPts - 1; i < nPts; j = i++) {
      const p1 = pts[i];
      const p2 = pts[j];
      const f = (p1.y - first.y) * (p2.x - first.x) - (p2.y - first.y) * (p1.x - first.x);
      twicearea += f;
      x += (p1.x + p2.x - 2 * first.x) * f;
      y += (p1.y + p2.y - 2 * first.y) * f;
    }
    const f = twicearea * 3;
    return { x: x / f + first.x, y: y / f + first.y };
  };

  const sample: TPoint[] = [
    { x: 12, y: 12 },
    { x: 129, y: 112 },
    { x: 23, y: 62 },
    { x: 23, y: 72 },
    { x: 3, y: 62 },
  ]
  console.log(getPolygonCentroid(sample))
  console.log(getPolygonCentroid2(sample))
}

