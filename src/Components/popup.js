// import React from 'react'

export default function popup(message) {
    const closePopup = () => {
        document.body.removeChild(popup);
        clearTimeout(autoClose);
    };
    const popup = document.createElement('div');
    popup.innerHTML = message;
    popup.classList.add("popup")
    document.body.appendChild(popup);

    const closeBtn = document.createElement('i');
    popup.appendChild(closeBtn);
    closeBtn.classList.add("close", "bx", "bx-x")
    closeBtn.onclick = closePopup;
    console.log("shown popup")

    const autoClose = setTimeout(closePopup, 3000)

    return {
        close: closePopup
    };
}
