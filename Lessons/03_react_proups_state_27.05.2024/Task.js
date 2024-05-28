const root = ReactDOM.createRoot(document.getElementById('root'));

const Task = () => {
    // const isEdit = false;
    const [isEdit, setIsEdit] = React.useState(false);

    // setIsEdit(true) /*корректный способ изменения локального значения*/
    const [UpdatedTask, setUpdatedTask] = React.useState('Task 1');

    const textId = React.useRef();

    const handleClickSave = () => {
        setUpdatedTask(textId.current.value);
        setIsEdit(false);
    }

    if (isEdit) {
        return (
            <>
                <textarea ref={textId} defaultValue={UpdatedTask}></textarea >
                <button onClick={handleClickSave}>Save</button>
            </>
        )


    } else {
        return (
            <>
                <p>{UpdatedTask}</p>
                <button onClick={() => setIsEdit(true)}>Edit</button>
                <button>Delete</button>
            </>
        )
    }
}

root.render(
    <Task />
)