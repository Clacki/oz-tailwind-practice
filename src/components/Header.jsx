/** @format */

export default function Header() {
  const linkCls = "text-[13px] font-normal";
  return (
    <header className="flex items-center justify-between bg-black px-5 py-2.5">
      <h2>OZ코딩스쿨</h2>
      <ul className="m-0 flex list-none items-center justify-center gap-5 p-0">
        <li className={linkCls}>로그인</li>
        <li className={linkCls}>회원가입</li>
        <li className={linkCls}>내클래스</li>
      </ul>
    </header>
  );
}
