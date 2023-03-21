function robotFinalPosition(moves, xaxis, yaxis, gridLength, gridWidth) {
    let [newX, newY] = [xaxis, yaxis];

    moves.forEach((move) => {
        switch (move) {
            case "W":
                newY = yaxis > 0 ? yaxis - 1 : yaxis;
                break;
            case "E":
                newY = yaxis <= gridWidth - 2 ? yaxis + 1 : yaxis;
                break;
            case "N":
                newX = xaxis > 0 ? xaxis - 1 : xaxis;
                break;
            case "S":
                newX = xaxis <= gridLength - 2 ? xaxis + 1 : xaxis;
                break;
            default:
                break;
        }
        if (newX === xaxis && newY === yaxis) {
            console.log(`Moving out of grid Hence Skipping`);
        } else {
            xaxis = newX;
            yaxis = newY;
        }
    });

    console.log("Final Position: (" + xaxis + ", " + yaxis + ")");
}


export { robotFinalPosition }