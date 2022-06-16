import AxiosWrapper from '../../requirments/AxiosWrapper';
import store from '../../redux/configureStore';

const AddItemForm = () => {
  const POST_CARS_DATA = 'POST_CARS_DATA';

  const submitHandler = (event) => {
    event.preventDefault();
    AxiosWrapper.post('https://127.0.0.1:3000/api/v1/cars', {
      brand: event.target[0].value,
      model: event.target[1].value,
      registration: event.target[2].value,
      photo: event.target[3].value,
    }).then((res) => res.json)
      .then((json) => store.dispatch({ type: POST_CARS_DATA, newitem: json }))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="brand" placeholder="Car Brand" />
      <input type="text" name="model" placeholder="Car Model" />
      <input type="text" name="registration" placeholder="Car Registration" />
      <input type="text" name="photo" placeholder="Car Photo Url" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddItemForm;