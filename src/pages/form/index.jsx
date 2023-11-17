import { Box, useMediaQuery, TextField, Button } from "@mui/material";
import Header from "../../components/Header";
import { Formik } from "formik";
import * as yup from "yup";

//https://formik.org/docs/overview

//https://www.npmjs.com/package/yup for data validation

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  phone: "",
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Email invalid").required("required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Is not a valid phone number")
    .required("required"),
  address: yup.string().required("required"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px");
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box m="30px">
      <Header title="New Contact" subtitle="Creat new Contact" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="20px"
              gridTemplateColumns="repeat(4, minmax(0 1fr))"
              sx={{
                "&>div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2", borderRadius: "5px" }}
              ></TextField>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2", borderRadius: "5px" }}
              ></TextField>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2", borderRadius: "5px" }}
              ></TextField>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx={{ gridColumn: "span 2", borderRadius: "5px" }}
              ></TextField>
              <Box display="flex" justifyContent="start" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Add Contact
                </Button>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
