

function List(){
    // const fruits = ["apple" , "mango" , "banana" , "pineapple"] ; // list now goint to convert it in to object
    const fruits = [
        {id:1 , name :"apple" , calories : 90},
         { id : 2,  name : "mango", calories : 45} ,
          {id : 3,name : "banana", calories : 100} ,
           { id :4 , name : "pineapple", calories : 50}];

    // fruits.sort((a,b)=> a.name.localeCompare(b.name)); // this can sort the list in alphabetical order to there name .
    // fruits.sort((b,a)=> a.name.localeCompare(b.name)); // this can sort the list in reverse alphabetical order to there name .
    // fruits.sort((a,b)=> a.calories - b.calories); // this can sort the list in calories in numerical order Aescending


    // const highcalories = fruits.filter(fruit => fruit.calories > 50) ;
    // const fruitsList = highcalories.map(highcalories => <li key = {highcalories.id}>
    //     {highcalories.name}:&nbsp;
    //     <b>{highcalories.calories}</b>
    //     </li>);    

    const fruitsList = fruits.map(fruit => <li key = {fruit.id}>
                                                {fruit.name}:&nbsp;
                                                <b>{fruit.calories}</b>
                                                </li>);// nbsp :- none breking space 

    return(<ol>{fruitsList}</ol>);
}

export default List;