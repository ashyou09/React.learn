import Proptypes from 'prop-types';

function Student(proops){

    return (
        <div className = "student1">
            <p>Name : {proops.name}</p>
            <p>Age : {proops.age}</p>
            <p>Student :{proops.isStudent ? "Yes" : "No"}</p>
        </div>

    )
}
// if you put any sting in place of no in agae it helps to run the just giving a warning in 
// console not give error in web.
Student.propTypes = {
    name : Proptypes.string ,
    age : Proptypes.number ,
    isStudent : Proptypes.bool
}

export default Student;