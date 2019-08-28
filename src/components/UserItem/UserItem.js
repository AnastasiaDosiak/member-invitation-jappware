import React, { memo } from 'react'

export default memo(function UserItem({firstName,lastName}) {
    return (
        <div>
            <p>
{firstName}
</p>
<p>
    {lastName}
    </p>
        </div>
    )
})
