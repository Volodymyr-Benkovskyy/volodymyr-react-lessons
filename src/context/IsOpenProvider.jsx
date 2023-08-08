import { createContext, useContext ,  useState} from "react";

   const IsOpenValueContext = createContext();
   const IsOpenMethodContext = createContext();

export const useIsOpen = () => useContext( IsOpenValueContext) 
export const useSetIsOpen = () => useContext(IsOpenMethodContext)

    // функція  провайдер для передачі значення isOpen ш методу  setIsOpen
export const IsOpenProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

   // Використовуємо IsOpenContext.Provider для передачі значення isOpen дочірнім компонентам
   return (
    <IsOpenValueContext.Provider value={isOpen}>
      <IsOpenMethodContext.Provider value={setIsOpen}>
        {children}
      </IsOpenMethodContext.Provider>
    </IsOpenValueContext.Provider>
  );
}
  

