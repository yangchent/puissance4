import React from 'react'
import button from './Button.module.css'

class Button extends React.Component {
    render() {
        return <td className={button.td} ><button className={button.btn} /></td>

    }
}

export default Button;
