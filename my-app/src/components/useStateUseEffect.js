import React, {useState, useEffect} from 'react';

function Example() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('useEffect');
        document.title = `Вы нажали ${count} раз`;
      }, [count]);

    return (
        <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми на меня
            </button>
        </div>
    );
}

export default Example;