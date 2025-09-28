import { useState } from "react";

interface QItemProps {
    question: string;
    answer: string;
}

export default function QItem({question, answer}: QItemProps) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (

        <div className='q-item'>
            <div className='q-container'>
                <p>{question}</p>
                <button className={isOpen ? 'collapse-button' : 'expand-button'} onClick={toggleOpen}></button>
            </div>
            {isOpen ? <p>{answer}</p> : ''}
        </div>

    );
}