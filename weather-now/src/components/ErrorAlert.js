import React from "react";

const ErrorAlert = ({ message }) => {
    return (
        <div
            style={{
                backgroundColor: "#f8d7da",
                color: "#721c24",
                border: "1px solid #f5c6cb",
                padding: "10px",
                margin: "10px 0",
                borderRadius: "5px",
                textAlign: "center",
            }}
        >
            <p>{message}</p>
        </div>
    );
};

export default ErrorAlert;
