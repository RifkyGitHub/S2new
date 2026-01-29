import { useState } from "react";

export default function NameList() {
    let [namaSiswa, setNama] = useState("");
    let [listSiswa, setList] = useState([]);

    return (
        <div>
            <input 
                value={namaSiswa} 
                onChange={(e) => setNama(e.target.value)} 
            />
            <button onClick={() => {
                setList([...listSiswa, namaSiswa]);
                setNama("");
                console.log(listSiswa);
            }}>
                Tambah
            </button>

            <ul>
                {listSiswa.map((item, counter) => (
                    <li key={counter}>
                        {counter + 1}. {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}