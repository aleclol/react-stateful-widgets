import React from 'react'

const toDoListItems = ['Feed the chickens', 'Unload the hay', 'Pick up cow patties'];


export default function Todo() {

return (

<div className='container'>
    <h2>To-Do List</h2>
    <div>
        <ul>
            {
                toDoListItems.map((item, index) => 
                    <li key={index}>Item {index+1}: {item}</li>
                )
            }
        </ul>
    </div>
</div>

)

}