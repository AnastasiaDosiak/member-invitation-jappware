import React, { memo } from 'react'

export default memo(function ListCard({children}) {
    return (
        <div>
            {children}
        </div>
    )
})
