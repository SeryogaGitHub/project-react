import React, {useState, useEffect} from 'react';

const ProfileStatusWithHook = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setSatus] = useState(props.status);
  let {updateStatus} = props;

  let activateEditMode = () => {
    setEditMode(true);
  };

  let deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(status);
  };

  let onStatusChange = (e) => {
    setSatus(e.currentTarget.value);
  };

  useEffect(() => {
    setSatus(props.status);
  }, [props.status]);

  return (
    <div>
      {!editMode &&
      <div onClick={activateEditMode} className='status-info' title={"Редагувати"}>
        {status || "Немає статуса"}
      </div>
      }

      {editMode &&
      <div className='status-info'>
        <input autoFocus
               onChange={onStatusChange}
               onBlur={deactivateEditMode}
               value={status}/>
      </div>
      }
    </div>
  )
}

export default ProfileStatusWithHook;
