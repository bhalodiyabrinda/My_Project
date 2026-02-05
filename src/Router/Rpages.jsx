import React from 'react'
import Attributes from '../pages/Attributes'
import Conditions from '../pages/Conditions'
import Events from '../pages/Events'
import Car from '../pages/Expressions'
import Lists from '../pages/Lists'

const RPages = () => {
    return (
        <>
            <Car/>
            <Attributes/>
            <Conditions />
            <Events />
            <Lists />
        </>
    )
}

export default RPages
