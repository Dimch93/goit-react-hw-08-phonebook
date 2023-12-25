import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Form, Label, Input, Button } from './RegisterForm.styles';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input
          type="text"
          name="name"
          placeholder="Enter a name"
          pattern="^[^\d]+$"
          title="The name must contain only letters, apostrophes, hyphens and indents"
          required
        />
      </Label>
      <Label>
        Email
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Please enter a valid email address"
          required
        />
      </Label>
      <Label>
        Password
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
          title="The password must contain only Latin letters (both upper and lower case), numbers and other symbols"
          required
        />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
