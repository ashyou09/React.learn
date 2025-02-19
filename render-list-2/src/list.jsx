import PropTypes from 'prop-types' ;

function List(props){  
    const category = props.category ; 
    
    const itemList = props.items ;

    const listitem = itemList.map(itemList => <li key = {itemList.id}>
                                                {itemList.name}:&nbsp;
                                                <b>{itemList.calories}</b>
                                                </li>);// nbsp :- none breking space 

    return(
    <>
    <h3 className = "list-category">{category}</h3>
    <ol className = "list-item">{listitem}</ol>
    </>
    );
}
List.proptypes = { 
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({id : PropTypes.number,
                                             name : PropTypes.string,
                                            calories : PropTypes.number}))
    }

List.DefualtProps = {
    category : "Category",
    items : []
}

export default List;