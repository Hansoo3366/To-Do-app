import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector, toDoState } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

/*function ToDoList() {
    const [toDo, setToDo] = useState("");
    const [toDoError, setToDoError] = useState("")
    const onChange = (event:React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: {value},
        } = event;
        setToDo(value);
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(toDo.length < 10) {
            return setToDoError("To do should be longer");
        }
        console.log("submit");
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} placeholder="Write a to do" />
                <button>Add</button>
                {toDoError !== "" ? toDoError : null};
            </form>
        </div>
    );
}*/










function ToDoList() {
    //const toDos = useRecoilValue(toDoState); // 아래 두 코드를 합친 것
    /*const toDos = useRecoilValue(toDoState); //atom value 불러오기
    const setToDos = useSetRecoilState(toDoState); //atom value 설정*/

    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState)
    const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value);
    }
  
    /*
    const onValid = (data: IForm) => {
        if(data.Password !== data.Password1) {
            setError("Password1", {message: "Password are not the same"}, {shouldFocus: true})
        }
        setError("extraError", {message: "Server offline"})
    };
    console.log(errors);*/
    return(
        <div>
            <h1>To Dos</h1>
            <hr/>
            <select value={category} onInput={onInput}>
                <option value="TO_DO">To Do</option>
                <option value="DOING">Doing</option>
                <option value="DONE">Done</option>
            </select>
            <CreateToDo />  
            {toDos?.map(toDo => <ToDo key={toDo.id} {...toDo}/>)}
        </div>
    );
}

export default ToDoList;