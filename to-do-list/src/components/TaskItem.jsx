import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

const TaskItem = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task.text);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    const handleEdit = () => {
        if (isEditing && editedTask.trim() !== '') {
            dispatch(editTask(task.id, { ...task, text: editedTask }));
        }
        setIsEditing(!isEditing);
    };

    return (
        <div>
            {isEditing ? (
                <input
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                />
            ) : (
                <span>{task.text}</span>
            )}
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TaskItem;
