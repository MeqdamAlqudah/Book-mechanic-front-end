import axios from 'axios';
import { useSelector } from 'react-redux';
import store from '../../redux/configureStore';

const AddItemForm = () => {
  const POST_CARS_DATA = 'POST_CARS_DATA';
  const user = useSelector((el) => el.userReducer.current_user);
  const submitHandler = (event) => {
    event.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/v1/cars',
      data: {
        brand: event.target[0].value,
        model: event.target[1].value,
        registration: event.target[2].value,
        photo: event.target[3].value,
        user_id: user ? user.id : 1,
      },
      headers: {
        'Content-Type': 'application/json',

      },
    }).then((res) => store.dispatch(
      { type: POST_CARS_DATA, newitem: res.data },
    )).catch((error) => {
      throw Error(error);
    });
  };

  return (
    <div className="main">
      <form onSubmit={submitHandler}>
        <input type="text" name="brand" placeholder="Car Brand" />
        <input type="text" name="model" placeholder="Car Model" />
        <input type="text" name="registration" placeholder="Car Registration" />
        <input type="text" name="photo" placeholder="Car Photo Url" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddItemForm;
