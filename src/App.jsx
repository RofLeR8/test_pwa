import { useState } from "react";
import { getToken } from "firebase/messaging";
import { messaging } from "./firebase";


function App() {

    const [token, setToken] = useState("");
    const [status, setStatus] = useState("");


    async function enableNotifications() {

        try {

            setStatus("Запрашиваю разрешение...");


            const permission =
                await Notification.requestPermission();


            if (permission !== "granted") {

                setStatus(
                    "Разрешение отклонено"
                );

                return;
            }


            setStatus(
                "Получаю FCM token..."
            );


            const currentToken =
                await getToken(
                    messaging,
                    {
                        vapidKey:
                        "BLqt4dudqW4QntCjJsmerjgzfz4rV_2ZSDrAtea8XSh6qtw0ZXJW0sDA-pco2OqJfQxfANYBKkTtttzD58zbfgk"
                    }
                );


            if (currentToken) {

                console.log(
                    currentToken
                );


                setToken(
                    currentToken
                );


                setStatus(
                    "Токен получен"
                );


            } else {

                setStatus(
                    "Firebase не вернул токен"
                );

            }


        } catch(error) {

            console.error(error);

            setStatus(
                error.message
            );

        }

    }



    return (

        <div style={{
            padding:"20px",
            fontFamily:"Arial"
        }}>


            <h1>
                PWA Notification Test
            </h1>


            <button
                onClick={enableNotifications}
                style={{
                    padding:"15px",
                    fontSize:"18px"
                }}
            >
                Включить уведомления
            </button>



            <h3>
                Статус:
            </h3>

            <p>
                {status}
            </p>



            {
                token &&

                <div>

                    <h3>
                        FCM Token:
                    </h3>


                    <textarea

                    value={token}

                    readOnly

                    style={{

                        width:"100%",
                        height:"200px"

                    }}

                    />

                </div>

            }


        </div>

    );

}


export default App;