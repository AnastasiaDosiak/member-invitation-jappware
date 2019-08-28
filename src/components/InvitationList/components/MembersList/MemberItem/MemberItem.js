import React, { memo } from 'react'

export default memo(function MemberItem({firstName, lastName}) {
    return (
        <div>
            {firstName}
            {lastName}
        </div>
    )
})
