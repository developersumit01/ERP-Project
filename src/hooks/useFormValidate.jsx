const useFormValidate = (dataArray, error) => {
  let errors = {};
  dataArray.forEach((data) => {
    let message = "";
    if (
      error[data.name]?.some((ele) => {
        if (!ele.regex.test(data.value)) {
          message = ele.message;
          return true;
        }
      })
    ) {
      errors[data.name] = message;
    }
  });
  return errors;
};

export default useFormValidate;
