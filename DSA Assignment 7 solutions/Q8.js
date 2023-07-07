/*
Question 8

You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Example 1:

Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

Output: true

*/

function checkStraightLine(coordinates) {
    const [[x0, y0], [x1, y1]] = coordinates, dx = x1 - x0, dy = y1 - y0;
    return coordinates.every(([x, y]) => dx * (y - y0) === dy * (x - x0));
  };

  let result = checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]);
  console.log(result);