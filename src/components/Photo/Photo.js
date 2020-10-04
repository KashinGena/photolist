import React from 'react'

const Photo = (props) => {
    return (
        <div>
            <img alt="alt" src={props.url}/>
        </div>
    )
}


export default Photo