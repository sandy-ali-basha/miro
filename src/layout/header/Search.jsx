import { InputGroup, Input, InputGroupText } from "reactstrap"
// icon
import Icon from "../../asset/images/icon/searsh.svg"
const Search = () => {
    return (<div className="search bg-light">
        <InputGroup className="border-0 " >
            <Input className="border-0 px-4" placeholder="Search what you need" />
            <InputGroupText className="bg-white py-3 px-3 border-0">
                <img className="w-100" src={Icon} />
            </InputGroupText>
        </InputGroup>
    </div>)
}

export default Search;