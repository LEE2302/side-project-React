import Form from "./Form";

const FormBox = (props) => {
  const formDataState = (dumy) => {
    const formDatas = {
      id: Math.random.toString(),
      ...dumy,
    };

    props.appFormState(formDatas);
  };

  return (
    <div>
      <Form formDataStateSave={formDataState} />
    </div>
  );
};

export default FormBox;
