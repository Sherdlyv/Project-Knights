export function knightsMove (start, target) {

    let queue= [start];

    let moves =[[2,1], [2,-1], [-2,1],[-2,-1], [1,2], [-1,-2], [1,-2], [-1,2]];

    let visited = new Set();
    visited.add(start.toString()); 
    let predecessors = {};
    

        while (queue.length > 0) {
            let current = queue.shift();

            if (current[0] === target[0] && current[1] === target[1]) {
            return reconstructPath(start, target, predecessors);
        }

        for (let move of moves) {
            let nextX = current[0] + move[0];
            let nextY = current[1] + move[1];

            
            if (nextX >= 0 && nextX <= 7 && nextY >= 0 && nextY <= 7) {
                let nextCase = [nextX, nextY];
                let caseString = nextCase.toString(); 

              
                if (!visited.has(caseString)) {
                    visited.add(caseString);
                    predecessors[caseString] = current; 
                    queue.push(nextCase); 
                }
            }
        }
            
        }
        return null;

}

function reconstructPath(start, target, predecessors) {
    let path = [];
    let current = target;

    while (current !== undefined) {
        path.push(current);
        let currentKey = current.toString();
        current = predecessors[currentKey]; 
    }

    path.reverse(); 
    return path;
}
