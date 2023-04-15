import { Input } from "@component/formik/index";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required")
});
function AddProduct() {
  return (
    <div className="relative h-full w-full ">
      <div className="">Add Product </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}>
        {({ errors, touched }) => (
          <Form className="flex h-full w-full flex-col items-stretch justify-end gap-5 px-2 py-4 ">
            <div className="mt-[70%] mb-auto flex flex-col gap-7 justify-self-center ">
              <Input
                error={errors.firstName && touched.firstName}
                name="firstName"
                errorText={errors.firstName}
              />
              <Input
                error={errors.lastName && touched.lastName}
                name="lastName"
                errorText={errors.lastName}
              />
              <Input
                error={errors.email && touched.email}
                name="email"
                errorText={errors.email}
                type="email"
              />
            </div>
            <button type="submit" className="h-12 w-full py-4 ">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddProduct;
