import { useIsOpen, useSetIsOpen } from "../../context/IsOpenProvider";


const Header = () => {
    const isOpen = useIsOpen();
    const setIsOpen = useSetIsOpen();
    return (<header>
        <h1>header</h1>       
                         {/* переключає по умові на тру і фолс */}
            <button onClick={() => setIsOpen((prev) => !prev)}> 
          Click - {`${isOpen}`}
        </button>
    </header>)
}

export default Header;