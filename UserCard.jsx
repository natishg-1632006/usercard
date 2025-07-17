let userdata=[
  {
    name:"Natish",
    city:"Namakkal",
    disc:"FrontEnd Developer",
    skills:["UI/UX","JS","HTML","CSS","REACT","NODE","JAVA"],
    profile:"2.png",
    online:true,
    info:false,
},
{
    name:"Ramu",
    city:"Salam",
    disc:"BackEnd Developer",
    skills:["UI/UX","JS","HTML","CSS","REACT","NODE","JAVA","EXPRESS"],
    profile:"1.png",
    online:false,
    info:false,
},
{
    name:"Raja",
    city:"Erode",
    disc:"JAVA DEVELOPER",
    skills:["UI/UX","HTML","CSS","JAVA","SQL","WORDPRESS"],
    profile:"4.jpg",
    online:true,
    info:true,
},

];

function User(props){
  return(
    <div className="container">
   <span className={props.online?"Live online":"Live offline"} >{props.online?"ONLINE":"OFFLINE"}</span>
   <img src={props.profile} className={props.online?"img onlineprofile":"img offlineprofile"}></img>
   <h3>{props.name}</h3>
   <h3>{props.city}</h3>
   <p>{props.disc}</p>
   <div className='buttons'>
    <button className='primary'>Message</button>
    <button className={props.info?"primary outline ":"primary outline follow"} >{props.info?"Following":"Follow"}</button>
</div>
<div className='skills'>
  <h6>skills</h6>
    <ul>
       {props.skills.map((skill,index)=>(
        <li key={index}>{skill}</li>
       ))} 
    </ul>
    </div>
    </div>
  )
}

function UserCard() {
  return (
   <>
     {userdata.map((user,index)=>(
      <User key={index} 
      name={user.name}
      city={user.city}
      disc={user.disc}
      skills={user.skills}
      profile={user.profile}
      online={user.online}
      info={user.info}
      />

    ))}


   {/* <User name="Natish" city="Namakkal" disc="Front-End Developer" 
   skills={["UI/UX","JS","HTML","CSS","REACT","NODE","JAVA"]} 
    profile="2.png"
    online={true}/> */}
   
   </>
  )
}

export default UserCard
