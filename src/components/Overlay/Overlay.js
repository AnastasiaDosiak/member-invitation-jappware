import React, { memo } from 'react'
import '../../App.css'
export default memo(function Overlay({show}) {
    return show && (
        <div className="overlay">
            
        </div>
    ) 
})
