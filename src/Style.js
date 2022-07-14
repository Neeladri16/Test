import './style.css'
import style from './custom.module.css'

function Style(){
    return(
       <div>
        <h1 className="primary">style type 1 in css</h1>
        <h1 style={{backgroundColor:"black",color:"gold"}}>style type 2 in css</h1>
        <h1 className={style.success}>style type 1 in css</h1>
       </div>
    );
}
export default Style;

/*
style.css:-
.primary{
    background-color: black;
    color: green;
    

    custom.module.css:-
    .success{
        background-color: black;
        color: red;
    }
}*/