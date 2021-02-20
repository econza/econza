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
        photoUrl: 'https://cdn.shopify.com/s/files/1/0023/0565/4882/products/6_1_1ed9c532-225b-49d5-a23f-fb7d6ee8fce7_1200x.jpg?v=1571698172',
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