import React from 'react'

const UserList = props => {
    const { uses } = props;

    return (
        <div>
            {
                uses && uses.map(value => (
                    <div key = {value.id}>
                        <span>{value.fullName} `${value.id}`</span>
                        <br/>
                    </div>
                ))
            }
        </div>
      
    )
}


export default UserList
