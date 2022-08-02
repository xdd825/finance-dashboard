import { MdAddCircleOutline, MdOutlineColorLens, MdOutlineSettings } from 'react-icons/md';

function ToolBar() {
    return (
        <div className="tool-bar">
            <button>
                <MdAddCircleOutline size={40} />
            </button>
            <button>
                <MdOutlineColorLens size={40} />  
            </button>
            <button>
                <MdOutlineSettings size={40} />   
            </button>
        </div>
    )
}

export default ToolBar;