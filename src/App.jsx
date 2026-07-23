import { getToken } from "firebase/messaging";
import { messaging } from "./firebase";


function App(){


async function enableNotifications(){


const permission =
await Notification.requestPermission();



if(permission !== "granted"){

alert(
"Нет разрешения"
);

return;

}



const token =
await getToken(
messaging,
{

vapidKey:
"BLqt4dudqW4QntCjJsmerjgzfz4rV_2ZSDrAtea8XSh6qtw0ZXJW0sDA-pco2OqJfQxfANYBKkTtttzD58zbfgk"

}
);



console.log(
"DEVICE TOKEN:",
token
);



alert(
"Токен получен. Смотри console"
);



}



return (

<div>

<h1>
PWA Notification Test
</h1>


<button
onClick={enableNotifications}
>

Включить уведомления

</button>


</div>

)


}


export default App;
