import React, { Fragment } from 'react';



const InputTag = ({ ...props }) => {

    return (
        <Fragment>
            <input {...props} />
        </Fragment>
    )
}



export default InputTag;