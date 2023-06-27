import { createContext, useState } from 'react'

interface BooksContextProps {
    count: number;
}

const BooksContext = createContext<BooksContextProps[]>([]);

const Provider: React.FC<React.ReactNode> = ({children}) => {
    const [count, setCount] = useState<number>(5);

    const valueToShare = {
        count,
        incrementCount: () => setCount(count + 1)
    }
    return (
        <BooksContext.Provider value={valueToShare}>
	        {children}
        </BooksContext.Provider>
    )
}

export { BooksContext, Provider };
