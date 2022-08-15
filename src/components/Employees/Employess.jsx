import { useState} from "react";
import "./Employees.scss";

const Employees = (props) => {

    const [count, setCount] = useState(0);

    const { name, role } = props.employee;

    const handleIncrement = () => {
        setCount(count + 1); 
    }

    const handleDecrement = () => {
        setCount(count - 1); 
        if(count <= 0) {
            setCount(0);
        }
    }

    return (
        <div>
            <div className="employee">
                <p className="name">{name}</p>
                <p className="role">{role}</p>
                <div className="counter">
                <p className="count">{count}</p>
                <div className="buttons">
                    <button onClick={handleDecrement} className="decrement">-</button>
                    <button onClick={handleIncrement} className="increment">+</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Employees;