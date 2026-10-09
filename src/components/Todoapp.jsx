import React, { useState } from 'react'

const Todoapp = () => {
    const [activity, setActivity] = useState({
        title: "",
        description: "",
        priority: "",
        dueDate: "",
    })

    const [editIndex, setEditIndex] = useState(null);
    const [list, setList] = useState([]);
    function handleInputChange(e) {

        const { name, value } = e.target;
        setActivity((prev) => ({ ...prev, [name]: value }))
    }

    const handleData = () => {
    if (!activity.title.trim()) {
      alert("Please enter a title");
      return;
    }
 
    if (editIndex !== null) {
      const updatedList = [...list];
      updatedList[editIndex] = { ...activity };
      setList(updatedList);
      resetForm();
    } else {
 
      setList([...list, { ...activity }]);
      resetForm();
    }
  };
 
 
  const handleEdit = (index) => {
    setActivity(list[index]);
    setEditIndex(index);
  };
 
 
  const handleRemove = (index) => {
    const filteredList = list.filter((_, id) => id !== index);
    setList(filteredList);
  };
 

  const resetForm = () => {
    setActivity({
      title: "",
      description: "",
      priority: "",
      dueDate: "",
    });
    setEditIndex(null);
  };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h4 className="mt-3" style={{ color: "orange", fontFamily: "cursive" }}>
            My Updated List :
</h4>
          {list.length === 0 ? (
<p>No todos yet. Add one!</p>
          ) : (
            list.map((item, i) => (
<div key={i} className="card mb-2 p-2">
<h5>
<strong>{item.title}</strong>
</h5>
<p>
<em>Description:</em> {item.description}
</p>
<p>
<em>Priority:</em> {item.priority}
</p>
<p>
<em>Due Date:</em> {item.dueDate}
</p>
<div>
<button onClick={() => handleEdit(i)} className="btn btn-primary btn-sm">
                    Edit
</button>
<button onClick={() => handleRemove(i)} className="btn btn-danger btn-sm ms-2">
                    Delete
</button>
</div>
</div>
            ))
          )}
                </div>
                <div className="col-md-4">
                    <p id='todoheading'> My Todo Application </p>


                    <input type="text"
                        name="title"
                        className="form-control mt-3"
                        placeholder="title *"
                        value={activity.title}
                        onChange={handleInputChange}
                        required
                    />

                    <textarea
                        name="description"
                        className="form-control mt-2"
                        placeholder="description"
                        rows="2"
                        value={activity.description}
                        onChange={handleInputChange}
                    />

                    <select
                        name="priority"
                        className="form-control mt-2"
                        value={activity.priority}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>

                    </select>

                    <input
                        type="date"
                        name="duedate"
                        className="form-control mt-2"
                        value={activity.dueDate}
                        onChange={handleInputChange}
                    />

                    <button className="form-control mt-3" id="todobutton" onClick={handleData}>
                        {editIndex !== null ? "Update List" : "Create List"}

                    </button>

                </div>
            </div>
        </div>

    )
}

export default Todoapp