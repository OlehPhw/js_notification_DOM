"use strict";
const pushNotification = (posTop, posRight, title, description, type)=>{
    const notification = document.createElement("div");
    const titleDiv = document.createElement("h2");
    const textDiv = document.createElement("p");
    document.body.appendChild(notification);
    notification.classList.add("notification", type);
    notification.style.top = `${posTop}px`;
    notification.style.right = `${posRight}px`;
    notification.appendChild(titleDiv);
    titleDiv.classList.add("title");
    titleDiv.textContent = title;
    notification.appendChild(textDiv);
    textDiv.textContent = description;
    setTimeout(()=>notification.remove(), 2000);
};
pushNotification(10, 10, "Title of Success message", "Message example.\n Notification should contain title and description.", "success");
pushNotification(150, 10, "Title of Error message", "Message example.\n Notification should contain title and description.", "error");
pushNotification(290, 10, "Title of Warning message", "Message example.\n Notification should contain title and description.", "warning");

//# sourceMappingURL=index.f75de5e1.js.map