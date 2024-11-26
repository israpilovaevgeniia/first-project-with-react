import { useContext, memo } from "react";
import { UserContext } from "../../context/user-context";

// eslint-disable-next-line react/prop-types
function SelectUser () {
    const { setUserId } = useContext(UserContext);
    const onChangeUser = (e) => setUserId(Number(e.target.value));
    return (
        <div>
             <select onChange={onChangeUser} style={{width: "100%" }} name="user" id="user">
                <option value="1">Sergey</option>
                <option value="2">Alex</option>
                <option value="3">Evgeniia</option>
                <option value="4">Andrey</option>
            </select>
        </div>
    )
}

export default memo(SelectUser)