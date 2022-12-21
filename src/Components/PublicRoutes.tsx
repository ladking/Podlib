import React from 'react'
import {Navigate} from 'react-router-dom'

function PublicRoutes(props: any) {
    if(!localStorage.getItem('podlib')){
        return <Navigate to='/' />
    }else{
         return props.children
    }
 
}

export default PublicRoutes