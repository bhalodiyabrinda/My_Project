import React from 'react'
import ChildComp from '../Components/child-comp'
import Garage from '../Components/CoGarage'
import ParentComp from '../Components/parent-comp'
import ClassPropsComp from '../Components/Class-props-comp'
import PropsConstructor from '../Components/Props_Constructor'
import Component2 from '../Components/Comp2'
import Component from '../Components/Component'

const RComponents = () => {
    return (
        <>
            <Component/>
            <Garage />
            <ParentComp>
                <ChildComp/>
            </ParentComp>
            <ClassPropsComp />
            <PropsConstructor />
            <Component2/>
        </>    
    )
}

export default RComponents