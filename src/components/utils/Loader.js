import { useEffect } from "react";





const Loader = (props) => {
    if (!localStorage.token) {
      props.history.push("/auth");
      window.location.reload();

    }
if(!props.auth) return <p> loading..</p>


    return <div>{props.children}</div>;
}


export default Loader


