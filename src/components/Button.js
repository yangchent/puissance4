import React from 'react'
import button from './Button.module.css'

class Button extends React.Component {
    
    render() {
        return <td className={button.td} ><button onClick={this.props.onClick} className={button.btn + " " + this.props.class} max="42"/></td>
    }
}

export default Button;
