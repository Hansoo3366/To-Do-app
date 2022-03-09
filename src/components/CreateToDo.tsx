import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "./atoms";

interface IForm {
    toDo: string;
}

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const {register, handleSubmit, setValue} = useForm<IForm>();
    const handleValid = ({toDo}: IForm) => {
        console.log("add to do", toDo);
        //setToDos(oldToDos => [oldToDos]); 이렇게 하면 배열 안에 배열을 넣게 됨
        setToDos(oldToDos => [{text:toDo, id: Date.now(), category:"TO_DO"},...oldToDos]); // ...붙이면 배열 안의 요소를 반환
        setValue("toDo", "");
    }
    return (            
        <form onSubmit={handleSubmit(handleValid)}>
            <input {...register("toDo", {required: "Please write a To Do",})} placeholder="Write a to do" />
            <button>Add</button>
        </form>
    );
}

export default CreateToDo;