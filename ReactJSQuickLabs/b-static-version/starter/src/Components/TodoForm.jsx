import React, { useState } from 'react'
import DateCreated from './utils/DateCreated'
const TodoForm = () => {
  const [description, setDescription] = useState("")
  const [date, setDate] = useState(null)
  const [completed, setCompleted] = useState(false)
  return (
    <form>
        <div className="form-group">
            <label >
                Description:&nbsp;
            </label>
            <input type="text" name="todoDescription" placeholder='Todo description' className='form-control' value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <div className='form-group'>
                <label>
                    Date Created:&nbsp;
                </label>
                <DateCreated updateDateCreated={dateCreated => setDate(dateCreated)}/>
            </div>
            <div className='form-group'>
                <label >
                    Completed:&nbsp;
                </label>
                <input type = "checkbox" name = "todoCompleted" value={completed} onChange={(e) => setCompleted(e.target.checked)}/>
            </div>
            <div className='form-group'>
                <input type="submit" value="Submit" className={'btn ${!description ? "btn-danger" : "btn-primary"}'} disabled={!description}/>
            </div>
        </div>
    </form>
  )
}
export default TodoForm;

