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
        console.log(this.state.col1)

    }

    changeClass = (e)=> {
        this.setState((prevState)=> {
            return{
                ...prevState,
                class: "yellow"
            }
       })
    }

    onClickColumn = (nbColumn) => {
        console.log(`click`)
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
    
    victoryCondition = () =>{
        
    }


    render() {
        console.log(this.state)
        return (
            <div className={table.divContainer} >
                <table className={table.table} >
                    <tbody className={table.tbody} >
                        <tr className={table.tr}>
                            <Button  class={this.state.col1[5]}/>
                            <Button  class={this.state.col2[5]}/>
                            <Button  class={this.state.col3[5]}/>
                            <Button  class={this.state.col4[5]}/>
                            <Button  class={this.state.col5[5]}/>
                            <Button  class={this.state.col6[5]}/>
                            <Button  class={this.state.col7[5]}/>
                        </tr>
                        <tr className={table.tr}>
                            <Button  class={this.state.col1[4]}/>
                            <Button  class={this.state.col2[4]}/>
                            <Button  class={this.state.col3[4]}/>
                            <Button  class={this.state.col4[4]}/>
                            <Button  class={this.state.col5[4]}/>
                            <Button  class={this.state.col6[4]}/>
                            <Button  class={this.state.col7[4]}/>
                        </tr>
                        <tr className={table.tr}>
                            <Button  class={this.state.col1[3]}/>
                            <Button  class={this.state.col2[3]}/>
                            <Button  class={this.state.col3[3]}/>
                            <Button  class={this.state.col4[3]}/>
                            <Button  class={this.state.col5[3]}/>
                            <Button  class={this.state.col6[3]}/>
                            <Button  class={this.state.col7[3]}/>
                        </tr>
                        <tr className={table.tr}>
                            <Button  class={this.state.col1[2]}/>
                            <Button  class={this.state.col2[2]}/>
                            <Button  class={this.state.col3[2]}/>
                            <Button  class={this.state.col4[2]}/>
                            <Button  class={this.state.col5[2]}/>
                            <Button  class={this.state.col6[2]}/>
                            <Button  class={this.state.col7[2]}/>
                        </tr>
                        <tr className={table.tr}>
                            <Button  class={this.state.col1[1]}/>
                            <Button  class={this.state.col2[1]}/>
                            <Button  class={this.state.col3[1]}/>
                            <Button  class={this.state.col4[1]}/>
                            <Button  class={this.state.col5[1]}/>
                            <Button  class={this.state.col6[1]}/>
                            <Button  class={this.state.col7[1]}/>
                        </tr>
                        <tr className={table.tr}>
                            <Button  class={this.state.col1[0]}/>
                            <Button  class={this.state.col2[0]}/>
                            <Button  class={this.state.col3[0]}/>
                            <Button  class={this.state.col4[0]}/>
                            <Button  class={this.state.col5[0]}/>
                            <Button  class={this.state.col6[0]}/>
                            <Button  class={this.state.col7[0]}/>
                        </tr>
                        <tr>
                            <td><button className={table.btnChoice} onClick={()=>this.onClickColumn("col1")}>1</button></td>
                            <td><button className={table.btnChoice} onClick={()=>this.onClickColumn("col2")}>2</button></td>
                            <td><button className={table.btnChoice} onClick={()=>this.onClickColumn("col3")}>3</button></td>
                            <td><button className={table.btnChoice} onClick={()=>this.onClickColumn("col4")}>4</button></td>
                            <td><button className={table.btnChoice} onClick={()=>this.onClickColumn("col5")}>5</button></td>
                            <td><button className={table.btnChoice} onClick={()=>this.onClickColumn('col6')}>6</button></td>
                            <td><button className={table.btnChoice} onClick={()=>this.onClickColumn("col7")}>7</button></td>   
                        </tr>
                        </tbody>
                </table>
            </div>
        )
    }
}

export default Table;
