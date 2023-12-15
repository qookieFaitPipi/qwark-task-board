import React from 'react';

// components
import LoginForm from './LoginForm/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div>
      <LoginForm />
    </div>
  )
}

export default React.memo(LoginPage);
