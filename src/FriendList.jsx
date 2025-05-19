import React, { useState } from 'react'

function FriendList() {
    const [friends, setFriends] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [student, setStudent] = useState("");
    const [university, setUniversity] = useState("");
    const [programme, setProgramme] = useState("");
    const [gpa, setGpa] = useState("");

    function addFriend(){
        const newFriend = {
            name: name,
            age: age,
            student: student,
            university: university,
            programme: programme,
            gpa: gpa
        }
        setFriends([...friends, newFriend]);

        setName("");
        setAge("");
        setStudent(""); 
        setUniversity("");
        setProgramme("");
        setGpa("");

    }

    function removeFriend(index){
        setFriends(friends.filter((_, i) => i !== index));
    }

    function updateName(event){
        setName(event.target.value);

    }

    function updateAge(event){
        setAge(event.target.value);

    }

    function updateStudent(event){
        setStudent(event.target.value);

    };

    function updateUniversity(event){
        setUniversity(event.target.value);

    }

    function updateProgramme(event){
        setProgramme(event.target.value);

    }

    function updateGpa(event){
        setGpa(event.target.value);

    }
    





  return (
    <div className='friends-container'>
        <h1>Friend List</h1>
        <ul>
            {friends.map((friend, index) => 
            <li key={index} onClick={() => removeFriend(index)}>
                {friend.name} {friend.age} {friend.student} {friend.university} {friend.programme} {friend.gpa}
            </li>)}
        </ul>
        <input type="text" value={name} onChange={updateName} placeholder='Enter  name: ' /><br />
        <input type="text" value={age} onChange={updateAge} placeholder='Enter age: ' /><br />
        <input type="text" value={student} onChange={updateStudent} placeholder='Enter if student: '/><br />
        <input type="text" value={university} onChange={updateUniversity} placeholder='Enter university: ' /><br />
        <input type="text" value={programme} onChange={updateProgramme} placeholder='Enter programme: ' /><br />
        <input type="text" value={gpa} onChange={updateGpa} placeholder='Enter GPA: ' /><br />
        <button onClick={addFriend}>Add</button>
    </div>
  )
}

export default FriendList