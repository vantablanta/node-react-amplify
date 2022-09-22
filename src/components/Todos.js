import React, { useState, useEffect } from "react"
import { API } from "aws-amplify"
import { v4 as uuidv4 } from 'uuid';


const apiName = "todoApi"
const path = "/todos"

export default function Todos() {
    const [todos, setTodos] = useState()
    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const id = uuidv4()

    function getTodos() {
        API
            .get(apiName, path)
            .then(res => {
                setTodos(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    function addTodos(data) {
        API
            .post(apiName, path, {
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(result => {
                JSON.parse(result.body)
            })
            .catch(err => {
                console.log(err);
            })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const response = addTodos({
            id,
            title,
            body,
            completed: false

        });
    }

    function markCompleted() {
        console.log("Completed")
    }

    useEffect(() => {
        getTodos()
    }, [])




    return (
        <div className="container mt-5 pt-2">
            <section className="mb-5">
                <button className="btn btn-lg banner-btn float-end" data-bs-toggle="modal" data-bs-target="#exampleModal"> Add Todo</button>
            </section>


            <section className=" container mt-5 row">
                {
                    todos &&
                    todos.length > 0 &&
                    todos.map(todo => {
                        return (
                            <div className="card col-md-3 m-2" style={{ "width": "20rem" }} key={todo.id}>
                                <div className="card-body">
                                    <h5 className="card-title">{todo.title}</h5>
                                    {(
                                        () => {
                                            if (todo.completed) {
                                                return (
                                                    <h6 className="card-subtitle mb-2 text-success"><small>Completed</small></h6>
                                                )
                                            }
                                            else {
                                                return (
                                                    <p className="text-muted completed" onClick={markCompleted}><small>Mark Completed</small></p>
                                                )
                                            }
                                        }
                                    )()}
                                    <p className="card-text">{todo.body}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </section>


            {/* ADD TODO MODAL  */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add New Todo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" id="title" className="form-control" name="title" onChange={e => setTitle(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="body" className="form-label">Body</label>
                                    <textarea type="text" className="form-control" name="body" id="body" onChange={e => setBody(e.target.value)}></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )

}