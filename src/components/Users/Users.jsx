import React from "react"
import styles from "./users.module.css"

let Users = (props) => {

if (props.users.length === 0) {
props.setUsers ([
    {
        id: "1",
        photoUrl: 'https://www.meme-arsenal.com/memes/a538041abe14be401629711790bdd84d.jpg',
        followed: false,
        fullName: "Stefon",
        status: "i am a lover",
        location: { city: "Rostov-on-Don", country: "Russia" },
      },
      {
        id: "2",
        photoUrl: 'https://lh3.googleusercontent.com/proxy/RLf6q57CwczZBlB285hBGHsq9saGLBMwLIQTZd1HPGpKrT0cd8WKeywXQl6AOEUekbieXrRjMX9YcMgMPbAntkrlQFdJIvAv8w-IABom0l9NbbFNU5U1glGB8Lvtg36hNW_egR6et6Fwn6W22dVVSKs',
        followed: true,
        fullName: "Yana",
        status: "Whats up?",
        location: { city: "Gomel", country: "Belarus" },
      },
      {
        id: "3",
        photoUrl: 'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkzFB3khwQLJh-v57INgQs76aKTM5SRkZCeTgDn6uOyic&fn=sqr_288',
        followed: true,
        fullName: "Marina",
        status: "VIP",
        location: { city: "Moscow", country: "Russia" },
      },
    ]
)}

return <div>
{
    props.users.map(u => <div key={u.id}>
        <span>
            <div>
                <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
                {u.followed 
                ? <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button> 
                : <button onClick={ () => { props.follow(u.id)}  }>Follow</button>}
                
            </div>
        </span>
        <span>
            <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </span>
        </span>
    </div>)
}
</div>
}

export default Users;