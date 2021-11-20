import React from 'react'
import {BiLoader} from 'react-icons/bi'
import './loader.scss'

export const Loader = () => {
    return (
        <div className="loader">
            <BiLoader className="miLoader"/>            
        </div>
    )
}
