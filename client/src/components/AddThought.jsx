import React, {useState} from 'react'
import Axios from 'axios';

const putData = async (title, thought) =>{
    try{
        const responseServer = await Axios({
            method: 'POST',
            url: 'http://localhost:8000',
            data: {text: thought, title}
        })
        return responseServer.status
    }
    catch(err){
        console.log(err)
        return 404
    }
}



const AddThought = ({addRequest, requestCount, setMessage, message}) => {
    const [thought, setThought] = useState('')
    const [title, setTitle] = useState('')

    const handleFormSubmit = async e =>{
        e.preventDefault();
        if (thought.trim().length && title.trim().length){
            const status = await putData(title, thought)
            if (status === 200){
                setMessage('Thought Added!! 😊')
            }
            setThought('')
            setTitle('')
            addRequest(requestCount + 1)
        }
        else{
            setMessage('Title or thought cannot be empty  😣')
        }
    }


    return (
        <div className="my_jumbotron">
                {message && <h4 className="error-message text-center my-3">{message}</h4>}
                <div className="container">
                    <form method="POST" onSubmit={(e)=> handleFormSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="title" className="d-block text-center">
                                Thought Title
                            </label>
                            <input 
                                type="text" 
                                id="title"
                                value={title}
                                placeholder="Thought title here"
                                onChange = {e => setTitle(e.target.value)} 
                                className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="d-block text-center" htmlFor="thought">
                                Type your thought 
                            </label>
                            <textarea 
                                id="thought"
                                value={thought}
                                type="text" 
                                placeholder="Your thoughs here" 
                                className="form-control textarea"
                                onChange = {(e)=> setThought(e.target.value)}
                            />
                        </div>
                        <div className="form-group text-center my-2">
                            <button type="submit" className="btn btn-md btn-danger">Add Thought</button>
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default AddThought
