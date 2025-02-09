import { useState } from "react";

const Lesson1_2 = () => {

    const [form, setForm] = useState({
        firstname: "Code",
        lastName: "Shin",
        email: "shincode@gmail.com"
    })

    //form.firstname = "Mutable" //mutableな操作で、アンチパターン

    const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        // immutableな操作
        // スプレッド構文を使用することで、簡単に新しいオブジェクトを作成することができる
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <p>lesson1-2</p>
            <div className="flex mb-5">
                <label htmlFor="name">
                    First Name
                    <input type="text" className="border border-slate-500 rounded-md p-2" name="firstname"
                     onChange={onChangeForm}/>
                </label>
                <label htmlFor="name">
                    Last Name
                    <input type="text" className="border border-slate-500 rounded-md p-2" name="lastName"
                     onChange={onChangeForm}/>
                </label>
                <label htmlFor="email">
                    Email
                    <input type="text" className="border border-slate-500 rounded-md p-2" name="email"
                     onChange={onChangeForm}/>
                </label>
            </div>
            <p>
                {form.firstname}
                <br />
                {form.lastName}
                <br />
                {form.email}
                <br />
            </p>
        </div>
    )
};

export default Lesson1_2;
