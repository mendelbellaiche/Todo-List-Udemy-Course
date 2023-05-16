import {useState} from "react";
import Item from './Item.js';
import {v4 as uuidv4} from 'uuid'

export default function Form() {

    const [dataArr, setDataArr] = useState([
        {txt: "Walk the dog", id: uuidv4()},
        {txt: "Sport", id: uuidv4()},
        {txt: "Coding with React", id: uuidv4()},
    ]);

    const [stateInput, setStateInput] = useState('');

    const addTodo = e => {
        e.preventDefault();

        if (stateInput !== '') {
            const newArr = [...dataArr];
            const newTodo = {};
            newTodo.txt = stateInput;
            newTodo.id = uuidv4();
            newArr.push(newTodo);
            setDataArr(newArr);
            setStateInput('');
        } else {
            alert("Input empty!");
        }

    };

    const linkedInput = e => {
        setStateInput(e);
    };

    const deleteElement = id => {

        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        });
        setDataArr(filteredState);
    };

    return (
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form onSubmit={e => addTodo(e) } className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Things to do</label>
                <input
                    value={stateInput}
                    onChange={e => linkedInput(e.target.value)}
                    className="form-control"
                    type="text"
                    id="todo"/>

                <button className="mt-2 btn btn-primary d-block">Send</button>
            </form>
            <h2>List of things to do : </h2>
            <ul className="list-group">
                {dataArr.map((item, index) => {
                    return (
                        <Item
                            txt={item.txt}
                            key={item.id}
                            id={item.id}
                            delFunc={deleteElement}
                        />
                    )
                })}
            </ul>
        </div>
    )

}
