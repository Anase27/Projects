function moveTo(start, destination) {
    let ans = findShortestPath(start,destination);
    // let st = "";
    // ans.forEach((e) => {
    //     st = `${st},[${e}]`;
    // })
	console.log(ans);
}

function findShortestPath(start, destination) {
	let possibleX = [2, 1, -2, -1, -2, -1, 2, 1];
	let possibleY = [1, 2, 1, 2, -1, -2, -1, -2];
	let startString = start.toString();
	let desString = destination.toString();
	let queue = [start, [start]];
	let visited = new Set([start.toString()]);
    // let t = [2,1].toString();
    // console.log(visited.has(t));
    // console.log(visited);
    // console.log(t);
	while (queue.length > 0) {
		let position = queue.shift();
		let path = queue.shift();

        startString = position.toString();
        if(startString === desString) return path;
		for (let i = 0; i < 8; i++) {
			let newX = position[0] + possibleX[i];
			let newY = position[1] + possibleY[i];
			if (0 <= newX && newX < 8 && 0 <= newY && newY < 8) {
				let tempPosition = [newX, newY];
				if (!visited.has(tempPosition.toString())) {
					visited.add(tempPosition.toString());
                    let tempPath = [...path];
                    tempPath.push(tempPosition);
					// path.push(tempPosition);
					queue.push(tempPosition);
					queue.push(tempPath);
				}
			}
		}
	}
    return null;
}
moveTo([0,0],[1,2]);
moveTo([0,0],[3,3]);
moveTo([3,3],[0,0]);
moveTo([0,0],[7,7]);
// moveTo();
