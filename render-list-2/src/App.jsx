import List from './list.jsx';

function App(props){

  const Fruits = [
    {id:1 , name :"apple" , calories : 90},
     { id : 2,  name : "mango", calories : 45} ,
      {id : 3,name : "banana", calories : 100} ,
       { id :4 , name : "pineapple", calories : 50}];

  const Vegetable = [
    {id:6 , name:'carrot' , calories: 30},
    { id :7,  name : 'broccoli', calories : 20} ,
    {id :8,name : 'potato', calories : 40} ,
    { id :9, name : 'cucumber', calories : 10}];

  // return(<>
  // {Fruits.length > 0 ?<List items={Fruits} category="Fruits" /> : null}
  // {Vegetable.length > 0 ? <List items={Vegetable} category="Vegetable" /> : null}
  //   </> );
    // Or you can use both be true
    return(<>
      {Fruits.length > 0 && <List items={Fruits} category="Fruits" />}
      {Vegetable.length > 0 && <List items={Vegetable} category="Vegetables" />}
        </> );
}
export default App;
