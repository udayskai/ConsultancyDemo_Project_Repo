import React, { Fragment } from 'react'

export default function Li({ name }) {
    return (
        <Fragment>
            <li>
                <a href=" ">
                    {name}
                </a>
            </li>
        </Fragment>
    )
}
