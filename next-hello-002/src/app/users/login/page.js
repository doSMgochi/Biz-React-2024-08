"use client";

import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";

const LoginPage = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const onLoginHandler = useCallback(async () => {
    await signIn("Credentials", {
      username: user.username,
      password: user.password,
      redirect: true,
      callbackUrl: "/",
    });
  }, [user]);

  return (
    <form>
      <fieldset>
        <legend>로그인</legend>
        <input
          name="username"
          type="email"
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
          placeholder="이메일을 입력하세요"
        />
        <input
          name="password"
          type="password"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          placeholder="비밀번호를 입력하세요"
        />
        <input type="button" value="로그인" onClick={onLoginHandler} />
      </fieldset>
    </form>
  );
};
export default LoginPage;
