import React from 'react'
import table from './Table.module.css'
import Button from './Button';


class Table extends React.Component {
    constructor() {
        super();

        this.state= {
            col1: [0,0,0,0,0,0],
            col2: [0,0,0,0,0,0],
            col3: [0,0,0,0,0,0],
            col4: [0,0,0,0,0,0],
            col5: [0,0,0,0,0,0],
            col6: [0,0,0,0,0,0],
            col7: [0,0,0,0,0,0],
            player: true,   
        }
    }

    componentDidMount () {
    }

    componentDidUpdate(){
        this.columnVictoryCondition()
        this.LineVictoryCondition()
        this.leftDiagonalVictoryCondition()
        this.rightDiagonalVictoryCondition()
    }

    onClickColumn = (nbColumn) => {
        // console.log(`click`)
        for(  let i = 0; i < this.state[nbColumn].length; i++) {
            if(this.state[nbColumn][i] === 0 ) {
                const colCopy = [...this.state[nbColumn]]
                this.state.player ? (colCopy.splice(i, 1, "red")) : (colCopy.splice(i, 1, "yellow"))
                this.setState((prevState) => {
                    return {  
                        ...prevState,
                        [nbColumn]: [...colCopy],
                        player: !this.state.player
                    }   
                })
                break;
            }
        }
    }
    
    columnVictoryCondition = () => {
        for ( let i = 1;  i <= 7; i++  ) {
            let table = this.state["col" + i];
            for ( let j=0; j <= table.length; j++){
                if (table[j] === "yellow" &&  table[j+1] ===table[j] && table[j+2] === table[j] && table[j+3] === table[j]) {
                    setTimeout(() => {
                        alert("Player yellow won the game");
                    },300);
                }
                if (table[j] === "red" &&  table[j+1] ===table[j] && table[j+2] === table[j] && table[j+3] === table[j]) {
                    setTimeout(() => {
                        alert("Player red won the game");
                    },300);
                }
            }
        }
   }


    LineVictoryCondition = () => {
        for ( let i = 1;  i <= 4; i++  ) {
            for ( let j=0; j <= this.state["col" + i].length; j++){
                if (
                    this.state["col" + i][j] === "yellow" &&  
                    this.state["col" + (i+1)][j] === this.state["col" + i][j] && 
                    this.state["col" + (i+2)][j] === this.state["col" + i][j] && 
                    this.state["col" + (i+3)][j] === this.state["col" + i][j]) {
                    setTimeout(() => {
                        alert("Player yellow won the game");
                    },300);
                }
                if (
                    this.state["col" + i][j] === "red" &&  
                    this.state["col" + (i+1)][j] === this.state["col" + i][j] && 
                    this.state["col" + (i+2)][j] === this.state["col" + i][j] && 
                    this.state["col" + (i+3)][j] === this.state["col" + i][j]) {
                    setTimeout(() => {
                        alert("Player red won the game");
                    },300);
                }
            }
        }
   }

    leftDiagonalVictoryCondition = () => {
        for ( let i = 1;  i <= 4; i++  ) {
            for ( let j=0; j <= this.state["col" + i].length; j++){
                if (
                    this.state["col" + i][j] === "yellow" &&  
                    this.state["col" + (i+1)][j+1] === this.state["col" + i][j] && 
                    this.state["col" + (i+2)][j+2] === this.state["col" + i][j] && 
                    this.state["col" + (i+3)][j+3] === this.state["col" + i][j]) {
                    setTimeout(() => {
                        alert("Player yellow won the game");
                    },300);
                }
                if (
                    this.state["col" + i][j] === "red" &&  
                    this.state["col" + (i+1)][j+1] === this.state["col" + i][j] && 
                    this.state["col" + (i+2)][j+2] === this.state["col" + i][j] && 
                    this.state["col" + (i+3)][j+3] === this.state["col" + i][j]) {
                    setTimeout(() => {
                        alert("Player red won the game");
                    },300);
                }
            }
        }
    }

    rightDiagonalVictoryCondition = () => {
        for ( let i = 4;  i <= 7; i++  ) {
            for ( let j=0; j <= this.state["col" + i].length; j++){
                if (
                    this.state["col" + i][j] === "yellow" &&  
                    this.state["col" + (i-1)][j+1] === this.state["col" + i][j] && 
                    this.state["col" + (i-2)][j+2] === this.state["col" + i][j] && 
                    this.state["col" + (i-3)][j+3] === this.state["col" + i][j]) {
                    setTimeout(() => {
                        alert("Player yellow won the game");
                    },300);
                }
                if (
                    this.state["col" + i][j] === "red" &&  
                    this.state["col" + (i-1)][j+1] === this.state["col" + i][j] && 
                    this.state["col" + (i-2)][j+2] === this.state["col" + i][j] && 
                    this.state["col" + (i-3)][j+3] === this.state["col" + i][j]) {
                    setTimeout(() => {
                        alert("Player red won the game");
                    },300);
                }
            }
        }
   }


    render() {
        // console.log(this.state)
        
        return (
            <div className={table.divContainer} >
                <table className={table.table} >
                    <tbody className={table.tbody} >
                        <tr className={table.tr}>
                            <Button onClick={()=>this.onClickColumn("col1")}  class={this.state.col1[5]}/>
                            <Button onClick={()=>this.onClickColumn("col2")}  class={this.state.col2[5]}/>
                            <Button onClick={()=>this.onClickColumn("col3")}  class={this.state.col3[5]}/>
                            <Button onClick={()=>this.onClickColumn("col4")}  class={this.state.col4[5]}/>
                            <Button onClick={()=>this.onClickColumn("col5")}  class={this.state.col5[5]}/>
                            <Button onClick={()=>this.onClickColumn('col6')}  class={this.state.col6[5]}/>
                            <Button onClick={()=>this.onClickColumn("col7")}  class={this.state.col7[5]}/>
                        </tr>
                        <tr className={table.tr}>
                            <Button onClick={()=>this.onClickColumn("col1")}  class={this.state.col1[4]}/>
                            <Button onClick={()=>this.onClickColumn("col2")}  class={this.state.col2[4]}/>
                            <Button onClick={()=>this.onClickColumn("col3")}  class={this.state.col3[4]}/>
                            <Button onClick={()=>this.onClickColumn("col4")}  class={this.state.col4[4]}/>
                            <Button onClick={()=>this.onClickColumn("col5")}  class={this.state.col5[4]}/>
                            <Button onClick={()=>this.onClickColumn('col6')}  class={this.state.col6[4]}/>
                            <Button onClick={()=>this.onClickColumn("col7")}  class={this.state.col7[4]}/>
                        </tr>
                        <tr className={table.tr}>
                            <Button onClick={()=>this.onClickColumn("col1")}  class={this.state.col1[3]}/>
                            <Button onClick={()=>this.onClickColumn("col2")}  class={this.state.col2[3]}/>
                            <Button onClick={()=>this.onClickColumn("col3")}  class={this.state.col3[3]}/>
                            <Button onClick={()=>this.onClickColumn("col4")}  class={this.state.col4[3]}/>
                            <Button onClick={()=>this.onClickColumn("col5")}  class={this.state.col5[3]}/>
                            <Button onClick={()=>this.onClickColumn('col6')}  class={this.state.col6[3]}/>
                            <Button onClick={()=>this.onClickColumn("col7")}  class={this.state.col7[3]}/>
                        </tr>
                        <tr className={table.tr}>
                            <Button onClick={()=>this.onClickColumn("col1")}  class={this.state.col1[2]}/>
                            <Button onClick={()=>this.onClickColumn("col2")}  class={this.state.col2[2]}/>
                            <Button onClick={()=>this.onClickColumn("col3")}  class={this.state.col3[2]}/>
                            <Button onClick={()=>this.onClickColumn("col4")}  class={this.state.col4[2]}/>
                            <Button onClick={()=>this.onClickColumn("col5")}  class={this.state.col5[2]}/>
                            <Button onClick={()=>this.onClickColumn('col6')}  class={this.state.col6[2]}/>
                            <Button onClick={()=>this.onClickColumn("col7")}  class={this.state.col7[2]}/>
                        </tr>
                        <tr className={table.tr}>
                            <Button onClick={()=>this.onClickColumn("col1")}  class={this.state.col1[1]}/>
                            <Button onClick={()=>this.onClickColumn("col2")}  class={this.state.col2[1]}/>
                            <Button onClick={()=>this.onClickColumn("col3")}  class={this.state.col3[1]}/>
                            <Button onClick={()=>this.onClickColumn("col4")}  class={this.state.col4[1]}/>
                            <Button onClick={()=>this.onClickColumn("col5")}  class={this.state.col5[1]}/>
                            <Button onClick={()=>this.onClickColumn('col6')}  class={this.state.col6[1]}/>
                            <Button onClick={()=>this.onClickColumn("col7")}  class={this.state.col7[1]}/>
                        </tr>
                        <tr className={table.tr}>
                            <Button onClick={()=>this.onClickColumn("col1")}  class={this.state.col1[0]}/>
                            <Button onClick={()=>this.onClickColumn("col2")}  class={this.state.col2[0]}/>
                            <Button onClick={()=>this.onClickColumn("col3")}  class={this.state.col3[0]}/>
                            <Button onClick={()=>this.onClickColumn("col4")}  class={this.state.col4[0]}/>
                            <Button onClick={()=>this.onClickColumn("col5")}  class={this.state.col5[0]}/>
                            <Button onClick={()=>this.onClickColumn('col6')}  class={this.state.col6[0]}/>
                            <Button onClick={()=>this.onClickColumn("col7")}  class={this.state.col7[0]}/>
                        </tr>
                        </tbody>
                </table>
            </div>
        )
    }
}

export default Table;
