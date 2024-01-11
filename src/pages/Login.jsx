import { Link } from "react-router-dom";

export default function Login() {
  const onSubmit = () => {};

  return (
    <div className="mt-24">
      <form onSubmit={onSubmit}>
        <div>
          <label for="email">이메일</label>
          <input
            className="block border-2 border-secondary w-full rounded-lg py-2 px-1"
            type="email"
            id="email"
          />
        </div>
        <div className="mt-8">
          <label for="password">비밀번호</label>
          <input
            className="block border-2 border-secondary w-full rounded-lg py-2 px-1"
            type="password"
            id="password"
          />
        </div>

        <button class="mt-8 text-white bg-primary w-full p-2 rounded-md mt-4">
          간편 로그인하기
        </button>
      </form>
      <div className="mt-4">
        계정이 없으신가요?
        <Link className="ml-2 text-primary" to="/signup">
          회원가입하러 가기
        </Link>
      </div>
    </div>
  );
}
