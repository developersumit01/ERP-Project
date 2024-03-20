import BoxCSS from "../CSS/Box.module.css";
import UttilCSS from "../CSS/Uttil.module.css";
// Object.entries(object1)
const Box = ({ data }) => {
  return (
    <>
      <div className={BoxCSS.container}>
        <div className={BoxCSS.boxs}>
          {data.map((ele) => {
            return (
              <div className={BoxCSS.box}>
                {Object.entries(ele).map((elem) => {
                  return (
                    <>
                      {elem[0] == "button" ? (
                        <div className={BoxCSS.button}>
                          <span>{elem[1]}</span>
                        </div>
                      ) : elem[0] == "Lunch" ? (
                        <div className={BoxCSS.data}>
                          <span>{elem[0]}</span>
                          <img src={elem[1]} alt="Lunch" />
                        </div>
                      ) : (
                        <div className={BoxCSS.data}>
                          <span>{elem[0]}</span>
                          <span>{elem[1]}</span>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Box;
