import React from "react";
import {styled} from "baseui";
import {Input} from "baseui/input";
import {Button} from 'baseui/button';
import {FormControl} from 'baseui/form-control';
import {Card} from 'baseui/card';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { connect } from "react-redux";

import Helmet from "../components/Helmet";
import { login } from "../modules/auth";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Too Short!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const Layout = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  marginTop: '15%'
});

const Login = ({ login }) => (
  <Layout>
    <Helmet title="Login" />
    <Card
      overrides={{Root: {style: {width: '328px'}}}}
      title="Welcome"
    >
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values, bag) => {
          try {
            await login(values.email, values.password);
          } catch (err) {

          } finally {
            bag.setSubmitting(false);
          }
        }}
        render={props => (
          <form onSubmit={props.handleSubmit}>
            <FormControl
              label="Email"
              caption={props.touched.email ? props.errors.email : ""}
            >
              <Input
                name="email"
                error={props.errors.email && props.touched.email}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.email}
              />
            </FormControl>
            <FormControl
              label="Password"
              caption={props.touched.password ? props.errors.password : ""}
            >
              <Input
                name="password"
                type="password"
                error={props.errors.password && props.touched.password}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.password}
              />
            </FormControl>
            <Button isLoading={props.isSubmitting} style={{ width: "100%" }} type="submit">
              Login
            </Button>
          </form>
        )}
      />
    </Card>
  </Layout>
);

const mapStateToProps = state => ({});

const mapDispatchToProps = ({
  login
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
