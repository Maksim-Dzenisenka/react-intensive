import React, {useState, useCallback, useMemo, useEffect} from 'react';

function CountUseCallbackUseMemo () {
    const [count, setCount] = useState(1);
    const [colored, setColored] = useState(false);

    const styles = useMemo(() => ({
        color: colored ? 'darkred' : 'black'
    }), [colored]);

    const generateItemsFromAPI = useCallback(() => {
        return new Array(count).fill('').map((_, i) => `Элемент ${i + 1}`)
    }, [count])

    return (
        <div style={{border: '2px solid black'}}>
        <h1 style={styles}>Вычисляемое свойство: {count}</h1>
        <button onClick={() => setCount(prev => prev + 1)}>Добавить</button>
        <button onClick={() => setCount(prev => prev - 1)}>Уменьшить</button>
        <button onClick={() => setColored(prev => !prev)}>Изменить</button>

        <ItemsList getItemsCallback={generateItemsFromAPI} getItemsMemo={styles}/>
        <ItemsListMemo getItemsCallback={generateItemsFromAPI} getItemsMemo={styles}/>
        </div>
    )
}

function ItemsList({ getItemsCallback, getItemsMemo}) {
    const [items, setItems] = useState([]);

    console.log('getItemsCallback1', getItemsCallback)
    console.log('getItemsMemo1', getItemsMemo)

    useEffect(() => {
        const newItems = getItemsCallback();
        setItems(newItems);
        console.log('useEffectItemsList1')
    }, [getItemsCallback])

    return (
        <ul>
            {items.map(i => <li key={i}>{i}</li>)}
        </ul>
    )
}

const ItemsListMemo = React.memo(function MyComponent({ getItemsCallback, getItemsMemo}) {
    const [items, setItems] = useState([]);

    console.log('getItemsCallback2', getItemsCallback)
    console.log('getItemsMemo2', getItemsMemo)

    useEffect(() => {
        const newItems = getItemsCallback();
        setItems(newItems);
        console.log('useEffectItemsList2')
    }, [getItemsCallback])

    return (
        <ul>
            {items.map(i => <li key={i}>{i}</li>)}
        </ul>
    )
});

  export default CountUseCallbackUseMemo;