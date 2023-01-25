import { FormEventHandler } from "react";

export const PokemonForm = () => {
  const formSubmitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="container mx-auto my-2">
        <form onSubmit={formSubmitHandler}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Pokemon Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Pokemon Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Colour</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Colour"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Power</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Powers"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
