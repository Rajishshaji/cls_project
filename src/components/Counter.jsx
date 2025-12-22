import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <button
            onClick={() => setCount((c) => c + 1)}
            style={{ padding: "8px 12px", fontSize: 16, cursor: "pointer" }}
        >
            Count: {count}
        </button>
    );
}

export default Counter;