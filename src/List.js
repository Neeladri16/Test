import './List.css';

function List(props){
    const deleteItemFromList=(key)=>{
        const newList=props.itemList.filter(itemObj => {
            return itemObj.key != key;
        });
        props.updateItemList(newList);
    };
    return(
        <div>
          {props.itemList.map(itemObj=>{
            return(
                <div className="Item">
                <p>{itemObj.item}</p>
                <button onClick={()=>deleteItemFromList(itemObj.key)}>x</button>
                </div>
            );
            //abcd
            //wsh
          })}
        </div>
    );
}

export default List;