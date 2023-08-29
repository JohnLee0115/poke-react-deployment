import React, {useState} from 'react'


const FeedbackForm = (props) => {
    const { initialComment, initialRating, onSubmitProp} = props;
    const [comment, setComment] = useState(initialComment);
    const [rating, setRating] = useState(initialRating);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({comment, rating});
        setComment("");
        setRating("");
    }

    return (
        <form onSubmit={onSubmitHandler} >
            <div>
                <div>
                    <label>Comment: </label>
                </div>
                
                <textarea cols="30" rows="10" name='comment' value={comment} onChange={(e) => {setComment(e.target.value)}} />
            </div>
            <br/>
            <div>
                <div>
                    <label>Rating: </label>
                </div>
                <input type='number' min={1} max={5} value={rating} onChange={(e) => setRating(e.target.value)} />
            </div>
            <br/>
            <br/>
            <input type="submit" />
        </form>
    )
}

export default FeedbackForm