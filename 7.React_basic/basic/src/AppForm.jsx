import React, { useState } from "react";

export default function AppForm() {
  const [form, setFrom] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFrom({ ...form, [name]: value });
    // setFrom({ ...form, [email]: value });
  };
  return (
    <form>
      <label htmlFor="name">이름</label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="email">이메일</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>submit</button>
    </form>
  );
}
