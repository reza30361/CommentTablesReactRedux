import "./App.css";
import { getData, changeName, removeItem } from "./action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";

function App() {
  const [itemSelected, setItemSelected] = useState(false);
  const [text, setText] = useState("");
  const { data } = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="container  my-3">
      <div className="grid lg:grid-cols-9 grid-cols-6 text-center border bg-slate-50">
        <div className="p-3 font-bold border-r">#</div>
        <div className="col-span-4 lg:col-span-7 p-3 font-bold border-r">
          Name
        </div>
        <div className="p-3 font-bold">delete</div>
      </div>
      {data.map((item, index) => {
        return (
          <div key={item.id} className="table-body">
            <div className="p-2 border-r border-inherit font-bold">
              {index + 1}
            </div>
            <div className="col-span-4 lg:col-span-7 text-left p-2 border-r border-inherit grid grid-cols-10">
              {itemSelected === index ? (
                <form
                  className="col-span-10 grid grid-cols-10"
                  onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(changeName(index, text));
                    setItemSelected(false);
                  }}
                >
                  <input
                    type="text"
                    autoFocus
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full col-span-9 input"
                  />
                  <button
                    type="button"
                    className="col-span-1  btn-done"
                    onClick={() => {
                      dispatch(changeName(index, text));
                      setItemSelected(false);
                    }}
                  >
                    Done
                  </button>
                </form>
              ) : (
                <>
                  <div
                    className="col-span-10 cursor-pointer"
                    onClick={() => {
                      setItemSelected(index);
                      setText(item.name);
                    }}
                  >
                    {item.name}
                  </div>
                </>
              )}
            </div>
            <div
              className="p-2 flex justify-center items-center cursor-pointer text-red-600"
              onClick={() => {
                setItemSelected(false);
                dispatch(removeItem(index));
              }}
            >
              <FaTimesCircle className="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
