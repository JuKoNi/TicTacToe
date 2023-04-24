import { Grid, border } from "@chakra-ui/react";

function Board() {

    const handleCellClick = (row: number, col: number) => {
        console.log(`Cell clicked: (${row}, ${col})`);
    };

    return (
        <Grid
            templateColumns="repeat(3, 1fr)"
            gap={2}
            sx={{
                backgroundColor: "gray.200",
                borderRadius: "md",
                boxShadow: "md",
                fontSize: "2xl",
                fontWeight: "bold",
                padding: "4",
                border: "1px solid black"
            }}
        >
            <div onClick={() => handleCellClick(0, 0)} style={{border: "1px solid black"}}>Cell 1</div>
            <div onClick={() => handleCellClick(0, 1)}>Cell 2</div>
            <div onClick={() => handleCellClick(0, 2)}>Cell 3</div>
            <div onClick={() => handleCellClick(1, 0)}>Cell 4</div>
            <div onClick={() => handleCellClick(1, 1)}>Cell 5</div>
            <div onClick={() => handleCellClick(1, 2)}>Cell 6</div>
            <div onClick={() => handleCellClick(2, 0)}>Cell 7</div>
            <div onClick={() => handleCellClick(2, 1)}>Cell 8</div>
            <div onClick={() => handleCellClick(2, 2)}>Cell 9</div>
        </Grid>
    );
}

export default Board