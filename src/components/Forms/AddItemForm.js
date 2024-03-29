import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import store from '../../redux/configureStore';
import style from './style.module.css';

const AddItemForm = () => {
  const [carSubmited, setCarSubmited] = useState(false);
  const POST_CARS_DATA = 'POST_CARS_DATA';

  const user = useSelector((el) => el.userReducer.current_user);
  const submitHandler = (event) => {
    event.preventDefault();

    axios({
      method: 'post',
      url: `https://morning-retreat-71597.herokuapp.com/api/v1/users/${user[0].id}/cars`,
      data: {
        brand: event.target[0].value,
        model: event.target[1].value,
        registration: event.target[2].value,
        photo: event.target[3].value,
        user_id: user[0].id,
      },
      headers: {
        'Content-Type': 'application/json',

      },
    }).then((res) => {
      store.dispatch(
        { type: POST_CARS_DATA, newitem: res.data },

      );
      setCarSubmited(true);
      setTimeout(() => { setCarSubmited(false); }, 3000);
    }).catch((error) => {
      throw Error(error);
    });
  };

  if (!carSubmited) {
    return (
      <div className={`main ${style.mainform}`}>
        <form onSubmit={submitHandler} className={style.formItem}>
          <input type="text" name="brand" placeholder="Car Brand" className={style.formElement} />
          <input type="text" name="model" placeholder="Car Model" className={style.formElement} />
          <input type="text" name="registration" placeholder="Car Registration" className={style.formElement} />
          <input type="text" name="photo" placeholder="Car Photo Url" className={style.formElement} />
          <button type="submit" className={style.formElement}>Submit</button>
        </form>
      </div>
    );
  }
  return (<h1>Car submited success</h1>);
};

export default AddItemForm;
